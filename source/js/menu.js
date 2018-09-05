var nav = document.querySelector('.nav');
var btn = document.querySelector('.nav__btn');
var page = document.querySelector('.page');
var blackWrapper = document.querySelector('.wrapper-black');

nav.classList.remove('nav--opened');
nav.classList.add('nav--closed');

// btn.addEventListener('click', function () {
//   if (nav.classList.contains('nav--closed')) {
//     nav.classList.remove('nav--closed');
//     nav.classList.add('nav--opened');
//     page.classList.add('page--fixed');
//     blackWrapper.classList.add('wrapper-black--active')
//   } else {
//     nav.classList.add('nav--closed');
//     nav.classList.remove('nav--opened');
//     nav.classList.remove('page--fixed')
//     blackWrapper.classList.remove('wrapper-black--active')
//   }
// });


btn.onclick = function () {
  nav.classList.toggle('nav--opened');
  page.classList.toggle('page--fixed');
  blackWrapper.classList.toggle('wrapper-black--active')
};