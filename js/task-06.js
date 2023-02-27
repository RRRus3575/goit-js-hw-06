const inputEl = document.querySelector("#validation-input");

function validation(event) {
  function changeClass(remove, add) {
    event.currentTarget.classList.remove(remove);
    event.currentTarget.classList.add(add);
  }
  if (parseInt(inputEl.dataset.length) === event.target.value.length) {
    changeClass("invalid", "valid");
  } else {
    changeClass("valid", "invalid");
  }
}

inputEl.addEventListener("blur", validation);
