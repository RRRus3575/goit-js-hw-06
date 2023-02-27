const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", handleInputChange);

function handleInputChange(event) {
  if (event.currentTarget.value.trim().length > 0) {
    spanEl.textContent = event.currentTarget.value;
  } else {
    spanEl.textContent = "Anonymous";
  }
}
