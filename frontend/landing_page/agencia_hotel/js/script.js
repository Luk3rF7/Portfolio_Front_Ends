/* instancia global */
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let loginForm = document.querySelector('.login-form-container');
let formBtn = document.querySelector('#login-btn');
let formClose = document.querySelector('#form-close');

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

let videoBtn = document.querySelectorAll('.vid-btn')
/* header search hidden - show */

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});
/* header menu -sidebar*/

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});
/* slide - video home */
videoBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    /* btn - video */
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active')
    /* troca vid */
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slide').src = src
  });
});
/* login form modal  */

formBtn.addEventListener('click', () => {
  loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
  loginForm.classList.remove('active');
});

/* quando rodar para baixo remover  */

window.onscroll = () => {
  /* header -search */
  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
  /* login */
  loginForm.classList.remove('active');
  /* menu - aside */
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}
/* swiper slide avaliação */

var swiper = new Swiper(".review-slide", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2200,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3
    },
  },
});
/* brand -slide */
var swiper = new Swiper(".brand-slide", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3
    },
  },
});