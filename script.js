function typeText(elementId, text, callback) {
    const element = document.getElementById(elementId);
    let i = 0;
    element.innerText = "";
    const speed = 70; // Скорость печати (мс)
    function type() {
        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

function adaptTheme() {
    document.body.style.background = window.Telegram.WebApp.themeParams.bg_color || "#1a1a1a";
    document.body.style.color = window.Telegram.WebApp.themeParams.text_color || "#ff4d4d";
}