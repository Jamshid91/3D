const menuShowBtn = document.querySelector('.menu-btn'),
      menu= document.querySelector('.menu'),
      getQuote = document.querySelectorAll('.header__link')
// menu
menuShowBtn.addEventListener('click', () => {
    menu.classList.toggle('showMenu');
    menuShowBtn.classList.toggle('clickedMenu')
});

getQuote.forEach(get => {
    get.addEventListener('click', () => {
        menu.classList.toggle('showMenu');
        menuShowBtn.classList.toggle('clickedMenu')
    })
})
