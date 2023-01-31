var swiper = new Swiper(".bannerSwiper", {
    slidesPerView: 1,
        cssMode: true,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".banner-next",
          prevEl: ".banner-prev",
        },
        mousewheel: true,
        keyboard: true,
        breakpoints: {
          // mobile + tablet - 320-990
          320: {
              slidesPerView: 1,
              spaceBetween: 20,
              slidesPerGroup: 1,
          },
          // desktop >= 991
          991: {
              slidesPerView: 1,
              spaceBetween: 20,
              slidesPerGroup: 1,
          }
      },
    });