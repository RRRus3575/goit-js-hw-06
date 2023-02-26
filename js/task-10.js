// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const input = document.querySelector("input[type=number]");
// const btnCreate = document.querySelector("button[data-create]");
// const btnDestroy = document.querySelector("button[data-destroy]");
// const boxes = document.querySelector("#boxes");
// boxes.setAttribute(
//   "style",
//   "display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 10px;"
// );

// function addContainer() {
//   if (input.value <= 0 || input > 100) {
//     alert("Введіть, будь-ласка, число від 1 до 100");
//   } else {
//     let heightWidth = 30;
//     let fontSize = 6;
//     const array = [];
//     for (let i = 0; i < input.value; i += 1) {
//       boxes.innerHTML = `<div style ="background-color: ${getRandomHexColor()}, height: ${heightWidth}, width: ${heightWidth}px; font-size: ${fontSize}px; border-radius: 25% 10%; text-align: center;">${getRandomHexColor()}</div>`;
//       heightWidth += 10;
//       fontSize += 1;
//     }
//   }
//   input.value = "0";
// }
// function destroyBoxes() {
//   boxes.innerHTML = "";
// }

// btnCreate.addEventListener("click", () => addContainer());
// btnDestroy.addEventListener("click", () => {
//   destroyContainer();
//   btnCreate.removeEventListener("click", addContainer);
// });
