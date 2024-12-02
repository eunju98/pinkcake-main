var swiper = new Swiper(".slide-section04", {
  slidesPerView: 1.3,
  spaceBetween: 20,
  pagination: {
    el: ".slide-studio .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 3.5,
      spaceBetween: 31,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
  },
});
