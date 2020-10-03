// Счетчик состоит из спана и кнопок, которые
// должны увеличивать и уменьшать значение счетчика на 1.

// -Создай переменную counterValue в которой
// будет хранится текущее значение счетчика.
// -Создай функции increment и decrement для
// увеличения и уменьшения значения счетчика
// -Добавь слушатели кликов на кнопки, вызовы
// функций и обновление интерфейса

const counterEl = document.querySelector("#value");
let counterValue = 0;
const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");

function increment(event) {
  counterValue += 1;
  counterEl.textContent = counterValue;
}
function decrement(event) {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
