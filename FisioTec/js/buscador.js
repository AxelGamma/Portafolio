document.addEventListener('DOMContentLoaded', function () {
    const voiceSearchButton = document.getElementById('voiceSearchButton');
    const voiceSearchInput = document.getElementById('voiceSearchInput');

    // Obtener todas las tarjetas y secciones de título
    const tarjetas = document.querySelectorAll('.tarjeta');
    const titulosCubito = document.querySelectorAll('.tituloCubito');

    // Verificar si el navegador soporta el reconocimiento de voz
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();

        // Configurar el reconocimiento
        recognition.continuous = false;
        recognition.interimResults = false;

        // Evento cuando se reconoce la voz
        recognition.onresult = function (event) {
            const transcript = event.results[0][0].transcript;
            voiceSearchInput.value = transcript;

            // Filtrar las tarjetas y secciones de título según el texto reconocido
            filterTarjetasAndTitulos(transcript.toLowerCase());
        };

        // Evento cuando se hace clic en el botón de búsqueda por voz
        voiceSearchButton.addEventListener('click', function () {
            recognition.start();
        });
    } else {
        // Si el navegador no soporta el reconocimiento de voz, ocultar el botón
        voiceSearchButton.style.display = 'none';
    }

    // Función para filtrar las tarjetas y secciones de título
    function filterTarjetasAndTitulos(searchText) {
        let tarjetasEncontradas = false;

        // Resetear el estilo de todas las tarjetas y secciones de título
        tarjetas.forEach(function (tarjeta) {
            tarjeta.style.display = 'none';
        });

        titulosCubito.forEach(function (titulo) {
            titulo.style.display = 'none';
        });

        // Filtrar las tarjetas según el texto reconocido
        tarjetas.forEach(function (tarjeta) {
            const h3Text = tarjeta.querySelector('h3').innerText.toLowerCase();
            const pText = tarjeta.querySelector('p').innerText.toLowerCase();

            // Mostrar la tarjeta solo si el texto del h3 o p coincide con la búsqueda
            if (h3Text.includes(searchText) || pText.includes(searchText)) {
                tarjeta.style.display = 'flex';
                tarjetasEncontradas = true;
            }
        });

        // Mostrar la sección de título solo si se encontraron tarjetas
        titulosCubito.forEach(function (titulo) {
            titulo.style.display = tarjetasEncontradas ? 'block' : 'none';
        });
    }
});
