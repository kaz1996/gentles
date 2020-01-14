const images = document.querySelectorAll('.card__image');
const closeModal = document.querySelector('#js-close');
const modal = document.querySelector('#js-modal');

images.forEach((image) => {
  image.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
