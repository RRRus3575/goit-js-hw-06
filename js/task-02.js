const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const createItem = (elements) => {
  return elements.map((element) => {
    const item = document.createElement("li");
    item.classList.add("item");
    item.textContent = element;
    return item;
  });
};

const itemList = createItem(ingredients);
listEl.append(...itemList);
