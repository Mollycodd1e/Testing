'use strict';

(function () {
  const liftingCapacity = document.querySelector('.main-page__lifting-capacity-wrapper');

  if (liftingCapacity) {
    const liftingToggle = liftingCapacity.querySelector('button');
    const liftingList = liftingCapacity.querySelector('ul')
    const liftingOptions = liftingList.querySelectorAll('li');

    liftingToggle.addEventListener('click', function () {
      if (liftingCapacity.classList.contains('main-page__lifting-capacity-wrapper--closed')) {
        liftingCapacity.classList.add('main-page__lifting-capacity-wrapper--opened');
        liftingCapacity.classList.remove('main-page__lifting-capacity-wrapper--closed');
      } else {
        liftingCapacity.classList.remove('main-page__lifting-capacity-wrapper--opened');
        liftingCapacity.classList.add('main-page__lifting-capacity-wrapper--closed');
      }
    });

    liftingOptions.forEach(element => {
      element.addEventListener('click', function() {
        liftingCapacity.classList.remove('main-page__lifting-capacity-wrapper--opened');
        liftingCapacity.classList.add('main-page__lifting-capacity-wrapper--closed');
        liftingOptions.forEach(option => option.classList.remove('main-page__lifting-option--active'));
        element.classList.add('main-page__lifting-option--active');
      })
    });
  }
})();
