const rating = document.querySelector('.rating-field');

const initFormReview = () => {
  if (!rating) {
    return;
  }

  const clickRatingHandler = (evt) => {
    const button = evt.target.closest('form').querySelector('[type=submit]');
    if (button.classList.contains('disabled')) {
      button.classList.remove('disabled');
    }
  };

  rating.addEventListener('change', clickRatingHandler);
};

export {initFormReview};
