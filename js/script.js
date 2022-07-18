$('.our_partners_carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1,
        },
        350:{
            items:2,
            stagePadding: 0
        },
        769:{
            items:2,
            stagePadding: 150
        },
        1000:{
            items:3,
            stagePadding: 200
        }
    }
})
$('.our_partners_carousel_2').owlCarousel({
    loop:true,
    margin: 0,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1,
        },
        350:{
            items:2,
        },
        769:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
})


const search_button = document.getElementById("search_button");
const searchbox_outer = document.querySelector(".search_box_outer");
const close_search_box = document.getElementById("close_search_box");
const toggle_mainmenu = document.getElementById("toggle_mainmenu");
const nav_manu = document.querySelector(".main_menu_inner");


toggle_mainmenu.addEventListener("click",function(){
    nav_manu.classList.toggle("d-flex");
})
search_button.addEventListener("click",function(){
    searchbox_outer.classList.toggle("show_for_small");
})
close_search_box.addEventListener("click",function(){
    searchbox_outer.classList.toggle("show_for_small");
})


window.addEventListener("scroll" , function(){
    nav_manu.classList.remove("d-flex")
});