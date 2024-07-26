
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {

    slidesPerView: "auto",
    spaceBetween: 10,
    autoHeight:true,
    slidesOffsetBefore:15,
    slidesOffsetAfter:15,

    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.swiper-nav-next',
      prevEl: '.swiper-nav-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});
