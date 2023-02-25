const inputEl = document.querySelector("#validation-input");

function validation(event) {
  if (inputEl.dataset.length == event.target.value.length) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
}

inputEl.addEventListener("blur", validation);
