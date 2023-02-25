const inputEl = document.querySelector("#validation-input");

function validation(event) {
  if (6 == event.currentTarget.value.length) {
    event.target.style.border = "3px solid green";
  } else {
    event.target.style.border = "3px solid red";
  }
}

inputEl.addEventListener("focus", (event) => {
  return (event.target.style.border = "3px solid black");
});

inputEl.addEventListener("blur", validation);
