var swiper = new Swiper(".productSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    isBeginning: true,
    navigation: {
      nextEl: ".product-button-next",
      prevEl: ".product-button-prev",
    },
    centeredSlides: true,
    updateOnWindowResize: true,
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