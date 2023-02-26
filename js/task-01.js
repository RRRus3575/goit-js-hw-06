"string";

const elements = document.querySelectorAll(".item");

console.log(`Number of categories: `, elements.length);

elements.forEach((el) => {
  const title = el.firstElementChild.textContent;
  const listEl = el.lastElementChild.children.length;

  console.log(`Category: `, title);
  console.log(`Elements: `, listEl);
});
