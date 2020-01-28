import items from '../card/items';

const cart = document.querySelector('#js-cart');
const cartItemAmount = document.querySelector('#js-cart-amount');
const cartTotalPrice = cart.querySelector('#js-cart-total');
let cartItems = [];

const createCartItem = (item) => {
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart__item');
  cartItem.dataset.id = item.id;
  cartItem.innerHTML = `
    <div class="cart__image-box">
      <img src="${item.src}" alt="${item.alt}" class="cart__item-image" />
    </div>
    <div class="cart__item-info">
      <span class="cart__item-name">${item.name}</span>
      <span class="cart__item-price">$${item.price}</span>
    </div>
    <div class="cart__item-operation">
      <div class="cart__item-counter">
        <button class="cart__count-up" data-id="${item.id}">
          <i class="fas fa-angle-up"></i>
        </button>
        <span class="cart__item-count">${item.amount}</span>
        <button class="cart__count-down" data-id="${item.id}">
          <i class="fas fa-angle-down"></i>
        </button>
      </div>
      <button class="cart__delete-button" data-id="${item.id}">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  `;
  cart.insertBefore(cartItem, cartTotalPrice);
};

const calculateTotal = (cartItemsArray) => {
  let totalPrice = 0;
  let totalAmount = 0;
  cartItemsArray.forEach((item) => {
    totalPrice += item.price * item.amount;
    totalAmount += item.amount;
  });
  cartItemAmount.innerHTML = totalAmount;
  cartTotalPrice.innerHTML = `Total: $${totalPrice}`;
};

const handleItemOperation = () => {
  const countUpButtons = document.querySelectorAll('.cart__count-up');
  const counDownButtons = document.querySelectorAll('.cart__count-down');
  const deleteItemButtons = document.querySelectorAll('.cart__delete-button');

  countUpButtons.forEach((countUpButton) => {
    countUpButton.addEventListener('click', () => {
      const id = Number(countUpButton.dataset.id);
      cartItems.forEach((cartItem) => {
        if (cartItem.id === id) {
          cartItem.amount += 1;
          const itemCount = document.querySelector(`[data-id="${id}"] .cart__item-count`);
          itemCount.innerHTML = cartItem.amount;
          calculateTotal(cartItems);
        }
      });
    });
  });

  counDownButtons.forEach((countDownButton) => {
    countDownButton.addEventListener('click', () => {
      const id = Number(countDownButton.dataset.id);
      cartItems.forEach((cartItem) => {
        if (cartItem.id === id) {
          cartItem.amount -= 1;
          if (cartItem.amount <= 0) return;
          const itemCount = document.querySelector(`[data-id="${id}"] .cart__item-count`);
          itemCount.innerHTML = cartItem.amount;
          calculateTotal(cartItems);
        }
      });
    });
  });

  deleteItemButtons.forEach((deleteItemButton) => {
    deleteItemButton.addEventListener('click', () => {
      const id = Number(deleteItemButton.dataset.id);
      cartItems = cartItems.filter((item) => item.id !== id);
      cart.removeChild(document.querySelector(`[data-id="${id}"]`));
      const cartAddButton = document.querySelector(`.card [data-id="${id}"]`);
      cartAddButton.disabled = false;
      cartAddButton.innerHTML = `<i class="fa fa-shopping-cart"></i>ADD TO CART`;
      calculateTotal(cartItems);
    });
  });
};

export const setCartItem = (savedCartItems) => {
  cartItems = [...savedCartItems];
  cartItems.forEach((cartItem) => createCartItem(cartItem));
  calculateTotal(cartItems);
  handleItemOperation();
};

export const checkItemInCart = (cartButton) => {
  const inCart = cartItems.find(({ id }) => id === Number(cartButton.dataset.id));
  if (inCart) {
    cartButton.disabled = true;
    cartButton.innerHTML = 'In Cart';
  }
};

export const updateCart = (addedItem) => {
  const itemId = Number(addedItem.dataset.id);
  const cartItem = { ...items.find(({ id }) => id === itemId), amount: 1 };
  cartItems.push(cartItem);
  createCartItem(cartItem);
  calculateTotal(cartItems);
  handleItemOperation();
};

window.addEventListener('unload', () => {
  localStorage.setItem('products', JSON.stringify(cartItems));
});
