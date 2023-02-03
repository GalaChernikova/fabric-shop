var swiper = new Swiper(".feedbackSwiper", {
    slidesPerView: 2,
    spaceBetween: 18,
    loop: true,
    navigation: {
      nextEl: ".feedback-next",
      prevEl: ".feedback-prev",
    },
    mousewheel: true,
    keyboard: true,
    
    breakpoints: {
        // mobile + tablet - 320-990
        320: {
            slidesPerView: "auto",
            spaceBetween: 30,
            centeredSlides: true,
            loop: false,
        },
        850: {
            slidesPerView: "auto",
            spaceBetween: 30,
            centeredSlides: true,
            loop: false,
        },
        // desktop >= 991
        991: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        }
    },
  });