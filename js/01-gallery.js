import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(
    (img) =>
      `<div class="gallery__item">
      <a class="gallery__link" href=${img.original}>
      <img
      class="gallery__image"
      src=${img.preview}
      data-source=${img.original}
      alt=${img.description}
    />
    </a>
    </div>`
  )
  .join("");
galleryList.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

galleryList.addEventListener("click", getModalImg);

function getModalImg(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const modalImg = basicLightbox.create(`
  <img src="${evt.target.dataset.source}">
`);
  modalImg.show();

  galleryList.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      modalImg.close();
    }
  });
}
