const listArticlesSliderCollection = document.querySelectorAll('.list-articles--slider');

const initSwiper = (slider) => {
  let swiper;
// eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 32
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });

  const clickButtonShowAllHandler = (evt) => {
    if (evt.target.closest('.section-title button')) {
      swiper.destroy(true, true);
      slider.classList.remove('list-articles--slider');
      slider.classList.add('list-articles--grid');
      sectionCard.removeEventListener('click', clickButtonShowAllHandler);
      sectionCard.querySelector('.section-title button').classList.add('is-none');
    }
  }

  const sectionCard = slider.closest('.section');
  sectionCard.addEventListener('click', clickButtonShowAllHandler);
};

const initListArticlesSlider = () => {
  if (!listArticlesSliderCollection.length) {
    return;
  }
  listArticlesSliderCollection.forEach((slider) => initSwiper(slider));
};

export {initListArticlesSlider};
