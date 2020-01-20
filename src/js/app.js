import '../scss/main.scss';
import disableHoverByScroll from './util';
import './navbar/navbar';
import { checkTag, checkName } from './card';

const filterButtons = document.querySelectorAll('.filter__button');
const searchForm = document.querySelector('#js-search-form');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('#js-close');
const carousel = modal.querySelector('#js-carousel');
const highlight = document.querySelector('#js-highlight-button');

const checkButtonShoudldBeDisplay = (counter, images, nextButton, prevButton) => {
  if (counter >= images.length - 1) {
    nextButton.style.display = 'none';
    prevButton.style.display = 'block';
  } else if (counter <= 0) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'block';
  } else {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
  }
};

const slideImage = (images, imageIndex) => {
  const prevButton = modal.querySelector('#js-prev');
  const nextButton = modal.querySelector('#js-next');

  let counter = imageIndex;
  const size = carousel.clientWidth;
  carousel.style.transform = `translateX(${-size * counter}px)`;

  checkButtonShoudldBeDisplay(counter, images, nextButton, prevButton);

  prevButton.addEventListener('click', () => {
    if (counter <= 0) return;
    counter -= 1;
    carousel.style.transition = 'all .5s ease-out';
    carousel.style.transform = `translateX(${-size * counter}px)`;
  });

  nextButton.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    counter += 1;
    carousel.style.transition = 'all .5s ease-out';
    carousel.style.transform = `translateX(${-size * counter}px)`;
  });

  carousel.addEventListener('transitionend', () => {
    checkButtonShoudldBeDisplay(counter, images, nextButton, prevButton);
  });
};

const createImage = (image) => {
  const imageElemnent = document.createElement('img');
  imageElemnent.classList.add('carousel__image');
  imageElemnent.src = image.src;
  carousel.appendChild(imageElemnent);
};

const updateModal = () => {
  const images = document.querySelectorAll('.card__image');
  carousel.innerHTML = '';

  images.forEach((image, index) => {
    createImage(image);
    image.addEventListener('click', () => {
      modal.classList.add('modal--open');
      slideImage(images, index);
    });
  });
};

const removeClass = (elements, ...classNames) => {
  elements.forEach((element) => {
    element.classList.remove(...classNames);
  });
};

const MoveHighlightButton = (filterButton) => {
  highlight.style.display = 'block';
  highlight.style.top = `${filterButton.offsetTop}px`;
  highlight.style.left = `${filterButton.offsetLeft}px`;
  highlight.style.width = `${filterButton.offsetWidth}px`;
  highlight.style.height = `${filterButton.offsetHeight}px`;
};

window.addEventListener('load', () => {
  disableHoverByScroll();
  checkTag('all');
  updateModal();
});

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    removeClass(filterButtons, 'button--active', 'button--outline-hidden');
    filterButton.classList.add('button--active', 'button--outline-hidden');
    MoveHighlightButton(filterButton);
    checkTag(filterButton.textContent.toLowerCase());
    updateModal();
  });
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = searchForm.querySelector('#js-input');
  const inputText = input.value.toLowerCase();

  highlight.style.display = 'none';
  removeClass(filterButtons, 'button--active', 'button--outline-hidden');
  checkName(inputText);
  updateModal();
  searchForm.reset();
});

modalCloseButton.addEventListener('click', () => {
  modal.classList.remove('modal--open');
  carousel.style.transition = '';
});
