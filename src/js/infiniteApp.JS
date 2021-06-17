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

function getScrollPos() {
    return window.scrollY; 
}

/* function setScrollPos(pos) { */
/*     window.scrollTo({top: pos});  */
/* } */

function scrollUpdate() {
    
    if(window.innerWidth > 760) {
      sliderWrap.style.overflow = `hidden`; 
      scrollPos = getScrollPos(); 

      if(clonesWidth + scrollPos >= sliderWidth) {
          window.scrollTo({top: 1}); 
      }else if(scrollPos <= 0) {
          window.scrollTo({top: sliderWidth - clonesWidth -1})
      }
      slider.style.transform = `translateX(${-window.scrollY}px)`
      
      requestAnimationFrame(scrollUpdate); 

    }else {
        sliderWrap.style.overflow = `scroll`; 
    }

}

window.addEventListener(`resize`, onLoad); 

function onLoad() {
    calculateDimensions(); 
    document.body.style.height = `${sliderWidth}px` 
    window.scrollTo({top: 1}); 
    scrollUpdate(); 
}

function calculateDimensions() {
    sliderWidth = slider.getBoundingClientRect().width; 
    clonesWidth = getCloneWidth(); 
}

onLoad(); 