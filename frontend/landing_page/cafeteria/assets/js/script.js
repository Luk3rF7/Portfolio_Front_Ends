/* instancia */
/* Form login modal */
const loginForm = document.querySelector('.login-form');
const btnLogin = document.querySelector('#login-btn');
const closeLogin = document.querySelector('#close-login-form');
// page 
const header = document.querySelector('.header');
const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .nav')
// event click - login
btnLogin.onclick = () => {
  loginForm.classList.add('active');
}
closeLogin.onclick = () => {
  loginForm.classList.remove('active');
}
// menu mobile

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

// window  header menu
window.onscroll = () => {
  loginForm.classList.remove('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');


  if (window.scrollY > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active')
  }
}
