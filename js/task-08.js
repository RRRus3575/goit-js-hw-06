const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const mail = formEl.email.value;
  const password = formEl.password.value;

  if (mail === "" || password === "") {
    window.alert("Мають бути заповнені всі поля");
    return;
  }

  const formData = {
    mail,
    password,
  };

  console.log(formData);

  event.target.reset();
});
