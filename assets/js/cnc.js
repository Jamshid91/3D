const qualityItem = document.querySelectorAll('.quality-item')

qualityItem.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('showText')
    })
})

printing = new Swiper('.swiper-printing', {
    loop: true,
    navigation: {
      nextEl: '.printing-next'
    },
    breakpoints: {
      0: {
        spaceBetween: 10,
        slidesPerView: 1.3,
      },
      576: {
        spaceBetween: 22,
        slidesPerView: 1.5,
      },
  }
});