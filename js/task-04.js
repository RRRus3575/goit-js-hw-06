const buttonDecrement = document.querySelector(
  `button[data-action="decrement"]`
);
const buttonIncrement = document.querySelector(
  `button[data-action="increment"]`
);
const counterValue = document.querySelector("#value");

const counter = function ({ step = 1, counterValue = 0 }) {
  this.value = counterValue;
  this.step = step;
};

counter.handleClickDecrement = () => {
  console.log("buy");
  return (value -= 1);
};
counter.handleClickIncrement = () => {
  // return (value += 1);
  console.log("buy");
};

buttonDecrement.addEventListener("click", handleClickDecrement);
buttonIncrement.addEventListener("click", handleClickIncrement);
