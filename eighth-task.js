// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и
// нажимает кнопку Создать, после чего рендерится
// коллекция.При нажатии на кнопку Очистить, коллекция
// элементов очищается.

// Создай функцию createBoxes(amount), которая
// принимает 1 параметр amount - число.Функция
// создает столько div, сколько указано в amount
// и добавляет их в div#boxes.

// Каждый созданный div:

// -Имеет случайный rgb цвет фона
// -Размеры самого первого div - 30px на 30px
// -Каждый следующий div после первого, должен
// быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const boxesContainerEl = document.querySelector("div#boxes");
const inputEl = document.querySelector("#controls > input");
const createButtonEl = document.querySelector("[data-action='render']");
const clearButtonEl = document.querySelector("[data-action='destroy']");
console.log(inputEl.value);

createButtonEl.addEventListener("click", createBoxes);
clearButtonEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = inputEl.value;

  let boxesWidth = 20;
  let boxesHeight = 20;
  let result = [];

  for (let i = 0; i < amount; i += 1) {
    boxesWidth += 10;
    boxesHeight += 10;
    // boxesContainerEl.insertAdjacentHTML(
    //   "afterbegin",
    //   `<div id="createdBoxes" style='background-color: #${getRandomColor()}; width: ${boxesWidth}px; height:${boxesHeight}px;'></div>`
    // );
    const createdBoxesEl = document.createElement("div");
    createdBoxesEl.setAttribute("id", "createdBoxes");
    createdBoxesEl.setAttribute(
      "style",
      `background-color: #${getRandomColor()}; width: ${boxesWidth}px; height:${boxesHeight}px;`
    );
    result.push(createdBoxesEl);
  }
  boxesContainerEl.append(...result);
}

function getRandomColor() {
  let color = "";
  for (let i = 0; i < 3; i += 1) {
    const sub = Math.floor(Math.random() * 256).toString(16);
    color += sub.length === 1 ? "0" + sub : sub;
  }
  return color;
}

function destroyBoxes() {
  boxesContainerEl.innerHTML = "";
}
