const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
};

function changeBGC() {
  const changeColor = getRandomHexColor();
  body.style.backgroundColor = changeColor;
  spanColor.textContent = changeColor;
};

button.addEventListener("click", (changeBGC));
