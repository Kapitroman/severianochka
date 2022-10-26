import noUiSlider from 'nouislider';

const  rangeFilter = document.querySelector('.range-filter');

const initRangeSlider = () => {
  if (!rangeFilter) {
    return;
  }

  const slider = rangeFilter.querySelector('#range-slider');
  const input0 = rangeFilter.querySelector('#input-with-keypress-0');
  const input1 = rangeFilter.querySelector('#input-with-keypress-1');
  const inputs = [input0, input1];
  const buttonClear = rangeFilter.querySelector('.range-filter__header button');

  noUiSlider.create(slider, {
    start: [100, 900],
    connect: true,
    range: {
        'min': 0,
        'max': 1000
    },
    format: wNumb({
      decimals: 0
    }),
  });

  slider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
  });

  // Listen to keydown events on the input field.
  inputs.forEach(function (input, handle) {

    input.addEventListener('change', function () {
        slider.noUiSlider.setHandle(handle, this.value);
    });
  });

  buttonClear.addEventListener('click', function () {
    slider.noUiSlider.set([0, 1000]);
  });
};

export {initRangeSlider};
