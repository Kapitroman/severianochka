const btns = document.querySelectorAll('.btn');

const removeFocus = () => {
  if (!btns.length) {
    return;
  }

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.blur();
    });
  });
};

export {removeFocus};
