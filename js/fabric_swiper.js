var swiper = new Swiper(".fabricSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        // mobile + tablet - 320-990
        320: {
            slidesPerView: "auto",
            spaceBetween: 10,
            loop: false,
        },
        // desktop >= 991
        991: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    },
  });