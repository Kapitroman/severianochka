const breakpointSm = window.matchMedia('(max-width: 767px)');
const breakpointMd = window.matchMedia('(max-width: 1023px)');

const hideButtonShowAll = (slider, numberItemsArray) => {

  const compareNumberItems = (n) => {
    const itemCollection = slider.querySelectorAll('li');
    const sliderButton = slider.closest('section').querySelector('.section-title button');
    if (itemCollection.length <= n) {
      sliderButton.classList.add('is-none');
    } else {
      if (sliderButton.classList.contains('is-none')) {
        sliderButton.classList.remove('is-none');
      }
    }
  };

  const breakpointChecker = () => {
    if (breakpointSm.matches) {
      compareNumberItems(numberItemsArray[0]);
    } else {
      if (breakpointMd.matches) {
        compareNumberItems(numberItemsArray[1]);
      } else {
        compareNumberItems(numberItemsArray[2]);
      }
    }
  };

  breakpointSm.addListener(breakpointChecker);
  breakpointMd.addListener(breakpointChecker);
  breakpointChecker();
};

export {hideButtonShowAll};
