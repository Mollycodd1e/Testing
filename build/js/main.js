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
