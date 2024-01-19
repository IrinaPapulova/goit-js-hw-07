const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
    input.value.trim() === "" ?
    output.textContent = "Anonymous" :
    output.textContent = input.value.trim();
});
