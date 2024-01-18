const amount = document.querySelector("input");

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

const boxArr = [];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function deleteInputValue() {
  amount.value = "";
}

createBtn.addEventListener("click", () => {
  createBoxes();
  deleteInputValue();
});

function createBoxes() {
  if (amount.value >= 1 && amount.value <= 100) {
    let step = 30;
    for (let i = 0; i < amount.value; i++) {
      const box = document.createElement("div");
      box.style.width = step + `px`;
      box.style.height = step + `px`;
      step += 10;
      
      box.style.backgroundColor = getRandomHexColor();
      boxArr.push(box);
      
      divBoxes.appendChild(box); 
   }
  }
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

amount.addEventListener("change", () => {
  divBoxes.innerHTML = "";
});