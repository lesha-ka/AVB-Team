document.addEventListener('DOMContentLoaded', () => {
  const swiperArticles = new Swiper('.js-newsSlider', {
      direction: 'horizontal',
      slidesPerView: '1',
      centeredSlides: false,
      initialSlide: 1,
      loop: true,
      draggable: true,
      navigation: {
        nextEl: '.news__next',
        prevEl: '.news__prev',
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          centeredSlides: false
        },
        993: {
          slidesPerView: 3,
          centeredSlides: true
        },
      }
  });  
  const swiperRecommended = new Swiper('.js-recommendedSlider', {
      direction: 'horizontal',
      slidesPerView: '1',
      loop: true,
      draggable: true,
      navigation: {
        nextEl: '.recommended__next',
        prevEl: '.recommended__prev',
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          centeredSlides: false
        },
        993: {
          slidesPerView: 3,
          centeredSlides: true
        },
      }
  });  
  if($(window).width() <= 993) {
    const swiperReviews = new Swiper('.js-reviewsSlider', {
        direction: 'horizontal',
        slidesPerView: '1',
        loop: false,
        draggable: true,
        autoHeight: true,
        navigation: {
          nextEl: '.reviews__next',
          prevEl: '.reviews__prev',
        }
    });  
  }
})