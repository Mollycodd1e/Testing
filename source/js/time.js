'use strict';

(function () {
  const adressOne = document.querySelector('.main-page__adress-one-wrapper');
  const adressTwo = document.querySelector('.main-page__adress-two-wrapper');
  const activeButton = '1';
  const disabledButton = '0.3';

  const changeOpacity = function(block) {
    if (block) {
      block.querySelector('input[type=checkbox]').addEventListener('change', function() {
        const button = block.querySelector('button');
        if (block.querySelector('input[type=checkbox]').checked) {
          button.style.opacity = activeButton;
          button.disabled = false;
        } else {
          button.style.opacity = disabledButton;
          button.disabled = true;
        }
      })
    }
  }

  changeOpacity(adressOne);
  changeOpacity(adressTwo);
})();
