"use strict";


// custome cursor
let area = document.querySelector('body')
console.log(area);
let crsr = document.querySelector('#crsr')

area.addEventListener("mousemove",function(e){

    crsr.style.left = e.clientX+"px"
    crsr.style.top = e.clientY+"px"

    console.log(e.pageX, e.pageY)


    
    // function logKey(e) {
    //     screenLog.innerText = `
    //     Screen X/Y: ${e.screenX}, ${e.screenY}
    //     Client X/Y: ${e.clientX}, ${e.clientY}`;
    // }

})


// progressBar
let scrollProgress = document.querySelector('#progressBar');

window.addEventListener('scroll',function(){
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + "%";
});
// nav menu
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
// Get references to the button and menu elements
let toggleBtn = document.getElementById('phone_menu_btn');
let toggleMenu = document.getElementById('toggle_menu');

// Define HTML strings for menu icons
let menuIcon = '<span class="iconify" data-icon="line-md:close-to-menu-alt-transition"></span>';
let closeMenuIcon = '<span class="iconify" data-icon="line-md:menu-to-close-alt-transition"></span>';

// Add a click event listener to the button
toggleBtn.addEventListener('click', () => {
    let iconifyElement = toggleBtn.querySelector('.iconify');
    let dataIcon = iconifyElement.getAttribute('data-icon');
    
    toggleMenu.classList.toggle('right-full');
    toggleMenu.classList.toggle('right-0');

    // Toggle the button icon
    if (dataIcon === 'line-md:close-to-menu-alt-transition') {
        toggleBtn.innerHTML = closeMenuIcon;
    } else {
        toggleBtn.innerHTML = menuIcon;
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
let closeIcon = document.querySelector('#pass div');
let input = document.querySelector('#pass input');

// Define HTML strings for menu icons
let openEye = '<span class="iconify" data-icon="el:eye-open"></span>';
let closeEye = '<span class="iconify" data-icon="el:eye-close"></span>';
// Add a click event listener to the closeEye
closeIcon.addEventListener('click',function(){
    let iconifyElement2 = closeIcon.querySelector('.iconify');
    let dataIcon2 = iconifyElement2.getAttribute('data-icon');
    // password toggle 
    if (input.type === 'password') {
        input.setAttribute('type','text');
    }else{
        input.setAttribute('type','password');
    };
    // icon toggle
    if (dataIcon2 === "el:eye-close") {
        closeIcon.innerHTML = openEye
    }else{
        closeIcon.innerHTML = closeEye
    };
});


