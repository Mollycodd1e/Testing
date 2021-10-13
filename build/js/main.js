'use strict';

(function () {
  const cargoType = document.querySelector('.main-page__cargo-type-wrapper');
  const cargoBlockName = 'cargo-type';
  const dangerClass = document.querySelector('.main-page__danger-class-wrapper');
  const dangerBlockName = 'danger-class';
  const liftingCapacity = document.querySelector('.main-page__lifting-capacity-wrapper');
  const liftingBlockName = 'lifting-capacity';
  const loadType = document.querySelector('.main-page__load-type-wrapper');
  const loadBlockName = 'load-type';

  const selectChanger = function(inputBlock, blockName) {
    if (inputBlock) {
      const inputBlockToggle = inputBlock.querySelector('button');
      const inputBlockList = inputBlock.querySelector('ul')
      const inputBlockOptions = inputBlockList.querySelectorAll('li');

      inputBlockToggle.addEventListener('click', function () {
        if (inputBlock.classList.contains('main-page__' + blockName + '-wrapper--closed')) {
          inputBlock.classList.add('main-page__' + blockName + '-wrapper--opened');
          inputBlock.classList.remove('main-page__' + blockName + '-wrapper--closed');
          inputBlockOptions[0].focus();
        } else {
          inputBlock.classList.remove('main-page__' + blockName + '-wrapper--opened');
          inputBlock.classList.add('main-page__' + blockName + '-wrapper--closed');
          inputBlockOptions[0].blur();
        }
      });

      inputBlockOptions.forEach(element => {
        element.addEventListener('click', function() {
          inputBlock.classList.remove('main-page__' + blockName + '-wrapper--opened');
          inputBlock.classList.add('main-page__' + blockName + '-wrapper--closed');
          inputBlockOptions.forEach(option => option.classList.remove('main-page__' + blockName + '-option--active'));
          element.classList.add('main-page__' + blockName + '-option--active');
        })
      });

      inputBlockToggle.onblur = function() {
        if (inputBlock.classList.contains('main-page__' + blockName + '-wrapper--opened')) {
          inputBlockOptions[0].focus();
        }
      }
    }
  }

  selectChanger(cargoType, cargoBlockName);
  selectChanger(dangerClass, dangerBlockName);
  selectChanger(liftingCapacity, liftingBlockName);
  selectChanger(loadType, loadBlockName);
})();

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
