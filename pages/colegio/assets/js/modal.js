var modalView = document.querySelector('.modal_view')
var modalImage = document.querySelector('.modal_image')
var buttonClose = document.querySelector('.buttonClose')

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function ajustarTamModal() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    
    modalView.style.width = 
        `${windowWidth-18}px`
    modalView.style.height = 
        `${windowHeight+19}px`
}

ajustarTamModal()
window.addEventListener('resize', function(){
    ajustarTamModal();
});

buttonClose.addEventListener('click', () => {
    closeModal()
})

modalView.addEventListener('click', () => {
    closeModal()
})

function showModal(e, type) {
    var urlImage
    var srcImage
    var tam
    if ( type == 1 ) {
        urlImage = e.id.split('/')
        tam = urlImage.length
        srcImage = "./"+urlImage[tam-3]+"/"+urlImage[tam-2]+"/"+urlImage[tam-1]
        console.log(urlImage)
        console.log(srcImage)
        modalView.style.display = 
            "flex"
        
        modalImage.style.width = 
            `${ windowWidth }px`
    
        modalImage.style.height = 
            `${ windowHeight / 1.1 }px`
        
        modalImage.style.backgroundImage = 
            `url('${ srcImage }')`
    } else if ( windowWidth > 700) {
        urlImage = e.src.split('/')
        tam = urlImage.length
        srcImage = "./"+urlImage[tam-4]+"/"+urlImage[tam-3]+"/"+urlImage[tam-2]+"/"+urlImage[tam-1]
        modalView.style.display = 
            "flex"
        
        modalImage.style.width = 
            `${ windowWidth / 1.5 }px`
    
        modalImage.style.height = 
            `${ windowHeight / 1.5 }px`
        
        modalImage.style.backgroundImage = 
            `url('${ srcImage }')`
    }

}

function closeModal() {
    modalView.style.display = 
        'none'
}

//     let urlImage = e.src.split('/')
//     let tam = urlImage.length
//     let srcImage = "./"+urlImage[tam-4]+"/"+urlImage[tam-3]+"/"+urlImage[tam-2]+"/"+urlImage[tam-1]
//     modalView.style.display = 
//         "flex"
    
//     modalImage.style.width = 
//         `${ windowWidth / 1.5 }px`

//     modalImage.style.height = 
//         `${ windowHeight / 1.5 }px`
    
//     modalImage.style.backgroundImage = 
//         `url('${ srcImage }')`

// document.body.onload(aviso())

// function aviso() {
//     let r
//     r = confirm("VOLTA AS AULAS \n Veja as instruções!!!")

//     if ( r ) {
//         window.open('./assets/images/voltaAsAulas.pdf', 'target')
//     }
// }