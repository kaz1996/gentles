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

export const createCardByTag = (tag) => {
  itemsContainer.innerHTML = '';
  items.forEach((item) => {
    if (tag === 'all' || tag === item.tag[1]) {
      createCard(item);
    }
  });
};

export const createCardBySearch = (searchText) => {
  itemsContainer.innerHTML = '';
  items.forEach((item) => {
    const itemNameLower = item.name.toLowerCase();
    if (itemNameLower.includes(searchText)) {
      createCard(item);
    }
  });
};
