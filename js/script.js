var toggle = document.querySelector(".main-nav__toggle");
var nav = document.querySelector(".main-nav");
var wrapper = document.querySelector(".main-nav__wrapper");
var header = document.querySelector(".page-header");
var link = document.querySelector(".form-submit__btn");
var success = document.querySelector(".modal-block--success");
var error = document.querySelector(".modal-block--error");
var close = document.querySelector(".modal-block__button");
var closefail = document.querySelector(".modal-block__button--fail");
var popup = document.querySelector(".modal-block");
var form = document.querySelector("form");

function workMenu () {
  if (nav.classList.contains("main-nav--nojs")) {
    nav.classList.remove("main-nav--nojs");
    nav.classList.add("main-nav--closed");
    toggle.classList.remove("main-nav__toggle--opened");
    toggle.classList.add("main-nav__toggle--closed");
    wrapper.classList.add("main-nav__wrapper--closed");
    header.classList.remove("page-header--nojs");
  }
}

function toggleMenu(){
  if (toggle.classList.contains("main-nav__toggle--opened")) {
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

document.addEventListener("DOMContentLoaded", workMenu);

form.addEventListener("submit", function(event) {
  event.preventDefault();

  var name= document.querySelector("#name");
  var surname = document.querySelector("#surname");

  if (!name.value && !surname.value) {
    error.classList.add("modal-block--show");
    name.focus();
  } else if (!surname.value) {
    surname.focus();
  } else {
    success.classList.add("modal-block--show");  }
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    success.classList.add("modal-block--close");
});

closefail.addEventListener("click", function(event) {
    event.preventDefault();
    error.classList.add("modal-block--close");
});