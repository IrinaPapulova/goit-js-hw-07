const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector(".color");
const changeColor = getRandomHexColor();

button.addEventListener("click", changeBGC);

function changeBGC() {
  body.style.backgroundColor = changeColor;
  spanColor.textContent = changeColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
};