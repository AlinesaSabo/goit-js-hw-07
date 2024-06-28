const userName = document.querySelector(".login-form");
userName.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const email = elements.email.value.trim();
  const password = elements.password.value.trim();

  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }
  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);

  event.currentTarget.reset();
}
