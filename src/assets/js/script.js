"use strict";
// products carousel
$('.owl-carousel.products-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        640:{
            items:2
        },
        768:{
            items:3
        },
        1024:{
            items:4
        }
    }
})

let ac = document.querySelectorAll('.link');

ac.forEach(element => {
    element.addEventListener("click",function(){
       element.classList.add("active");
    })
});