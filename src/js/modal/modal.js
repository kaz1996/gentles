import { updateCarouselContent, slideImage } from './carousel/carousel';

const modal = document.querySelector('#js-modal');
const carousel = modal.querySelector('#js-carousel');

export const updateModalContents = () => {
  const images = document.querySelectorAll('.card__image');
  carousel.innerHTML = '';

  images.forEach((image, index) => {
    updateCarouselContent(carousel, image.src);
    image.addEventListener('click', () => {
      modal.classList.add('modal--open');
      slideImage(images, index, modal, carousel);
    });
  });
};

export const closeModal = () => {
  modal.classList.remove('modal--open');
  carousel.style.transition = 'none';
};
