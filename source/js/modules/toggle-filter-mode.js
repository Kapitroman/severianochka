import {initModals} from './modals/init-modals';

const breakpoint = window.matchMedia('(max-width: 1023px)');

const toggleFilterMode = () => {
  const filters = document.querySelector('.filters');
  if (!filters) {
    return;
  }
  const filtersWrapper = filters.querySelector('.filters__wrapper');
  const filtersContent = filters.querySelector('.filters__content');
  const filtersCloseButton = filters.querySelector('.filters__close-button');

  let modeModal;

  const toggleMode = () => {
    if (!modeModal) {
      filters.classList.add('modal');
      filters.classList.add('modal--filters');
      filters.classList.add('modal--preload');
      filters.setAttribute('data-modal', 'filters');
      filtersWrapper.classList.add('modal__wrapper');
      const filtersOverlay = document.createElement('div');
      filtersOverlay.classList.add('modal__overlay');
      filtersOverlay.setAttribute('data-close-modal', '');
      filtersWrapper.prepend(filtersOverlay);
      filtersContent.classList.add('modal__content');
      filtersCloseButton.classList.add('modal__close-btn');
      filtersCloseButton.setAttribute('data-close-modal', '');

      initModals();
      modeModal = true;

    } else {

      if (filters.classList.contains('is-active')) {
        window.modals.close();
      }

      filters.classList.remove('modal');
      filters.classList.remove('modal--filter');
      filters.classList.remove('is-initialized');
      filters.removeAttribute('data-modal');
      filtersWrapper.classList.remove('modal__wrapper');
      const filtersOverlay = filtersWrapper.querySelector('.modal__overlay');
      if (filtersOverlay) {
        filtersOverlay.remove();
      }
      filtersContent.classList.remove('modal__content');
      filtersCloseButton.classList.remove('modal__close-btn');
      filtersCloseButton.removeAttribute('data-close-modal');

      modeModal = false;
    }
  };

  const breakpointChecker = () => {
    if ((!breakpoint.matches && !modeModal) || (breakpoint.matches && modeModal)) {
      return;
    }
    toggleMode();
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {toggleFilterMode};
