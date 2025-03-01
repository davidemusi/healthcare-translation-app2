
const startBtn = document.getElementById("start-btn");
const languageSelect = document.getElementById("language-select");
const originalText = document.getElementById("original-text");
const translatedText = document.getElementById("translated-text");
const speakBtn = document.getElementById("speak-btn");

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    originalText.value = transcript;

    fetch("/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: transcript, target_language: languageSelect.value }),
    })
    .then((response) => response.json())
    .then((data) => {
        translatedText.value = data.translated_text;
    })
    .catch(error => {
        console.error("Translation error:", error);
        alert("Translation failed. Please try again.");
    });
};

recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    alert("Speech recognition failed. Please try again.");
};

startBtn.addEventListener("click", () => {
    recognition.start();
});

speakBtn.addEventListener("click", () => {
    if (!translatedText.value) {
        alert("No translated text to read.");
        return;
    }
    
    const utterance = new SpeechSynthesisUtterance(translatedText.value);
    utterance.lang = languageSelect.value === "French" ? "fr-FR" : 
                     languageSelect.value === "Spanish" ? "es-ES" : "de-DE";
    window.speechSynthesis.speak(utterance);
});
