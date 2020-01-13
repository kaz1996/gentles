import '../scss/main.scss';

const filterButtons = document.querySelectorAll('.filter__button');
const cards = document.querySelectorAll('.card');

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

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    removeActiveClass();
    filterCards(filterButton.textContent.toLocaleLowerCase());
    filterButton.classList.add('button--active');
  });
});
