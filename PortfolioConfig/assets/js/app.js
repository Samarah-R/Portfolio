//scroll to top functionality

//variable created to select class scroll-up
const scrollUp = document.querySelector("#scroll-up");

//adding event listener for clicks and creating anonymous function for actions 
//scroll to method allows page to scroll to specific coordinates that you designate
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth",

    });
});

//toggling the navbar menu items on and off. In Css, this selector is ul.show
//variables created to select html elements
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

//toggle method allows to remove and add class 
burger.addEventListener("click", () => {
    ul.classList.toggle("show");

});

//select nav links and close burger menu then they are clicked.
//forEach method calls function for each element being looped through.
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) =>
    link.addEventListener("click", () => {
       ul.classList.remove("show");  
    })
);






