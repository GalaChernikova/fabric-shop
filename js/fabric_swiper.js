var swiper = new Swiper(".fabricSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    updateOnWindowResize: true,
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        // mobile + tablet - 320-990
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
            // centeredSlides: true,
        },
        // desktop >= 991
        991: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 4,
        }
    },
  });