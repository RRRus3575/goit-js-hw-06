const buttonDecrement = document.querySelector(
  `button[data-action="decrement"]`
);
const buttonIncrement = document.querySelector(
  `button[data-action="increment"]`
);
const counterValue = document.querySelector("#value");

// const counter = function ({ step = 1, counterValue = 0 }) {
//   this.value = counterValue;
//   this.step = step;
// };
let value = 0;

buttonDecrement.addEventListener("click", (value) => {
  console.log("buy");
  return (value -= 1);
});
buttonIncrement.addEventListener("click", (value) => {
  console.log("buy");
  return (value += 1);
});

console.log(value);
