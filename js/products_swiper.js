var swiper = new Swiper(".productSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".product-button-next",
      prevEl: ".product-button-prev",
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
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 4,
        }
    },
  });