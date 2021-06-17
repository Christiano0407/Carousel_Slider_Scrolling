let sliderWrap = document.querySelector(`.slider-wrap`); 
let slider = document.querySelector(`.slider`); 

let clonesWidth; 
let sliderWidth; 
let scrollPos; 

let clones = []; 
let disableScroll = false; 

let items = [...document.querySelectorAll(`.slider-item`)]; 
let images = [...document.querySelectorAll(`.img-div`)]; 
//console.log(items);
//console.log(images);

images.forEach((image, idx) => {
    image.style.backgroundImage = `url(../assets/image/${idx+1}.jpg)`
}); 

items.forEach(item => {
    let clone = item.cloneNode(true); 
    clone.classList.add(`clone`); 
    slider.appendChild(clone); 
    clones.push(clone); 
}); 

function getCloneWidth() {
    let width = 0; 
    clones.forEach(clone => {
    width += clone.offsetWidth; 
    })
    return width; 
}