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