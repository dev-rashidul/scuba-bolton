// JavaScript For Sticky Header

window.addEventListener("scroll", function () {
  const header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// JavaScript For Mobile Menu

const navMenu = document.querySelector(".nav-menu");
const bars = document.getElementById("bars");

bars.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Password Show Hide JS

function passFunc() {
  var passInput = document.getElementById("passInput");
  var eyeHide = document.getElementById("eye-hide");
  var eyeShow = document.getElementById("eye-show");

  if (passInput.type === "password") {
    passInput.type = "text";
    eyeHide.style.display = "block";
    eyeShow.style.display = "none";
  } else {
    passInput.type = "password";
    eyeHide.style.display = "none";
    eyeShow.style.display = "block";
  }
}
