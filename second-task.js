// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну
// операцию в список ul.ingredients.Для создания DOM - узлов
// используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsContainerEl = document.querySelector("#ingredients");

// const elemets = []
const elemets = ingredients.map(function (option) {
  const ingridientEl = document.createElement("li");
  ingridientEl.textContent = option;
  return ingridientEl;
});

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingridientEl = document.createElement("li");
//   ingridientEl.textContent = ingredients[i];
//   elemets.push(ingridientEl);
// }

ingredientsContainerEl.append(...elemets);
