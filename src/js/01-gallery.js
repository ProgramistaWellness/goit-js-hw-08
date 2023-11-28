import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

const createGallery = () =>
  galleryItems.forEach(item => {
    const createdListItem = document.createElement('li');
    gallery.insertAdjacentElement('beforeend', createdListItem);

    const createdLink = document.createElement('a');
    createdListItem.insertAdjacentElement('beforeend', createdLink);
    createdLink.href = item.original;
    createdLink.classList.add('gallery__item');

    const createdImg = document.createElement('img');
    createdLink.insertAdjacentElement('beforeend', createdImg);
    createdImg.src = item.preview;
    createdImg.alt = item.description;
    createdImg.classList.add('gallery__image');
  });
createGallery();

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */ captionsData: 'alt',
  captionDelay: 250,
});
lightbox.on('show.simplelightbox');
console.log(galleryItems);
