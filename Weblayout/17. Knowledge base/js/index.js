document.addEventListener("DOMContentLoaded", function () {
  // select
  const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {
    searchEnabled: false,
    position: 'bottom',
    shouldSort: false,
  });

  // map
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [48.872185073737896, 2.354223999999991],
      zoom: 16,
      controls: [],
    });
    var myPlacemark = new ymaps.Placemark([48.872185073737896, 2.354223999999991], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarker.svg',
      iconImageSize: [28, 40],
      iconImageOffset: [-2, -40],
    });
    myMap.geoObjects.add(myPlacemark);
  }

  //form
  var selector = document.querySelector("input[type='tel']");

  var im = new Inputmask("+7 (999) 999-99-99");

  im.mask(selector);

  new JustValidate('.form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()

          return Number(phone) && phone.length === 10
        }
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Вы не ввели имя",
        minLength: "Имя должно содержать не менее 2-х букв!",
      },
      tel: {
        required: "Вы не ввели телефон",
        function: "Пожалуйста, введите корректный телефон",
      },
      email: {
        required: "Вы не ввели e-mail",
        email: "Пожалуйста, введите корректный e-mail",
      }
    }
  });
});
