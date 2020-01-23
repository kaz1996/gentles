import { createCardByTag, createCardBySearch } from '../card/card';

const highlightButton = document.querySelector('#js-highlight-button');

const MoveHighlightButton = (filterButton) => {
  highlightButton.style.display = 'block';
  highlightButton.style.top = `${filterButton.offsetTop}px`;
  highlightButton.style.left = `${filterButton.offsetLeft}px`;
  highlightButton.style.width = `${filterButton.offsetWidth}px`;
  highlightButton.style.height = `${filterButton.offsetHeight}px`;
};

export const filterCardsByTag = (filterButton, highlightOn = true) => {
  if (highlightOn) MoveHighlightButton(filterButton);
  createCardByTag(filterButton.textContent.toLowerCase().trim());
};

export const filterCardsBySearch = (searchText) => {
  highlightButton.style.display = 'none';
  createCardBySearch(searchText);
};
