// Эффект появления текста
function showDeathText() {
    const textElement = document.getElementById("die-text");
    textElement.style.opacity = "0";
    setTimeout(() => {
        textElement.style.transition = "opacity 2s";
        textElement.style.opacity = "1";
    }, 500);
}
showDeathText();