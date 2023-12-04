/* Usando el speech */

let speech = new SpeechSynthesisUtterance();
speech.lang = "es";

let voices = [];

let voiceSelect = document.querySelector(".problema1");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector(".problema1").addEventListener("click", () => {
    /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
    const fisioterapiaInfo = document.querySelector("#obesidad-info").textContent;

    speech.text = fisioterapiaInfo;
    window.speechSynthesis.cancel(speech);
    window.speechSynthesis.speak(speech);
});
document.querySelector(".problema2").addEventListener("click", () => {
    /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
    const fisioterapiaInfo = document.querySelector("#cardio-info").textContent;

    speech.text = fisioterapiaInfo;
    window.speechSynthesis.cancel(speech);
    window.speechSynthesis.speak(speech);
});

document.querySelector(".problema3").addEventListener("click", () => {
    /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
    const fisioterapiaInfo = document.querySelector("#diabetes-info").textContent;

    speech.text = fisioterapiaInfo;
    window.speechSynthesis.cancel(speech);
    window.speechSynthesis.speak(speech);
});
document.querySelector(".problema4").addEventListener("click", () => {
    /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
    const fisioterapiaInfo = document.querySelector("#hipertensión-info").textContent;

    speech.text = fisioterapiaInfo;
    window.speechSynthesis.cancel(speech);
    window.speechSynthesis.speak(speech);
});
document.querySelector(".problema5").addEventListener("click", () => {
    /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
    const fisioterapiaInfo = document.querySelector("#emocionales-info").textContent;

    speech.text = fisioterapiaInfo;
    window.speechSynthesis.cancel(speech);
    window.speechSynthesis.speak(speech);
});
document.querySelector(".problema6").addEventListener("click", () => {
    /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
    const fisioterapiaInfo = document.querySelector("#habitosAlimentarios-info-info").textContent;

    speech.text = fisioterapiaInfo;
    window.speechSynthesis.cancel(speech);
    window.speechSynthesis.speak(speech);
});
document.querySelector(".problema7").addEventListener("click", () => {
    /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
    const fisioterapiaInfo = document.querySelector("#datodieta1").textContent;

    speech.text = fisioterapiaInfo;
    window.speechSynthesis.cancel(speech);
    window.speechSynthesis.speak(speech);
});
document.querySelector(".problema8").addEventListener("click", () => {
    /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
    const fisioterapiaInfo = document.querySelector("#datodieta2").textContent;

    speech.text = fisioterapiaInfo;
    window.speechSynthesis.cancel(speech);
    window.speechSynthesis.speak(speech);
});
document.querySelector(".problema9").addEventListener("click", () => {
    /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
    const fisioterapiaInfo = document.querySelector("#datodieta3").textContent;

    speech.text = fisioterapiaInfo;
    window.speechSynthesis.cancel(speech);
    window.speechSynthesis.speak(speech);
});
document.querySelector(".problema10").addEventListener("click", () => {
    /* Conseguir el contenido que se encuentra en el id fisioterapiaInfo */
    const fisioterapiaInfo = document.querySelector("#datodieta4").textContent;

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
document.querySelector(".btPause2").addEventListener("click", () => {
    // Pausar la síntesis de voz
    window.speechSynthesis.pause();
});

document.querySelector(".btReanudar2").addEventListener("click", () => {
    // Reanudar la síntesis de voz
    window.speechSynthesis.resume();
});
document.querySelector(".btPause3").addEventListener("click", () => {
    // Pausar la síntesis de voz
    window.speechSynthesis.pause();
});

document.querySelector(".btReanudar3").addEventListener("click", () => {
    // Reanudar la síntesis de voz
    window.speechSynthesis.resume();
});
document.querySelector(".btPause4").addEventListener("click", () => {
    // Pausar la síntesis de voz
    window.speechSynthesis.pause();
});

document.querySelector(".btReanudar4").addEventListener("click", () => {
    // Reanudar la síntesis de voz
    window.speechSynthesis.resume();
});
document.querySelector(".btPause5").addEventListener("click", () => {
    // Pausar la síntesis de voz
    window.speechSynthesis.pause();
});

document.querySelector(".btReanudar5").addEventListener("click", () => {
    // Reanudar la síntesis de voz
    window.speechSynthesis.resume();
});
document.querySelector(".btPause6").addEventListener("click", () => {
    // Pausar la síntesis de voz
    window.speechSynthesis.pause();
});

document.querySelector(".btReanudar6").addEventListener("click", () => {
    // Reanudar la síntesis de voz
    window.speechSynthesis.resume();
});
document.querySelector(".btPause7").addEventListener("click", () => {
    // Pausar la síntesis de voz
    window.speechSynthesis.pause();
});

document.querySelector(".btReanudar7").addEventListener("click", () => {
    // Reanudar la síntesis de voz
    window.speechSynthesis.resume();
});
document.querySelector(".btPause8").addEventListener("click", () => {
    // Pausar la síntesis de voz
    window.speechSynthesis.pause();
});

document.querySelector(".btReanudar8").addEventListener("click", () => {
    // Reanudar la síntesis de voz
    window.speechSynthesis.resume();
});
document.querySelector(".btPause9").addEventListener("click", () => {
    // Pausar la síntesis de voz
    window.speechSynthesis.pause();
});

document.querySelector(".btReanudar9").addEventListener("click", () => {
    // Reanudar la síntesis de voz
    window.speechSynthesis.resume();
});
document.querySelector(".btPause10").addEventListener("click", () => {
    // Pausar la síntesis de voz
    window.speechSynthesis.pause();
});

document.querySelector(".btReanudar10").addEventListener("click", () => {
    // Reanudar la síntesis de voz
    window.speechSynthesis.resume();
});