window.addEventListener('scroll', () => {
    myTestFunction()
})

let doc = document.documentElement
let contentHeight = document.querySelector('.content').clientHeight / 2
let li = document.getElementsByTagName('li')
// let contentLen = document.querySelectorAll('.content').length
console.log(li)

function myTestFunction() {
    // doc.scrollTop >= 200
    let scroll = doc.scrollTop
    if ( scroll < contentHeight ) {
        console.log('Sobre Mim')
        li[0].classList.add('active')
        for ( let i = 0; i < 4; i++ ) { i != 0 ? li[i].classList.remove('active') : null }
    } else if ( scroll > contentHeight && scroll < contentHeight * 3 ) {
        console.log('Tecnologias')
        li[1].classList.add('active')
        for ( let i = 0; i < 4; i++ ) { i != 1 ? li[i].classList.remove('active') : null}
    } else if ( scroll > contentHeight * 3 && scroll < contentHeight * 5 ) {
        console.log('Projetos')
        li[2].classList.add('active')
        for ( let i = 0; i < 4; i++ ) { i != 2 ? li[i].classList.remove('active') : null }
    } else {
        console.log('Contato')
        li[3].classList.add('active')
        for ( let i = 0; i < 4; i++ ) { i != 3 ? li[i].classList.remove('active') : null }
    }
}