const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value.trim();
  const password = formEl.password.value;

  if (email === "" || password === "") {
    window.alert("Мають бути заповнені всі поля");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  event.target.reset();
});
