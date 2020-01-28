import items from './items';
import { updateCart, checkItemInCart } from '../cart/cart';

const itemsContainer = document.querySelector('#js-items');

const createCard = (item) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <div class="card__image-box">
      <img src="${item.src}" alt="${item.alt}" class="card__image" id="js-card-image">
      <button class="card__add-item-button" data-id="${item.id}">
        <i class="fas fa-shopping-cart"></i>
        ADD TO CART
      </button>
    </div>
    <div class="card__body">
      <p class="card__text">${item.name}</p>
      <p class="card__text card__text--right">$${item.price}</p>
    </div>
    `;
  itemsContainer.appendChild(card);
};

const handleCartAddButtons = () => {
  const cartAddButtons = document.querySelectorAll('.card__add-item-button');
  cartAddButtons.forEach((cartAddButton) => {
    checkItemInCart(cartAddButton);
    cartAddButton.addEventListener('click', () => {
      cartAddButton.disabled = true;
      cartAddButton.innerHTML = 'In Cart';
      updateCart(cartAddButton);
    });
  });
};

export const createCardByTag = (inputTag) => {
  itemsContainer.innerHTML = '';
  items.forEach((item) => {
    if (inputTag === 'all' || inputTag === item.tag[1]) {
      createCard(item);
    }
  });
  handleCartAddButtons();
};

export const createCardBySearch = (searchText) => {
  itemsContainer.innerHTML = '';
  items.forEach((item) => {
    const itemNameLower = item.name.toLowerCase();
    if (itemNameLower.includes(searchText)) {
      createCard(item);
    }
  });
  handleCartAddButtons();
};
