const inputAmount = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");
let boxWidth = 30;
let boxHeight = 30;
  
createBtn.addEventListener("click", (event) => {
  event.preventDefault();
  
  function createBoxes(amount) {
    if (inputAmount.value >= 1 && inputAmount.value <= 100) {
      for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        boxWidth += 10;
        boxHeight += 10;
        box.style.width = `${boxWidth}px`;
        box.style.height = `${boxHeight}px`;
        box.style.backgroundColor = getRandomHexColor();
        divBoxes.insertAdjacentElement("beforeend", box);
      }
    }
  }
  createBoxes(inputAmount.value);
  inputAmount.value = "";
  });

destroyBtn.addEventListener("click", () => {
  while (divBoxes.firstChild) {
    divBoxes.firstChild.remove();
  }
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}