import {hideButtonShowAll} from './hide-button-show-all';

const listSpecialBannersSliderCollection = document.querySelectorAll('.special-banners--slider');
const numberItemsScreen = [1, 2, 2]; // количество карточек увмещающиеся на мобильном, планшетном и десктопном экранах, чтобы убрать кнопку "Все ..."

const initSwiper = (slider) => {
  let swiper;

  // eslint-disable-next-line no-undef
  swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });

  const clickButtonShowAllHandler = (evt) => {
    if (evt.target.closest('.section-title button')) {
      swiper.destroy(true, true);
      slider.classList.remove('special-banners--slider');
      slider.classList.add('special-banners--grid');
      sectionCard.removeEventListener('click', clickButtonShowAllHandler);
      sectionCard.querySelector('.section-title button').classList.add('is-none');
    }
  };

  const sectionCard = slider.closest('.section');
  sectionCard.addEventListener('click', clickButtonShowAllHandler);
};

const initSpecialBannersSlider = () => {
  if (!listSpecialBannersSliderCollection.length) {
    return;
  }

  listSpecialBannersSliderCollection.forEach((slider) => {
    initSwiper(slider);
    hideButtonShowAll(slider, numberItemsScreen);
  });
};

export {initSpecialBannersSlider};
