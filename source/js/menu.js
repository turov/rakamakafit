'use strict';

(function () {

var nav = document.querySelector('.nav');
var btn = document.querySelector('.nav__btn');
var page = document.querySelector('.page');
var blackWrapper = document.querySelector('.wrapper-black');
var links = document.querySelectorAll('.nav__link');

nav.classList.remove('nav--opened');
nav.classList.add('nav--closed');

btn.onclick = function () {
  nav.classList.toggle('nav--opened');
  page.classList.toggle('page--fixed');
  blackWrapper.classList.toggle('wrapper-black--active')
};

  links.forEach(function (element) {
    element.onclick = function () {
      links.forEach(function (el) {
        nav.classList.remove('nav--opened');
        page.classList.remove('page--fixed');
        blackWrapper.classList.remove('wrapper-black--active')
      });
    }
  });

})();