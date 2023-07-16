
const swiper = new Swiper('.feedback__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
        '0': {
            slidesPerView: 1.17,
            spaceBetween: 10, 
        },
        '450': {
            spaceBetween: 10, 
        },
        '550': {
            slidesPerView: 1.3,
        },
        '650': {
            slidesPerView: 1.5,
        },
        '700': {
            slidesPerView: 1.8,
        },
        '800': {
            slidesPerView: 2,
        },
        '900': {
            slidesPerView: 2.2,
        },
        '1000': {
            slidesPerView: 2.5,
        },
        '1100': {
            slidesPerView: 2.8,
        },
        '1300': {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
    navigation: {
      nextEl: '.feedback__next',
      prevEl: '.feedback__prev',
    },
  });