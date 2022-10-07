const listCardsSliderCollection = document.querySelectorAll('.list-cards--slider');

const initSwiper = (slider) => {
  let swiper;
// eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    slidesPerView: 2,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 32
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      },
    }
  });

  const clickButtonShowAllHandler = (evt) => {
    if (evt.target.closest('.section-title button')) {
      swiper.destroy(true, true);
      slider.classList.remove('list-cards--slider');
      slider.classList.add('list-cards--grid');
      sectionCard.removeEventListener('click', clickButtonShowAllHandler);
      sectionCard.querySelector('.section-title button').classList.add('is-none');
    }
  }

  const sectionCard = slider.closest('.section-cards');
  sectionCard.addEventListener('click', clickButtonShowAllHandler);
};

const initListCardsSlider = () => {
  if (!listCardsSliderCollection.length) {
    return;
  }
  listCardsSliderCollection.forEach((slider) => initSwiper(slider));
};

export {initListCardsSlider};
