$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(300);
    });
    
    smallScreenMenu();
    let temp;
    function resizeEnd(){
        smallScreenMenu();
    }

    $(window).resize(function(){
        clearTimeout(temp);
        temp = setTimeout(resizeEnd, 100);
        resetMenu();
    });
});


const subMenus = $('.sub-menu');
const menuLinks = $('.menu-link');

function smallScreenMenu(){
    if($(window).innerWidth() <= 992){
        menuLinks.each(function(item){
            $(this).click(function(){
                $(this).next().slideToggle();
            });
        });
    } else {
        menuLinks.each(function(item){
            $(this).off('click');
        });
    }
}

function resetMenu(){
    if($(window).innerWidth() > 992){
        subMenus.each(function(item){
            $(this).css('display', 'none');
        });
    }
}

var swiper = new Swiper(".swiper", {
    autoplay :{
        delay:5000,
    },
    loop:true,
    effect: "coverflow",
    spaceBetween: 30,
    grabCursor: true,
    coverflowEffect: {
       rotate: 50,
       stretch: 0,
       depth: 100,
       modifier: 1,
       slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 });



 
// var swiper = new Swiper(".reviews-slider", {
//     loop:true,
//     slidesPerView: "auto",
//     grabCursor: true,
//     spaceBetween: 30,
//     pagination: {
//        el: ".swiper-pagination",
//     },
//     breakpoints: {
//        768: {
//          slidesPerView: 1,
//        },
//        991: {
//          slidesPerView: 2,
//        },
//     },
//  });

