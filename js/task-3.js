const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
     if (input.value !== "" && input.value !== " ") {
        output.textContent = input.value.trim();
     } else {
        output.textContent = output.currentTarget.value;
     }
});


