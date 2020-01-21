const body = document.querySelector('body');
let timer;

export const disableHoverByScroll = () => {
  // Scrool時にhoverを無効に
  window.addEventListener('scroll', () => {
    clearTimeout(timer);
    if (!body.classList.contains('disable-hover')) {
      body.style.pointerEvents = 'none';
    }
    timer = setTimeout(() => {
      body.style.pointerEvents = 'auto';
    }, 500);
  });
};

export const removeMultipleElementsClass = (elements, ...classNames) => {
  elements.forEach((element) => {
    element.classList.remove(...classNames);
  });
};
