"use strict";
let largeMenuLink = document.querySelectorAll(".link");

largeMenuLink.forEach(function (element, key) {
    element.addEventListener("click", () => {
        element.classList.toggle("active");

        largeMenuLink.forEach(function (element2, key2) {
            if (key !== key2) {
                element2.classList.remove("active");
            }
        });
    });
});
// phone menu toggle
let toggleBtn = $("#phone_menu_btn");
let toggleMenu = $("#toggle_menu");
let menu =
    '<span class="iconify" data-icon="line-md:close-to-menu-alt-transition"></span>';
let closeMenu =
    '<span class="iconify" data-icon="line-md:menu-to-close-alt-transition"></span>';

toggleBtn.on("click", () => {
    const dataIcon = toggleBtn.find(".iconify").data("icon");
    toggleMenu.stop().slideToggle("slow");
    if (dataIcon === "line-md:close-to-menu-alt-transition") {
        toggleBtn.html(closeMenu);
    } else {
        toggleBtn.html(menu);
    }
});

// products carousel
$(".owl-carousel.products-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: [
        '<img src="/src/assets/images/left-arrow.svg" alt="">',
        '<img src="/src/assets/images/right-arrow.svg" alt="">',
    ],
    responsive: {
        0: {
            items: 1,
        },
        640: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1024: {
            items: 4,
        },
    },
});

// subscription-carousel
$(".owl-carousel.subscription-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    center: true,
    navText: [
        '<img src="/src/assets/images/left-arrow.svg" alt="">',
        '<img src="/src/assets/images/right-arrow.svg" alt="">',
    ],
    responsive: {
        0: {
            items: 1,
        },
        640: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1024: {
            items: 3,
        },
    },
});

// videos-carousel
$(".owl-carousel.videos").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [
        '<img src="/src/assets/images/left-arrow.svg" alt="">',
        '<img src="/src/assets/images/right-arrow.svg" alt="">',
    ],
    responsive: {
        0: {
            items: 1,
        },
        640: {
            items: 2,
        },
        1024: {
            items: 2,
        },
    },
});

// home Faq Section
let accordion = document.querySelectorAll(".accordion");

// accordion.addEventListener("click", function () {
//     accordion.classList.toggle('active');
// });

accordion.forEach(function (elem, index) {
    elem.addEventListener("click", function () {
        elem.classList.toggle("active");

        accordion.forEach(function (elem2, index2) {
            if (index !== index2) {
                elem2.classList.remove("active");
            }
        });
    });
});
// single product tab

let tabBtn = document.querySelectorAll(".tabBtn");
let allContent = document.querySelectorAll(".tab_content");

tabBtn.forEach(function (value, number) {

    value.addEventListener("click", function () {
        value.classList.add("active");
        tabBtn.forEach(function (value2, number2) {
            if (number !== number2) {
                value2.classList.remove("active");
            }
        });
        let tabName = value.dataset.tab
        let tabContent = document.getElementById(tabName)
        for (let index = 0; index < allContent.length; index++) {
            allContent[index].style.display = 'none';
        }
        tabContent.style.display = "block"
    });
});

// password visible 
let closeIcon = document.querySelector('#pass .iconify');
console.log(closeIcon)
let input = document.querySelector('#pass input');
closeIcon.addEventListener('click',function(){
    if (input.type === 'password') {
        input.setAttribute('type','text');
    }else{
        input.setAttribute('type','password');
    }
});


