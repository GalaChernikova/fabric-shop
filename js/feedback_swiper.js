var swiper = new Swiper(".feedbackSwiper", {
    slidesPerView: 2,
    spaceBetween: 18,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".feedback-next",
      prevEl: ".feedback-prev",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        // mobile + tablet - 320-990
        320: {
            slidesPerView: 1,
            // spaceBetween: 20,
            slidesPerGroup: 1,
        },
        // desktop >= 991
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
            slidesPerGroup: 2,
        }
    },
  });