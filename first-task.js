// Посчитает и выведет в консоль количество категорий в
// ul#categories, то есть элементов li.item.Получится
// 'В списке 3 категории.'.

const allCategoriesEl = document.querySelectorAll(".item");
const countCategories = function () {
  return console.log(`В списке ${allCategoriesEl.length} категории.`);
};
countCategories();

// Для каждого элемента li.item в списке
// ul#categories, найдет и выведет в консоль
// текст заголовка элемента(тега h2) и количество
// элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const nameOfCategoriesEl = Array.from(allCategoriesEl).map(function (el) {
  return `\tКатегория: ${el.querySelector("h2").textContent} \n 
    Количество элементов: ${el.querySelectorAll("li").length}\n\n\n  `;
});
console.log(...nameOfCategoriesEl);
