import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(
    (img) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=${img.original}>
      <img
      class="gallery__image"
      src=${img.preview}
      alt=${img.description}
    />
    </a>
    </li>`
  )
  .join("");
galleryList.insertAdjacentHTML("afterbegin", galleryItemsMarkup);
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  disableRightClick: true,
});
