'use strict';

(function () {
  const cargoType = document.querySelector('.main-page__cargo-type-wrapper');

  if (cargoType) {
    const cargoTypeToggle = cargoType.querySelector('button');
    const cargoTypeList = cargoType.querySelector('ul')
    const cargoTypeOptions = cargoTypeList.querySelectorAll('li');

    cargoTypeToggle.addEventListener('click', function () {
      if (cargoType.classList.contains('main-page__cargo-type-wrapper--closed')) {
        cargoType.classList.add('main-page__cargo-type-wrapper--opened');
        cargoType.classList.remove('main-page__cargo-type-wrapper--closed');
      } else {
        cargoType.classList.remove('main-page__cargo-type-wrapper--opened');
        cargoType.classList.add('main-page__cargo-type-wrapper--closed');
      }
    });

    cargoTypeOptions.forEach(element => {
      element.addEventListener('click', function() {
        cargoType.classList.remove('main-page__cargo-type-wrapper--opened');
        cargoType.classList.add('main-page__cargo-type-wrapper--closed');
        cargoTypeOptions.forEach(option => option.classList.remove('main-page__cargo-option--active'));
        element.classList.add('main-page__cargo-option--active');
      })
    });
  }
})();
