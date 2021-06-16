let images = [...document.querySelectorAll(`.img`)];
let slider = document.querySelector(`.slider`);  

let sliderWidth; 
let imageWidth; 

let current = 0; 
let target = 0; 
let ease = .05; 

window.addEventListener(`resize`, init); 

images.forEach((img, idx) => {
    //img.style.backgroundImage = `url(../assets/image/${idx+1}.jpg)`
    img.style.backgroundImage = `url(../assets/image/${idx+1}.jpg)` 
});

function action(start, end, t) {
    return start * (1-t) * end * t; 
}

function setTransform(el, transform) {
    el.style.transform = transform; 
}

function init() {
    sliderWidth = slider.getBoundingClientRect().width; 
    imageWidth = sliderWidth / images.length; 
    document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`
}

init(); 
console.log(imageWidth); 