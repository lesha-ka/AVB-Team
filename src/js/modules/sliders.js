document.addEventListener('DOMContentLoaded', () => {
  const swiperArticles = new Swiper('.js-newsSlider', {
      direction: 'horizontal',
      slidesPerView: '3',
      centeredSlides: true,
      initialSlide: 1,
      loop: true,
      draggable: true,
      navigation: {
        nextEl: '.news__next',
        prevEl: '.news__prev',
      }
  });  
})