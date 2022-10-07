const breakpointSm = window.matchMedia('(max-width: 767px)');
const breakpointMd = window.matchMedia('(max-width: 1023px)');
const listCardsSliderCollection = document.querySelectorAll('.list-cards--slider');
const NUMBER_ITEMS_SLIDER_LARGE_SCREEN = 4;
const NUMBER_ITEMS_SLIDER_MIDDLE_SCREEN = 3;
const NUMBER_ITEMS_SLIDER_SMALL_SCREEN = 2;

const hideButtonShowAll = () => {
  if (!listCardsSliderCollection.length) {
    return;
  }

  const compareNumberItems = (n) => {
    listCardsSliderCollection.forEach((slider) => {
      const itemCollection = slider.querySelectorAll('li');
      const sliderButton = slider.closest('section').querySelector('.section-title button');
      if (itemCollection.length <= n) {
        sliderButton.classList.add('is-none');
      } else {
        if (sliderButton.classList.contains('is-none')) {
          sliderButton.classList.remove('is-none');
        }
      }
    })
  }

  const breakpointChecker = () => {
    if (breakpointSm.matches) {
      compareNumberItems(NUMBER_ITEMS_SLIDER_SMALL_SCREEN);
    }
    else {
      if (breakpointMd.matches) {
        compareNumberItems(NUMBER_ITEMS_SLIDER_MIDDLE_SCREEN);
      }
      else {
        compareNumberItems(NUMBER_ITEMS_SLIDER_LARGE_SCREEN);
      }
    }
  };

  breakpointSm.addListener(breakpointChecker);
  breakpointMd.addListener(breakpointChecker);
  breakpointChecker();
}

export {hideButtonShowAll};
