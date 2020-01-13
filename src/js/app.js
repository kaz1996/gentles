import '../scss/main.scss';

const body = document.querySelector('body');
const filterButtons = document.querySelectorAll('.filter__button');
const cards = document.querySelectorAll('.card');
const form = document.querySelector('.form');
const input = form.querySelector('#js-input');
let timer;

const filterCards = (buttonText) => {
  cards.forEach((card) => {
    if (buttonText === 'all') {
      card.classList.remove('card--display-none');
    } else if (buttonText === card.dataset.tag) {
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
  input.value = '';
  cards.forEach((card) => {
    if (card.textContent.toLocaleLowerCase().includes(input.value)) {
      card.classList.remove('card--display-none');
    } else {
      card.classList.add('card--display-none');
    }
  });
});

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    removeActiveClass();
    filterCards(filterButton.textContent.toLocaleLowerCase());
    filterButton.classList.add('button--active');
  });
});
