const initProductCount = () => {
  const counters = document.querySelectorAll(".product-count");
  if (!counters.length) {
    return;
  }

  counters.forEach((counter) => {
    const countInput = counter.querySelector("input");
    const decreaseButton = counter.querySelector("[data-count='decrease']");
    const increaseButton = counter.querySelector("[data-count='increase']");

    const decreaseCount = () => {
      let inputValue = parseInt(countInput.value);
      if (!isNaN(inputValue) && inputValue > 1) {
        inputValue--;
        countInput.value = inputValue;
      } else {
        countInput.value = 1;
      }
    }

    const increaseCount = () => {
      let inputValue = parseInt(countInput.value);
      if (!isNaN(inputValue)) {
        inputValue++;
        countInput.value = inputValue;
      } else {
        countInput.value = 1;
      }
    }

    decreaseButton.addEventListener("click", decreaseCount);
    increaseButton.addEventListener("click", increaseCount);
  })

}

export {initProductCount};
