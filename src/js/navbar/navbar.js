const burger = document.querySelector('#js-burger');
const links = document.querySelectorAll('.nav-bar__item');
const nav = document.querySelector('#js-nav');

const handleAnimation = () => {
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `itemFade 2s ease forwards ${index / 7 + 0.3}s`;
    }
  });
};

export const toggleBurgerMenu = () => {
  burger.classList.toggle('header__burger-button--open');
  nav.classList.toggle('nav-bar--open');
  handleAnimation();
};

export const closeMenuByLinkClicked = () => {
  burger.classList.remove('header__burger-button--open');
  nav.classList.remove('nav-bar--open');
  handleAnimation();
};
