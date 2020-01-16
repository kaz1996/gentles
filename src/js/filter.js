import { checkTag, checkName } from './card';
import displayModal from './modal';

const filterButtons = document.querySelectorAll('.filter__button');
const form = document.querySelector('.form');
const images = document.querySelectorAll('.card__image');
console.log(images);

const removeActiveClass = () => {
  filterButtons.forEach((filterButton) => {
    if (filterButton.classList.contains('button--active')) {
      filterButton.classList.remove('button--active');
    }
  });
};

window.addEventListener('load', () => {
  checkTag('all');
  displayModal(images);
});

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    const tag = filterButton.textContent.toLowerCase();
    removeActiveClass();
    checkTag(tag);
    filterButton.classList.add('button--active');
    const newImages = document.querySelectorAll('.card__image');
    console.log(newImages);
    displayModal(newImages);
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  removeActiveClass();
  const inputText = form.querySelector('#js-input').value;
  const inputTextLower = inputText.toLowerCase();
  checkName(inputTextLower);
  form.reset();
  const newImages = document.querySelectorAll('.card__image');
  console.log(newImages);
});
