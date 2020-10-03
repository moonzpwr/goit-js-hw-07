// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// -Сколько символов должно быть в инпуте,
// указывается в его атрибуте data - length.
// -Если введено подходящее количество, то
// border инпута становится зеленым, если неправильное - красным.

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", validation);

function validation(event) {
  const letngthOfInput = event.currentTarget.value.length;
  const requiredLength = inputEl.dataset.length;

  if (letngthOfInput < requiredLength) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
}
