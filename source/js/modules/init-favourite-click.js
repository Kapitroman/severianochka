const favouriteMenuItem = document.querySelector('[data-link = "favourite"]');

const initFavouriteClick = () => {
  /*
  if (!favouriteMenuItem) {
    return;
  }
  */

  const clickFavouriteButtonHandler = (evt) => {
    const targetButton = evt.target.closest('.card-product__favourite');
    if (!targetButton) {
      return;
    }

    if (targetButton.classList.contains('is-actived')) {
      targetButton.classList.remove('is-actived');
      if (favouriteMenuItem) {
        let count = parseInt(favouriteMenuItem.getAttribute('data-count'));
        count--;
        favouriteMenuItem.setAttribute('data-count', count);
        const labelCounter = favouriteMenuItem.querySelector('.user-menu-item__counter');
        labelCounter.textContent = count;
        if (count === 0) {
          labelCounter.classList.remove('is-showed');
        }
      }
    } else {
      targetButton.classList.add('is-actived');
      if (favouriteMenuItem) {
        let count = parseInt(favouriteMenuItem.getAttribute('data-count'));
        const labelCounter = favouriteMenuItem.querySelector('.user-menu-item__counter');
        if (count === 0) {
          labelCounter.classList.add('is-showed');
        }
        count++;
        favouriteMenuItem.setAttribute('data-count', count);
        labelCounter.textContent = count;
      }
    }
  };

  document.addEventListener('click', clickFavouriteButtonHandler);
}

export {initFavouriteClick};
