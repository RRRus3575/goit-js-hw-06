function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanEl = document.querySelector(".color");
const body = document.querySelector("body");
const buttonChange = document.querySelector(".change-color");
console.log(spanEl);
console.log(body);
console.log(buttonChange);

buttonChange.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = `${color}`;
  spanEl.textContent = `${color}`;
});
