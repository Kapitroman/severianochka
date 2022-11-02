//const cardProductButtonCollection = document.querySelectorAll('.card-product__button:not(.disabled)');
const cardProductButtonCollection = document.querySelectorAll('[data-button]:not(.disabled)');
const cartMenuItem = document.querySelector('[data-link = "cart"]');

const initCartButtonClick = () => {
  if (!cardProductButtonCollection.length) {
    return;
  }

  const clickCartButtonHandler = (evt) => {
    evt.target.closest('button').classList.add('is-none');
    const cartCount = evt.target.closest('[data-product]').querySelector('.product-count');
    //cartCount.classList.add('is-showed');
    cartCount.classList.remove('is-none');
    if (cartMenuItem) {
      let count = parseInt(cartMenuItem.getAttribute('data-count'));
      const labelCounter = cartMenuItem.querySelector('.user-menu-item__counter');
      if (count === 0) {
        labelCounter.classList.remove('is-none');
      }
      count++;
      cartMenuItem.setAttribute('data-count', count);
      labelCounter.textContent = count;
    }
  }

  cardProductButtonCollection.forEach((button) => button.addEventListener('click', clickCartButtonHandler));
}

export {initCartButtonClick};
