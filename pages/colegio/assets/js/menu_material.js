var submenuFund = document.querySelector('.submenu_fundamental')
var submenuInf = document.querySelector('.submenu_infantil')
var menuFund = document.getElementById('fundamental')
var menuInf = document.getElementById('infantil')

var isShowInf = false
var isShowFund = false
function show(event) {
    let id = event.id
    if ( id == "infantil" && !isShowInf ) {
        submenuFund.classList.add('oculto')
        menuFund.style.borderRadius = '10px'
        submenuInf.classList.remove('oculto')
        menuInf.style.borderBottomLeftRadius = '0px'
        menuInf.style.borderBottomRightRadius = '0px'
        isShowInf = true
    } else {
        // submenuInf.classList.add('oculto')
        hidden()
        isShowInf = false
    }
    if ( id == "fundamental" && !isShowFund ) {
        submenuInf.classList.add('oculto')
        menuInf.style.borderRadius = '10px'
        submenuFund.classList.remove('oculto')
        menuFund.style.borderBottomLeftRadius = '0px'
        menuFund.style.borderBottomRightRadius = '0px'
        isShowFund = true
    } else {
        submenuFund.classList.add('oculto')
        isShowFund = false
    }
    if ( id != "fundamental" && id != "infantil" ){
        // submenuFund.classList.add('oculto')
        // submenuInf.classList.add('oculto')
        // menuFund.style.borderRadius = '10px'
        // menuInf.style.borderRadius = '10px'
        hidden()
    }
}

function hidden() {
    submenuFund.classList.add('oculto')
    submenuInf.classList.add('oculto')
    menuFund.style.borderRadius = '10px'
    menuInf.style.borderRadius = '10px'
}