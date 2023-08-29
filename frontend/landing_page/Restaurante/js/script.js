/*  setup menu */
/* variaveis menu */
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

/* code menu hambuguer */

menu.onclick = () => {
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
}
window.onscroll = () => {
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')

  /* spyscroll */
  let section = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header .navbar a');
  /* scrollpsy */
  section.forEach(sec => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if (top => offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header .navbar a[href=' + id + ']').classList.add('active')
      });
    }
  });

}
/* barra de pesquisa aparecer */

document.querySelector('#search-icons').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
}

/* config swiper slide */
var swiper = new Swiper(".home-slide", {
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});
