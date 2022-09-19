import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = itemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

function itemMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href= "${original}">
  <img class="gallery__image" src= "${preview}" alt="${description}" />
</a>`
        })
    .join("")
}

galleryContainer.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }

    
    new SimpleLightBox('.gallery a', {
        captionsData: `alt`,
        captionDelay: 250,
        animationSpeed: 250,
        
    });

})
// console.log(galleryItems);


