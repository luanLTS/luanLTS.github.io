let sections = document.querySelectorAll('section')
let doc = document.documentElement
let menuAtivo = document.querySelectorAll(".menu_item_ativo")
let secH = sections[0].clientHeight

window.addEventListener('scroll', () => {
    let top = doc.scrollTop
    if (top < secH * 0.6) {
        menuAtivo[0].style.width = `100%`
        clearDesativos(0)
        topoHidden()
    } else if (top >= secH * 0.6 && top < 2 * (secH * 0.7)) {
        menuAtivo[1].style.width = `100%`
        clearDesativos(1)
        topoShow()
    } else if (top >= 2 * (secH * 0.6) && top < 3 * (secH * 0.8)) {
        menuAtivo[2].style.width = `100%`
        clearDesativos(2)
    } else {
        menuAtivo[3].style.width = `100%`
        clearDesativos(3)
    }
})

const clearDesativos = (ativo) => {
    for(let i = 0; i < 4; i++) {
        if(i != ativo) menuAtivo[i].style.width = `0`
    }
}

const ativoOver = (id) => {
    if (menuAtivo[id].style.width == '0px')
        menuAtivo[id].style.width = '75px'
}

const ativoOut = (id) => {
    if (menuAtivo[id].style.width == '75px')
    menuAtivo[id].style.width = '0px'
}


const topoShow = () => {
    let topo = document.querySelector('#top')
        topo.style.bottom = `40px`
}


const topoHidden = () => {
    let topo = document.querySelector('#top')
        topo.style.bottom = `-50px`
}







// window.addEventListener('scroll', () => {
//     myTestFunction()
// })

// let doc = document.documentElement
// let contentHeight = document.querySelector('.content').clientHeight / 2
// let li = document.getElementsByTagName('li')
// let contentLen = document.querySelectorAll('.content').length
// console.log(li)

// function myTestFunction() {
//     doc.scrollTop >= 200
//     let scroll = doc.scrollTop
//     if ( scroll < contentHeight ) {
//         console.log('Sobre Mim')
//         li[0].classList.add('active')
//         for ( let i = 0; i < 4; i++ ) { i != 0 ? li[i].classList.remove('active') : null }
//     } else if ( scroll > contentHeight && scroll < contentHeight * 3 ) {
//         console.log('Tecnologias')
//         li[1].classList.add('active')
//         for ( let i = 0; i < 4; i++ ) { i != 1 ? li[i].classList.remove('active') : null}
//     } else if ( scroll > contentHeight * 3 && scroll < contentHeight * 5 ) {
//         console.log('Projetos')
//         li[2].classList.add('active')
//         for ( let i = 0; i < 4; i++ ) { i != 2 ? li[i].classList.remove('active') : null }
//     } else {
//         console.log('Contato')
//         li[3].classList.add('active')
//         for ( let i = 0; i < 4; i++ ) { i != 3 ? li[i].classList.remove('active') : null }
//     }
// }