/*  setup menu */
/* variaveis menu */
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

/* code menu hambuguer */

menu.onclick = () => {
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
}