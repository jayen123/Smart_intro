"use strict";
let largeMenuLink = document.querySelectorAll('.link');

largeMenuLink.forEach(function (element, key) {
    element.addEventListener("click", () => {
        element.classList.toggle("active");

        largeMenuLink.forEach(function (element2, key2) {
            if (key !== key2) {
                element2.classList.remove('active');
            }

        });
    })
});
// products carousel
$('.owl-carousel.products-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: ['<img src="/src/assets/images/left-arrow.svg" alt="">', '<img src="/src/assets/images/right-arrow.svg" alt="">'],
    responsive: {
        0: {
            items: 1
        },
        640: {
            items: 2
        },
        768: {
            items: 3
        },
        1024: {
            items: 4
        }
    }
})

// subscription-carousel
$('.owl-carousel.subscription-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    center: true,
    navText: ['<img src="/src/assets/images/left-arrow.svg" alt="">', '<img src="/src/assets/images/right-arrow.svg" alt="">'],
    responsive: {
        0: {
            items: 1
        },
        640: {
            items: 2
        },
        768: {
            items: 3
        },
        1024: {
            items: 3
        }
    }
})

// videos-carousel
$('.owl-carousel.videos').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: ['<img src="/src/assets/images/left-arrow.svg" alt="">', '<img src="/src/assets/images/right-arrow.svg" alt="">'],
    responsive: {
        0: {
            items: 1
        },
        640: {
            items: 2
        },
        1024: {
            items: 2
        }
    }
})



// home Faq Section
let accordion = document.querySelectorAll('.accordion');


// accordion.addEventListener("click", function () {
//     accordion.classList.toggle('active');
// });

accordion.forEach(function(elem,index){
    elem.addEventListener('click',function(){
        elem.classList.toggle('active');

        accordion.forEach(function(elem2,index2){
            if (index !== index2) {
                elem2.classList.remove('active');
            }
        });
    });
})


