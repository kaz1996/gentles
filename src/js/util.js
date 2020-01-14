const body = document.querySelector('body');
let timer;
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
