const filterButtons = document.querySelectorAll('.filter__button');
const cards = document.querySelectorAll('.card');
const form = document.querySelector('.form');

const filterCards = (buttonText) => {
  cards.forEach((card) => {
    if (buttonText === 'all' || buttonText === card.dataset.tag) {
      card.classList.remove('card--display-none');
    } else {
      card.classList.add('card--display-none');
    }
  });
};

const filterCardsByText = () => {
  const inputText = form.querySelector('#js-input').value;
  const inputTextLower = inputText.toLowerCase();
  cards.forEach((card) => {
    const cardTextLower = card.textContent.toLowerCase();
    if (cardTextLower.includes(inputTextLower)) {
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

form.addEventListener('submit', (event) => {
  event.preventDefault();
  removeActiveClass();
  filterCardsByText();
  form.reset();
});
