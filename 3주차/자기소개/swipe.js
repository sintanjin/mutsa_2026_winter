const swiper = new Swiper('.mySwiper', {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      grabCursor: true,

      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: false,
      },
    });