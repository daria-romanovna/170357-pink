var toggle = document.querySelector(".main-nav__toggle");
var nav = document.querySelector(".main-nav");
var wrapper = document.querySelector(".main-nav__wrapper");

function toggleMenu(){
  if (toggle.classList.contains('main-nav__toggle--opened')) {
      toggle.classList.remove("main-nav__toggle--opened");
      toggle.classList.add("main-nav__toggle--closed");
      nav.classList.remove("main-nav--opened");
      nav.classList.add("main-nav--closed");
      wrapper.classList.remove("main-nav__wrapper--opened");
      wrapper.classList.add("main-nav__wrapper--closed");
  } else {
      toggle.classList.remove("main-nav__toggle--closed");
      toggle.classList.add("main-nav__toggle--opened");
      nav.classList.remove("main-nav--closed");
      nav.classList.add("main-nav--opened");
      wrapper.classList.remove("main-nav__wrapper--closed");
      wrapper.classList.add("main-nav__wrapper--opened");
  }
};

toggle.addEventListener("click", function(event) {
    event.preventDefault();
    toggleMenu();
});

document.addEventListener('DOMContentLoaded', toggleMenu);