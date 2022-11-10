document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".step__inner").forEach(function (tabsButton) {
        tabsButton.addEventListener("click", function (event) {
            const path = event.currentTarget.dataset.path;
            document
                .querySelectorAll(".how-working__content")
                .forEach(function (tabContent) {
                    tabContent.classList.remove("how-working__content-active");
                });
            document
                .querySelector(`[data-target="${path}"]`)
                .classList.add("how-working__content-active");
        });
    });

    document
        .querySelector(".burger__line")
        .addEventListener("click", function () {
            open();
        });

    function open() {
        if (document.querySelector(".menu__nav-list").classList.toggle("show")) {
            document.querySelector(".burger").classList.add("is-open");
        } else {
            document.querySelector(".burger").classList.remove("is-open");
        }
    }

    (function activeInput() {
      let active = document.querySelector('.active__input');
      let inputSearch = document.querySelector('.input__search');

      active.addEventListener('click', function() {
        if (inputSearch.classList.toggle('show__input')) {
          inputSearch.style.display = 'block';
        }else {
          inputSearch.style.display = 'none';
          inputSearch.value = '';
        }
      });
    })();

    $(document).ready(function(){

      var $menu = $("#menu");

      $(window).scroll(function(){
          if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
              $menu.removeClass("default").addClass("fixed");
          } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
              $menu.removeClass("fixed").addClass("default");
          }
      })
  });

    const swiper = new Swiper(".swiper", {
        loop: true,
        
        autoplay: {
            delay: 5000,
          },

        pagination: {
            el: ".swiper-pagination",
        },
        watchOverflow: true,
    });
});
