'use strict';

(function () {
  const loadType = document.querySelector('.main-page__load-type-wrapper');

  if (loadType) {
    const loadTypeToggle = loadType.querySelector('button');
    const loadTypeList = loadType.querySelector('ul')
    const loadTypeOptions = loadTypeList.querySelectorAll('li');

    loadTypeToggle.addEventListener('click', function () {
      if (loadType.classList.contains('main-page__load-type-wrapper--closed')) {
        loadType.classList.add('main-page__load-type-wrapper--opened');
        loadType.classList.remove('main-page__load-type-wrapper--closed');
      } else {
        loadType.classList.remove('main-page__load-type-wrapper--opened');
        loadType.classList.add('main-page__load-type-wrapper--closed');
      }
    });

    loadTypeOptions.forEach(element => {
      element.addEventListener('click', function() {
        loadType.classList.remove('main-page__load-type-wrapper--opened');
        loadType.classList.add('main-page__load-type-wrapper--closed');
        loadTypeOptions.forEach(option => option.classList.remove('main-page__load-type-option--active'));
        element.classList.add('main-page__load-type-option--active');
      })
    });
  }
})();
