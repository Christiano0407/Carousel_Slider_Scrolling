//console.log("Scroll"); 
const scrollAble = document.querySelector(`.scrollBar`); 

let current = 0;
let target = 0; 
const ease = 0.1; 
// Nos concentramos en los parámetros para el scroll.
function up(start, end, t)
{
    return start * ( 1 - t) + end * t; 
}
//Modificar la altura del body.
init = () => {
    document.body.style.height = `${scrollAble.getBoundingClientRect().height}px`; 
}
//scroll en Y:
function smoothScroll()
{
   target = window.scrollY; 
   current = up(current, target, ease); 
   scrollAble.style.transform =`translate3d(0, ${-current}px, 0)`; 
   window.requestAnimationFrame(smoothScroll);
}

init(); 
smoothScroll();