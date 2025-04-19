
/**
 * create element
 */
function createElement() {
    const element = document.getElementById("hogeId")
    element.innerHTML = "element from js"
}


function speak() {
    const text = "こんにちは、世界！";
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = "ja-JP"; // 日本語
    window.speechSynthesis.speak(msg);
}

createElement();