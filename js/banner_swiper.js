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
  });