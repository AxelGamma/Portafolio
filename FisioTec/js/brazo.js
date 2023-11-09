$(document).ready(function () {

    /* Usando el speech */

    let speech = new SpeechSynthesisUtterance();
    speech.lang = "es";

    let voices = [];

    let voiceSelect = document.querySelector(".btninfoCub");

    window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        speech.voice = voices[0];

        voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
    };

    voiceSelect.addEventListener("change", () => {
        speech.voice = voices[voiceSelect.value];
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

    /* Botones Tarjetas */



    /* Tarjetas Cub */
    /* tj1 */
    document.querySelector(".btninfoCub1").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#infcub1").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });
    document.querySelector(".btPausecub1").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub1").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });

    /* tj2 */
    document.querySelector(".btninfoCub2").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#infcub2").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });
    document.querySelector(".btPausecub2").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub2").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    /* tj3 */
    document.querySelector(".btninfoCub3").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#infcub3").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });
    document.querySelector(".btPausecub3").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub3").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });

    /* tj4 */
    document.querySelector(".btninfoCub4").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#infcub4").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });
    document.querySelector(".btPausecub4").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub4").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    /* tj5 */
    document.querySelector(".btninfoCub5").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#infcub5").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });
    document.querySelector(".btPausecub5").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub5").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });


    /* tj6 */
    document.querySelector(".btninfoCub6").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#infcub6").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });
    document.querySelector(".btPausecub6").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub6").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    /* tj7 */
    document.querySelector(".btninfoCub7").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#infcub7").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });
    document.querySelector(".btPausecub7").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub7").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    /* tj8 */
    document.querySelector(".btninfoCub8").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#infcub8").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });
    document.querySelector(".btPausecub8").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub8").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    /* tj9 */
    document.querySelector(".btninfoCub9").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#infcub9").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });
    document.querySelector(".btPausecub9").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub9").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    /* tj10 */
    document.querySelector(".btninfoCub10").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#infcub10").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });
    document.querySelector(".btPausecub10").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub10").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    /* tj11 */
    document.querySelector(".btninfoCub11").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#infcub11").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });
    document.querySelector(".btPausecub11").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub11").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    
    /* tj12 */
    document.querySelector(".btninfoCub12").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#infcub12").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });
    document.querySelector(".btPausecub12").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub12").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    /* tj13 */
    document.querySelector(".btninfoCub13").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#infcub13").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });
    document.querySelector(".btPausecub13").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub13").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    /* tj14 */
    document.querySelector(".btninfoCub14").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#infcub14").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });
    document.querySelector(".btPausecub14").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub14").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    /* tj15 */
    document.querySelector(".btninfoCub15").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#infcub15").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });
    document.querySelector(".btPausecub15").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub15").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    /* tj16 */
    document.querySelector(".btninfoCub16").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#infcub16").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });
    document.querySelector(".btPausecub16").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub16").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    /* tj17 */
    document.querySelector(".btninfoCub17").addEventListener("click", () => {
        /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
        const fisioterapiaInfo = document.querySelector("#infcub17").textContent;

        speech.text = fisioterapiaInfo;
        window.speechSynthesis.cancel(speech);
        window.speechSynthesis.speak(speech);
    });
    document.querySelector(".btPausecub17").addEventListener("click", () => {
        // Pausar la síntesis de voz
        window.speechSynthesis.pause();
    });

    document.querySelector(".btReanudarcub17").addEventListener("click", () => {
        // Reanudar la síntesis de voz
        window.speechSynthesis.resume();
    });
    

    /* Pop ups */

    



});

