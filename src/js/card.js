import items from './items';

const itemsContainer = document.querySelector('#js-items');

const createCard = (item) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  <div class="card__image-box">
  <img src="${item.src}" alt="${item.alt}" class="card__image">
  <button class="card__cart-button"><i class="fas fa-shopping-cart"></i></button>
    </div>
    <div class="card__body">
      <p class="card__text">${item.name}</p>
      <p class="card__text card__text--right">${item.price}</p>
    </div>
    `;
  itemsContainer.appendChild(card);
};

export const checkTag = (inputTag) => {
  itemsContainer.innerHTML = '';
  items.forEach((item) => {
    if (inputTag === 'all' || inputTag === item.tag[1]) {
      createCard(item);
    }
  });
};

export const checkName = (inputText) => {
  itemsContainer.innerHTML = '';
  items.forEach((item) => {
    const itemNameLower = item.name.toLowerCase();
    if (itemNameLower.includes(inputText)) {
      createCard(item);
    }
  });
};
