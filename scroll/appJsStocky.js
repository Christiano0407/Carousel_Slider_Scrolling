//console.log("Scroll"); 
const scrollAble = document.querySelector(`.scrollBar`); 
const stickyProject = document.querySelector(`.project`); 

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
   sticky(); 
   window.requestAnimationFrame(smoothScroll);
}

sticky = () => {
   let offset = window.innerHeight * 2; 

   if(sticky < offset) 
   {
      stickyProject.style.transform = `translate3d(0, 0, 0)`; 
   }
   if(current >= offset)
   {
       stickyProject.style.transform = `translate3d(0, ${current - offset}px, 0)`; 
   }
}

init(); 
smoothScroll();