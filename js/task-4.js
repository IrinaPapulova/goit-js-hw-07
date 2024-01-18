const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const emailForm = loginForm.elements.email.value.trim();
  const passwordForm = loginForm.elements.password.value.trim();
  
  if (emailForm === "" || passwordForm === "") {
    alert("All form fields must be filled in");
  } else {
    console.log({ "Email": emailForm, "Password": passwordForm})
  }
    loginForm.reset();
}
  
 