import $ from "jquery";
$(function () {
  //Бургер меню

  $(document).ready(function () {
    $(".burger-menu").click(function () {
      $(".burger-menu").toggleClass("burger-menu-active");
      $(".header-bottom").toggleClass("show");
      $("body").toggleClass("body-lock");
    });
  });

  $(document).ready(function () {
    $(function () {
      //BEGIN
      $(".accordion__title").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);

        if (!$this.hasClass("show-accordion")) {
          $(".accordion__body").slideUp(400);
          $(".accordion__title").removeClass("show-accordion");
        }

        $this.toggleClass("show-accordion");
        $this.next().slideToggle();
      });
      //END
    });
  });

  $(document).ready(function () {
    $("img.imgsvg").each(function () {
      var $img = $(this);
      var imgClass = $img.attr("class");
      var imgURL = $img.attr("src");
      $.get(
        imgURL,
        function (data) {
          var $svg = $(data).find("svg");
          if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
          }
          $svg = $svg.removeAttr("xmlns:a");
          if (
            !$svg.attr("viewBox") &&
            $svg.attr("height") &&
            $svg.attr("width")
          ) {
            $svg.attr(
              "viewBox",
              "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
            );
          }
          $img.replaceWith($svg);
        },
        "xml"
      );
    });
  });
});

const swiper = new Swiper(".swiper-main", {
  // Optional parameters
  loop: true,
  // autoplay:true,
  // If we need pagination
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-main__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-main__next",
    prevEl: ".swiper-main__prev",
  },
});
const swiperNews = new Swiper(".swiper-news", {
  // Optional parameters
  loop: true,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-news-next",
    prevEl: ".swiper-news-prev",
  },
  pagination: {
    el: ".swiper-news-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    // when window width is >= 320px
    350: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 3,
    },
    1170: {
      slidesPerView: 3,
    },
  },
});
//
const swiperTariff = new Swiper(".swiper-tariff", {
  // Optional parameters
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-tariff-next",
    prevEl: ".swiper-tariff-prev",
  },
  // autoplay: {
  //   delay: 3000,
  // },
  breakpoints: {
    // when window width is >= 320px
    350: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1170: {
      slidesPerView: 4,
    },
  },
});
const swiperCertificates = new Swiper(".swiper-certificates", {
  // Optional parameters
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-certificates-next",
    prevEl: ".swiper-certificates-prev",
  },
  // autoplay: {
  //   delay: 3000,
  // },
  breakpoints: {
    // when window width is >= 320px
    350: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 3,
    },
    1170: {
      slidesPerView: 4,
    },
  },
});
const swiperChanel = new Swiper(".swiper-popular-chanel", {
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false, // или сделать так, чтобы восстанавливался autoplay после взаимодействия
  },
  breakpoints: {
    // when window width is >= 320px
    350: {
      slidesPerView: 3,
    },
    650: {
      slidesPerView: 4,
    },
    1170: {
      slidesPerView: 6,
    },
  },
});
