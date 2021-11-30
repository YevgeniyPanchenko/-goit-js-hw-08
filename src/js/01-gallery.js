// Add imports above this line
 import SimpleLightbox from 'simplelightbox';
 import "simplelightbox/dist/simple-lightbox.min.css";
 import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
   
    galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
function createGalleryMarkup(images) {
    return images.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
    <img class="gallery__image"
         src="${preview}"
         alt="${description}"
    />
</a>`;
    })
        .join('');
}



    galleryContainer.addEventListener('click', onImageClick);
    
     function onImageClick(evt) {
         evt.preventDefault();
    }

    const lightbox = new SimpleLightbox('.gallery a');
        lightbox.options.captionDelay = 250;
        lightbox.options.captionsData = "alt";
        lightbox.options.captionType = "attr";




