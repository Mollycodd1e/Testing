'use strict';

(function () {
  const adressOne = document.querySelector('.main-page__adress-one-wrapper');

  if (adressOne) {
    adressOne.querySelector('input[type=checkbox]').addEventListener('change', function() {
      const adressOneButton = adressOne.querySelector('button');
      if (adressOneButton.style.opacity !== 1) {
        adressOneButton.style.opacity = '1';
      }
      else {
        adressOneButton.style.opacity = '0.3';
      }
    })
  }
})();
