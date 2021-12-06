let hamburgerBatton=document.querySelector(".button_wrapper");   //коннектимся с кнопкой открытия
let navWrapper=document.querySelector(".nav_wrapper");             //обращаемся к классу тега nav_wrapper

hamburgerBatton.addEventListener("click", function (evt){
    evt.preventDefault();
    navWrapper.classList.toggle("nav_wrapper_off");   
});

let readBatton=document.querySelector(".button_read");   //коннектимся с кнопкой открытия
let readWrap=document.querySelector(".SEO__main--increase");             //обращаемся к классу тега nav_wrapper

readBatton.addEventListener("click", function (evt){
    evt.preventDefault();
    readWrap.classList.toggle("read_wrap_off");   
});
