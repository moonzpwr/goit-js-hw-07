// Напиши скрипт для создания галлереи изображений по массиву данных.
// Используй массив объектов images для создания тегов img
// вложенных в li.Для создания разметки используй шаблонные
// строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами
// через css - классы.

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryContainerEl = document.querySelector("#gallery");
galleryContainerEl.classList.add("animal-list");

const galleryEl = galleryContainerEl.insertAdjacentHTML(
  "afterbegin",
  images.reduce((acc, { url, alt }) => {
    acc += `<li class='animal-item'><img src='${url}' alt='${alt}' class='animal-pic'></li>`;

    return acc;
  }, "")
);

// const makeElemetsOfGallery = ({ url, alt }) => {
//   const galleryEl = document.createElement("img");
//   galleryEl.setAttribute("src", url);
//   galleryEl.setAttribute("alt", alt);
//   galleryEl.classList.add("animal-pic");

//   const galleryItemContainerEl = document.createElement("li");
//   galleryItemContainerEl.append(galleryEl);
//   galleryItemContainerEl.classList.add("animal-item");

//   return galleryItemContainerEl;
// };

// const elemetsRef = images.map(makeElemetsOfGallery);

// console.log(elemetsRef);

// galleryContainerEl.append(...elemetsRef);
