// JavaScript For Sticky Header

window.addEventListener("scroll", function(){
    const header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0)

})

// JavaScript For Mobile Menu

const navMenu = document.querySelector(".nav-menu");
const bars = document.getElementById("bars")

bars.addEventListener("click", () =>{
    navMenu.classList.toggle("active")
})