import '../scss/main.scss';

const body = document.querySelector('body');
const filterButtons = document.querySelectorAll('.filter__button');
const cards = document.querySelectorAll('.card');
const images = document.querySelectorAll('.card__image');
const form = document.querySelector('.form');
const closeModal = document.querySelector('#js-close');
let timer;

const filterCards = (buttonText) => {
  cards.forEach((card) => {
    if (buttonText === 'all' || buttonText === card.dataset.tag) {
      card.classList.remove('card--display-none');
    } else {
      card.classList.add('card--display-none');
    }
  });
};

const removeActiveClass = () => {
  filterButtons.forEach((filterButton) => {
    if (filterButton.classList.contains('button--active')) {
      filterButton.classList.remove('button--active');
    }
  });
};

// Scrool時にhoverを無効に
window.addEventListener('scroll', () => {
  clearTimeout(timer);
  if (!body.classList.contains('disable-hover')) {
    body.style.pointerEvents = 'none';
  }
  timer = setTimeout(() => {
    body.style.pointerEvents = 'auto';
  }, 500);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  removeActiveClass();
  const input = form.querySelector('#js-input');
  const inputText = input.value.toLowerCase();
  cards.forEach((card) => {
    const cardTextLower = card.textContent.toLowerCase();
    if (cardTextLower.includes(inputText)) {
      card.classList.remove('card--display-none');
    } else {
      card.classList.add('card--display-none');
    }
  });
  input.value = '';
});

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    removeActiveClass();
    filterCards(filterButton.textContent.toLocaleLowerCase());
    filterButton.classList.add('button--active');
  });
});

const modal = document.querySelector('#js-modal');
images.forEach((image) => {
  image.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
