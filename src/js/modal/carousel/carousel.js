export const updateCarouselContent = (carousel, imageSource) => {
  const imageElemnent = document.createElement('img');
  imageElemnent.classList.add('carousel__image');
  imageElemnent.src = imageSource;
  carousel.appendChild(imageElemnent);
};

const checkButtonShoudldBeDisplay = (counter, images, nextButton, prevButton) => {
  if (counter >= images.length - 1) {
    nextButton.style.display = 'none';
    prevButton.style.display = 'block';
  } else if (counter <= 0) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'block';
  } else {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
  }
};

export const slideImage = (images, imageIndex, modal, carousel) => {
  const prevButton = modal.querySelector('#js-prev');
  const nextButton = modal.querySelector('#js-next');

  let counter = imageIndex;
  const size = carousel.clientWidth;
  carousel.style.transform = `translateX(${-size * counter}px)`;

  checkButtonShoudldBeDisplay(counter, images, nextButton, prevButton);

  prevButton.addEventListener('click', () => {
    if (counter <= 0) return;
    counter -= 1;
    carousel.style.transition = 'all .5s ease-out';
    carousel.style.transform = `translateX(${-size * counter}px)`;
  });

  nextButton.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    counter += 1;
    carousel.style.transition = 'all .5s ease-out';
    carousel.style.transform = `translateX(${-size * counter}px)`;
  });

  carousel.addEventListener('transitionend', () => {
    checkButtonShoudldBeDisplay(counter, images, nextButton, prevButton);
  });
};
