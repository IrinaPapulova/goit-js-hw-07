const button = document.querySelector(".change-color");
const body = document.querySelector("body");

const pText = document.querySelector("p");
const spanColor = document.querySelector(".color");

button.addEventListener("click", changeBGC);

function changeBGC() {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}