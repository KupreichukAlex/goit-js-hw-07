import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainerRef = document.querySelector(".gallery");

const makeGalleryItemMarkup = (arr) => {
  return arr
    .map(({ description: descr, preview, original: orig }) => {
      return `        <a class="gallery__link" href="${orig}">
                            <img
                                class="gallery__image"
                                src="${preview}"
                                data-source="${orig}"
                                alt="${descr}"
                                />
                        </a>
               `;
    })
    .join("");
};

const picturesMarkup = makeGalleryItemMarkup(galleryItems);
galleryContainerRef.insertAdjacentHTML("beforeend", picturesMarkup);

galleryContainerRef.addEventListener("click", onGalleryItemsClick);

function onGalleryItemsClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
// or   if (e.target.classList.contains("gallery")) return;

  const origImg = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${origImg}" alt=""/>
`);
  instance.show();
  window.addEventListener("keydown", onEscClick);

  function onEscClick(event) {
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscClick);
    }
  }
}