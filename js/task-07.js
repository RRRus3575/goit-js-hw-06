const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
console.log(inputEl);
console.log(textEl);

const range = (event) => {
  console.log(event.target.value);
  let fontSize = event.target.value;
  textEl.style.fontSize = `${fontSize}px`;
};
inputEl.addEventListener("input", range);
