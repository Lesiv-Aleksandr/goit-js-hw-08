// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items.js';
import 'simplelightbox/dist/simple-lightbox.min.css';


// Change code below this line
const galleryRef = document.querySelector('.gallery');

const makegalleryItemsMarkur = galleryItems.map(galleryItem => {
    const creatingNewModuleInHtml = 
    `<a class="gallery__item" href="${galleryItem.original}">
    <img class="gallery__image"  src="${galleryItem.preview}" alt="${galleryItem.description}" />
  </a>`;
    const addGalleryEl = galleryRef.insertAdjacentHTML('afterbegin',creatingNewModuleInHtml);
   
}).join("");
galleryRef.addEventListener("click", onClick);

const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250} );
function onClick (e) { 
   e.preventDefault();

if (e.target.nodeName !== 'IMG') {
  return;
}
}

