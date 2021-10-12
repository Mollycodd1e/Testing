'use strict';

(function () {
  const temperatureCheckbox = document.querySelector('.main-page__temperature-regime-wrapper').querySelector('input[type=checkbox]');

  if (temperatureCheckbox) {
    const temperatureBlock = document.querySelector('.main-page__temperature-select-wrapper');

    temperatureCheckbox.addEventListener('change', function() {
      if(temperatureCheckbox.checked) {
        temperatureBlock.classList.remove('main-page__temperature-select-wrapper--closed');
      } else {
        temperatureBlock.classList.add('main-page__temperature-select-wrapper--closed');
      }
    })
  }
})();
