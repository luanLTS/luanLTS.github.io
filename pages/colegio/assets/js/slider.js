let totalSlides = document.querySelectorAll('.slider_item').length;
let slideCurrent = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;

let timerSlider = setInterval(next,10000)

clearTimeout

document.querySelector('.slider_width').style.width = 
    `${sliderWidth * totalSlides}px`;

function prev() {
    slideCurrent --;
    if ( slideCurrent < 0 )
        slideCurrent = totalSlides - 1;
    marginLeft();
    clearInterval(timerSlider)
    timerSlider = setInterval(next,10000)
}

function next() {
    slideCurrent ++;
    if ( slideCurrent > totalSlides - 1 )
    slideCurrent = 0;
    marginLeft();
    clearInterval(timerSlider)
    timerSlider = setInterval(next,10000)
}

function marginLeft() {
    let sliderItemWidht = document.querySelector('.slider_item').clientWidth;
    let newMarginLeft = sliderItemWidht * slideCurrent;
    
    document.querySelector('.slider_width').style.marginLeft = 
    `-${ newMarginLeft }px`;
}
timerSlider = setInterval(next,10000)