const formEl = document.querySelector(".login-form");
const inputsEl = document.querySelectorAll("input");
console.log(inputsEl);

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(formEl.value);

  event.target.reset();
});
