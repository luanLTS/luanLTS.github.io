var menuMobile = document.querySelector('.menu_mobile')
var subMenu = document.querySelector('#submenu')
var bars = document.querySelector('#bars')
var close = document.querySelector('#close')

var isOpen = false

subMenu.addEventListener('click', () => {
    if ( !isOpen ) {
        document.querySelector('.submenu_mobile').style.display = 'block'
        isOpen = true
    } else {
        document.querySelector('.submenu_mobile').style.display = 'none'
        isOpen = false
    }
})

bars.addEventListener('click', () => {
    bars.style.display= 'none'
    close.style.display = 'block'
    menuMobile.classList.add('show')
})

close.addEventListener('click', () => {
    bars.style.display= 'block'
    close.style.display = 'none'
    menuMobile.classList.remove('show')
})
