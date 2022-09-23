const userAuthorized = document.querySelector('.user-authorized');
const breakpoint = window.matchMedia('(max-width:1279px)');

const showAuthorizedMenu = () => {
  if (!userAuthorized ) {
    return;
  }

  const arrowButton = userAuthorized.querySelector('.user-authorized__arrow-container');
  const userWrapLinks = userAuthorized.querySelector('.user-authorized__wrap-links');

  const closeMenu = () => {
    arrowButton.ariaPressed = 'false';

    userAuthorized.classList.remove('is-opened');
    userAuthorized.classList.add('is-closed');
    userWrapLinks.style.setProperty('height', '0');
  };

  const openMenu = () => {
    arrowButton.ariaPressed = 'true';
    const height = userWrapLinks.scrollHeight;
    userWrapLinks.style.setProperty('height', height + 'px');
    userAuthorized.classList.remove('is-closed');
    userAuthorized.classList.add('is-opened');

  };

  const clickOnMenu = () => {
    if (arrowButton.ariaPressed === 'true') {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      if (arrowButton.ariaPressed === 'true') {
        closeMenu();
      }
      arrowButton.removeEventListener('click', clickOnMenu);
    } else {
      arrowButton.addEventListener('click', clickOnMenu);
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}

export {showAuthorizedMenu};
