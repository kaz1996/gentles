const burger = document.querySelector('#js-burger');
const links = document.querySelectorAll('.nav-bar__item');
const nav = document.querySelector('#js-nav');

const handleAnimation = () => {
  links.forEach((link, index) => {
    if (!link.style.animation && window.outerWidth < 1024) {
      link.style.animation = `itemFade 2s ease forwards ${index / 7 + 0.3}s`;
    } else {
      link.style.animation = '';
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

const options = {
  root: null,
  rootMargin: `-10% 0px -90% 0px`,
  threshold: 0,
};

export const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const link = document.querySelector(`a[href="#${entry.target.id}"]`);
      link.classList.add('nav-bar__link--active');
    } else {
      const link = document.querySelector(`a[href="#${entry.target.id}"]`);
      link.classList.remove('nav-bar__link--active');
    }
  });
}, options);
