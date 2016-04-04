var toggle = document.querySelector(".main-nav__toggle");
var nav = document.querySelector(".main-nav");
var wrapper = document.querySelector(".main-nav__wrapper");

toggle.addEventListener("click", function(event) {
    event.preventDefault();

    if (event.target.classList.contains('main-nav__toggle--opened')) {
      toggle.classList.remove("main-nav__toggle--opened");
      toggle.classList.add("main-nav__toggle--closed");
      nav.classList.remove(".main-nav--opened");
      wrapper.classList.remove("main-nav__wrapper--opened");
      wrapper.classList.add("main-nav__wrapper--closed");
  } else {
      toggle.classList.remove("main-nav__toggle--closed");
      toggle.classList.add("main-nav__toggle--opened");
      nav.classList.add("main-nav--opened");
      wrapper.classList.remove("main-nav__wrapper--closed");
      wrapper.classList.add("main-nav__wrapper--opened");
  }
});
