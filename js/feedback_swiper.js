var swiper = new Swiper(".feedbackSwiper", {
    slidesPerView: 2,
    spaceBetween: 18,
    slidesPerGroup: 2,
    loop: true,
    // isBeginning: true,
    navigation: {
      nextEl: ".feedback-next",
      prevEl: ".feedback-prev",
    },
    updateOnWindowResize: true,
    mousewheel: true,
    keyboard: true,
    
    breakpoints: {
        // mobile + tablet - 320-990
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
        },
        850: {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
            centeredSlides: true,
        },
        // desktop >= 991
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
            slidesPerGroup: 2,
        }
    },
  });