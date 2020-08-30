const words = document.querySelector(".words").children;
const output = document.querySelector(".output");

let wordIndex = 0;
let charIndex = 0;
let textArray;

function start() {
    const text = words[wordIndex].getAttribute("data-text")
    textArray = text.split("");
    output.innerHTML = "";
    typing();
}

function typing() {

    if (charIndex == textArray.length) {
        charIndex = 0;
        if (wordIndex == words.length - 1) {
            wordIndex = 0;
        }
        else {
            wordIndex++;
        }
        setTimeout(function () {
            start();
        }, 3000)

    }
    else {


        span = document.createElement("span");
        span.innerHTML = textArray[charIndex];
        output.appendChild(span);
        charIndex++;
        setTimeout(typing, 150);
    }


}

window.onload = start();