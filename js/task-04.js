const buttonDecrement = document.querySelector(".decrement");
const buttonIncrement = document.querySelector(".increment");

const counterValue = 0;

buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
});
buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
});

console.log(counterValue);
