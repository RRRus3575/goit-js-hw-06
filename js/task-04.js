const buttonDecrement = document.querySelector(
  `button[data-action="decrement"]`
);
const buttonIncrement = document.querySelector(
  `button[data-action="increment"]`
);
const valueEl = document.querySelector("#value");

let counterValue = 0;

function increment(event) {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
function decrement(event) {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

buttonDecrement.addEventListener("click", increment);
buttonIncrement.addEventListener("click", decrement);
