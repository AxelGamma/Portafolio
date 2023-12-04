$(document).ready(function () {
    let recognition;
    let synth = window.speechSynthesis;
    let utterance;
    let resultadoVoz = ''; // Nueva variable para almacenar el resultado globalmente

    function buscarPorVoz() {
        recognition = new webkitSpeechRecognition() || new SpeechRecognition();
        recognition.lang = 'es-ES';
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = function (event) {
            resultadoVoz = ''; // Limpiar el resultado al comienzo del evento

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                resultadoVoz += event.results[i][0].transcript;
            }

            $("#inputBusqueda").val(resultadoVoz);
        };

        recognition.start();

        setTimeout(function () {
            recognition.stop();
            filtrarTarjetas(resultadoVoz); // Llamar a filtrarTarjetas después de que se detiene el reconocimiento
            leerTarjeta();
        }, 3000);
    }

    function filtrarTarjetas(termino) {
        const terminoMinusculas = termino.toLowerCase();

        $(".contenedor-desayuno, .contenedor-comida, .contenedor-cenas").each(function () {
            let algunaTarjetaVisible = false;

            $(this).find(".tarjeta").each(function () {
                const tituloTarjeta = $(this).find('h3').text().toLowerCase();
                const descripcionTarjeta = $(this).find('p').text().toLowerCase();

                if (tituloTarjeta.includes(terminoMinusculas) || descripcionTarjeta.includes(terminoMinusculas)) {
                    $(this).show();
                    algunaTarjetaVisible = true;
                } else {
                    $(this).hide();
                }
            });

            const tituloDiv = $(this).find(".titulo-recetas h2");
            algunaTarjetaVisible ? tituloDiv.show() : tituloDiv.hide();
        });
    }

    function leerTarjeta() {
        detenerSpeech();

        const primeraTarjetaVisible = $(".tarjeta:visible").first();

        if (primeraTarjetaVisible.length > 0) {
            const contenidoTarjeta = primeraTarjetaVisible.find('.contenido').text();

            utterance = new SpeechSynthesisUtterance(contenidoTarjeta);
            synth.speak(utterance);
        } else {
            alert("No hay tarjetas visibles para leer.");
        }
    }

    // Nuevas funciones
    function pausarSpeech() {
        if (synth.speaking) {
            synth.pause();
        }
    }

    function detenerSpeech() {
        if (synth.speaking || synth.paused) {
            synth.cancel();
        }
    }

    function reanudarSpeech() {
        if (synth.paused) {
            synth.resume();
        }
    }

    $("#btnBuscar").on("click", function () {
        buscarPorVoz();
    });

    $("#formularioBusqueda").submit(function (event) {
        event.preventDefault();
        const termino = $("#inputBusqueda").val();
        filtrarTarjetas(termino);
    });

    // Eventos de los botones
    $(".btPause").on("click", function () {
        pausarSpeech();
    });

    $(".btStop").on("click", function () {
        detenerSpeech();
    });

    $(".btReanudar").on("click", function () {
        reanudarSpeech();
    });

    $(".tarjeta").show();

    // Manejar el evento visibilitychange para detener la síntesis de voz cuando se sale de la pestaña
    document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "hidden") {
            detenerSpeech();
        }
    });
});
