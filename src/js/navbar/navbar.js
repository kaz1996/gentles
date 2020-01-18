const burger = document.querySelector('#js-burger');
const nav = document.querySelector('#js-nav');
const links = nav.querySelectorAll('.nav-bar__item');

const handleAnimation = () => {
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `itemFade 2s ease forwards ${index / 7 + 0.3}s`;
    }
  });
};

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger-button--open');
  nav.classList.toggle('nav-bar--open');
  handleAnimation();
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    burger.classList.remove('header__burger-button--open');
    nav.classList.remove('nav-bar--open');
    handleAnimation();
  });
});
