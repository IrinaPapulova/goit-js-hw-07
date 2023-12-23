const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const emailForm = loginForm.elements.email.value;
  const passwordForm = loginForm.elements.password.value;
  
    if (emailForm === "" || passwordForm === "") {
    return console.log("All form fields must be filled in");
  }

  console.log(`Email: ${emailForm}, Password: ${passwordForm}`);
  loginForm.reset();
}

  
