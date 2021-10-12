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
        } else {
          inputBlock.classList.remove('main-page__' + blockName + '-wrapper--opened');
          inputBlock.classList.add('main-page__' + blockName + '-wrapper--closed');
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
    }
  }

  selectChanger(cargoType, cargoBlockName);
  selectChanger(dangerClass, dangerBlockName);
  selectChanger(liftingCapacity, liftingBlockName);
  selectChanger(loadType, loadBlockName);
})();
