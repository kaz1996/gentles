const body = document.querySelector('body');
let timer;

const disableHoverByScroll = () => {
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

export default disableHoverByScroll;
