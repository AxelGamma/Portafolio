$(document).ready(function () {
    // Función para realizar la búsqueda por voz
    function buscarPorVoz() {
        const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
        recognition.lang = 'es-ES';

        // Configurar el reconocimiento continuo
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = function (event) {
            let resultado = '';

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    resultado += event.results[i][0].transcript;
                } else {
                    // Si es un resultado provisional (mientras hablas), puedes mostrarlo en tiempo real
                    resultado += event.results[i][0].transcript;
                }
            }

            // Actualizar el valor del input en tiempo real
            $("#inputBusqueda").val(resultado);

            // Filtrar las tarjetas con el término de búsqueda por voz
            filtrarTarjetas(resultado);
            
        };

        // Comenzar el reconocimiento de voz
        recognition.start();
    }

    // Función para filtrar las tarjetas
    function filtrarTarjetas(termino) {
        alert("resultado: " + termino);
        const terminoMinusculas = termino.toLowerCase();
        let tarjetaEncontrada = false;

        $(".tarjeta").each(function () {
            const contenidoTarjeta = $(this).text().toLowerCase();
            if (contenidoTarjeta.includes(terminoMinusculas)) {
                $(this).show();
                tarjetaEncontrada = true;
            } else {
                $(this).hide();
            }
        });

        // Si no se encontraron tarjetas, podrías mostrar un mensaje o realizar alguna otra acción
        if (!tarjetaEncontrada) {
            // Por ejemplo, mostrar un mensaje
            /* alert("No se encontraron tarjetas con las palabras clave."); */
        }
    }

    // Evento del botón para buscar por voz
    $("#btnBuscar").on("click", function () {
        buscarPorVoz();
    });
    $("#btnbuscarclick").on("click", function () {
        buscarPorVoz();
    });

    // Evento del formulario para realizar la búsqueda
    $("#formularioBusqueda").submit(function (event) {
        event.preventDefault();
        const termino = $("#inputBusqueda").val();
        filtrarTarjetas(termino);
    });
});
