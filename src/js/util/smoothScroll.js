const ease = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t -= 1;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

const smoothScroll = (target, duration) => {
  const headerHeight = document.querySelector('#js-header').clientHeight;
  const targetElement = document.querySelector(target);
  const targetElementPosition = targetElement.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetElementPosition - startPosition - headerHeight + 5;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    window.scrollTo(0, ease(timeElapsed, startPosition, distance, duration));
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  window.requestAnimationFrame(animation);
};

export default smoothScroll;
