const productSlider = document.querySelector('.product-slider');

const initSwiper = (slider) => {
// eslint-disable-next-line no-undef

  const mainSlider = slider.querySelector('.product-slider__main');
  const thumbsSlider = slider.querySelector('.product-slider__thumbs');

  const swiper = new Swiper(thumbsSlider, {
    spaceBetween: 8,
    slidesPerView: 5,
    direction: 'vertical',
    breakpoints: {
      768: {
        spaceBetween: 16
      },
    }
  });

  const swiper2 = new Swiper(mainSlider, {
    slidesPerView: 1,
    spaceBetween: 10,

    thumbs: {
      swiper: swiper,
    },
  });
};

const initProductSlider = () => {
  if (!productSlider) {
    return;
  }

  initSwiper(productSlider);

};

export {initProductSlider};
