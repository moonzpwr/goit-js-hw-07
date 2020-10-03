// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его
// текущее значение в span#name - output.Если инпут
// пустой, в спане должна отображаться строка 'незнакомец'.

const inputEl = document.querySelector("#name-input");
const buttonTextContentEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onChangeInput);
inputEl.addEventListener("blur", onBlurInput);

function onChangeInput(event) {
  buttonTextContentEl.textContent = event.currentTarget.value;
}
function onBlurInput(event) {
  if (event.currentTarget.value === "") {
    buttonTextContentEl.textContent = "незнакомец";
  }
}
