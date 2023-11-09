$(document).ready(function () {
    $('.nav-bg').hide();
    $('.main').hide();

    $('.footer').css("border-top-right-radius", "0rem");
    $('.footer').css("border-top-left-radius", "0rem");

    // Verificar si existe una cookie de inicio de sesión
    const isLoggedIn = getCookie("isLoggedIn");

    if (isLoggedIn === "true") {
        // El usuario ya ha iniciado sesión, ocultar el formulario de inicio de sesión
        $('.login').hide();
        $('.nav-bg').show();
        $('.main').show();
    }

    $('.formularioSession').submit(function (event) {
        event.preventDefault();

        var username = $('#username').val();
        var password = $('#password').val();

        if (username === 'adulto' && password === '1234') {
            // Inicio de sesión exitoso
            // Configurar una cookie para rastrear el estado de inicio de sesión
            setCookie("isLoggedIn", "true", 1); // Puedes ajustar la duración de la cookie según tus necesidades

            $('.login').hide();
            $('.nav-bg').show();
            $('.main').show();
        } else {
            alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
        }
    });


    /* Usando el speech */

    let speech = new SpeechSynthesisUtterance();
    speech.lang = "es";

    let voices = [];

    let voiceSelect = document.querySelector(".btinfoFisioterapia");

    window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        speech.voice = voices[0];

        voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
    };

    voiceSelect.addEventListener("change", () => {
        speech.voice = voices[voiceSelect.value];
    });
    /* GB1 */
    document.querySelector(".btinfoFisioterapia").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#fisioterapiaInfo").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });

    document.querySelector(".btPause").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudar").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });

    /* GB2 */
    document.querySelector(".btinfoFisioterapia1").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#fisioterapiaInfo1").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });

    document.querySelector(".btPause1").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudar1").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    /* GB3 */
    document.querySelector(".btinfoFisioterapia2").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#fisioterapiaInfo2").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });

    document.querySelector(".btPause2").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudar2").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    /* GB4 */
    document.querySelector(".btinfoFisioterapia3").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#fisioterapiaInfo3").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });

    document.querySelector(".btPause3").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudar3").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    /* GB5 */
    document.querySelector(".btinfoFisioterapia4").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#fisioterapiaInfo4").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });

    document.querySelector(".btPause4").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudar4").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    /* GB6 */
    document.querySelector(".btinfoFisioterapia5").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#fisioterapiaInfo5").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });

    document.querySelector(".btPause5").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudar5").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    
    /* Cubito informacion */
    document.querySelector(".btninfoCub").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#icub").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });

    document.querySelector(".btPausecub").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });

});

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}