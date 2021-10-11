'use strict';

(function () {
  const dangerClass = document.querySelector('.main-page__danger-class-wrapper');

  if (dangerClass) {
    const dangerClassToggle = dangerClass.querySelector('button');
    const dangerClassList = dangerClass.querySelector('ul')
    const dangerClassOptions = dangerClassList.querySelectorAll('li');

    dangerClassToggle.addEventListener('click', function () {
      if (dangerClass.classList.contains('main-page__danger-class-wrapper--closed')) {
        dangerClass.classList.add('main-page__danger-class-wrapper--opened');
        dangerClass.classList.remove('main-page__danger-class-wrapper--closed');
      } else {
        dangerClass.classList.remove('main-page__danger-class-wrapper--opened');
        dangerClass.classList.add('main-page__danger-class-wrapper--closed');
      }
    });

    dangerClassOptions.forEach(element => {
      element.addEventListener('click', function() {
        dangerClass.classList.remove('main-page__danger-class-wrapper--opened');
        dangerClass.classList.add('main-page__danger-class-wrapper--closed');
        dangerClassOptions.forEach(option => option.classList.remove('main-page__danger-option--active'));
        element.classList.add('main-page__danger-option--active');
      })
    });
  }
})();
