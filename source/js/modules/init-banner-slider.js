const bannerSlider = document.querySelector('.banner-slider');
let swiper;

const initSwiper = (slider) => {
// eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });

  /* swiper = new Swiper(slider, {})*/

};

const initBannerSlider = () => {
  if (!bannerSlider) {
    return;
  }

  initSwiper(bannerSlider);

};

export {initBannerSlider};
