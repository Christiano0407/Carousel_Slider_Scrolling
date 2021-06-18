console.log("Animation Scoll"); 

let aosElements = Array.from(document.querySelectorAll(`.aos`));
//console.log(aosElements); 

aosElements.forEach(element => {
    console.log(element.getBoundingClientRect()); 
})