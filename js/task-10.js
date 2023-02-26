function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
console.log(input);
boxes.setAttribute(
  "style",
  "display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 10px;"
);

function addBox() {
  if (input.value < 1 || input > 100) {
    window.alert("Введіть, будь-ласка, число від 1 до 100");
  } else {
    let heightWidth = 30;
    let fontSize = 6;
    const array = [];

    for (let i = 0; i <= input.value; i += 1) {
      const box = document.createElement("div");
      box.setAttribute(
        "style",
        `background-color: ${getRandomHexColor()}; height: ${heightWidth}px; width: ${heightWidth}px; font-size: ${fontSize}px; border-radius: 95% 25% 25% 95%; display: flex; justify-content: center; align-items: center;`
      );
      box.textContent = `${getRandomHexColor()}`;
      heightWidth += 10;
      fontSize += 1;
      array.push(box);
    }
    boxes.append(...array);
  }
  input.value = "0";
}
function getAddBox() {
  addBox(input.value);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

btnCreate.addEventListener("click", getAddBox);
btnDestroy.addEventListener("click", destroyBoxes);
