import '../scss/main.scss';
import smoothScroll from './util/smoothScroll';
import { removeMultipleElementsClass, disableHoverByScroll } from './util/util';
import { toggleBurgerMenu, closeMenuByLinkClicked, observer } from './navbar/navbar';
import { filterCardsByTag, filterCardsBySearch } from './filter/filter';
import { updateModalContents, closeModal } from './modal/modal';

const sections = document.querySelectorAll('section');
const burger = document.querySelector('#js-burger');
const links = document.querySelectorAll('.nav-bar__item');
const filterButtons = document.querySelectorAll('.filter__button');
const searchForm = document.querySelector('#js-search-form');
const modalBackground = document.querySelector('#js-modal-background');
const modalCloseButton = document.querySelector('#js-close');
const internalLinks = document.querySelectorAll('.nav-bar__link, .button__link');
const modalCloseElements = [modalBackground, modalCloseButton];

window.addEventListener('load', () => {
  disableHoverByScroll();
  sections.forEach((section) => {
    observer.observe(section);
  });
  filterCardsByTag(filterButtons[0], false);
  updateModalContents();
});

burger.addEventListener('click', () => {
  toggleBurgerMenu();
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenuByLinkClicked();
  });
});

internalLinks.forEach((internalLink) => {
  internalLink.addEventListener('click', (event) => {
    event.preventDefault();
    const href = internalLink.getAttribute('href');
    smoothScroll(href, 500);
  });
});

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    removeMultipleElementsClass(filterButtons, 'button--active', 'button--outline-hidden');
    filterButton.classList.add('button--active', 'button--outline-hidden');
    filterCardsByTag(filterButton);
    updateModalContents();
  });
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = searchForm.querySelector('#js-input');
  const inputText = input.value.toLowerCase();

  removeMultipleElementsClass(filterButtons, 'button--active', 'button--outline-hidden');
  filterCardsBySearch(inputText);
  updateModalContents();
  searchForm.reset();
});

modalCloseElements.forEach((closeElement) => {
  closeElement.addEventListener('click', () => {
    closeModal();
  });
});
