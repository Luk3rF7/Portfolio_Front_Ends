/* formulario */
const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
/* btn next & prev */
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
/* page 2*/
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
/* page 4 */
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
/* submit */
const submit = document.querySelector('.submit');
// step
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
const msgConcluido = document.querySelector(".msg")
let max = 4;
let current = 1;


// evento manipulação:

// proxima page
firstNextBtn.addEventListener("click", (e) => {
  e.preventDefault();

  slidePage.style.marginLeft = "-25%";
  //step 
  bullet[current - 1].classList.add("active")
  progressText[current - 1].classList.add("active")
  progressCheck[current - 1].classList.add("active")
  current += 1;
})
nextBtnSec.addEventListener("click", (e) => {
  e.preventDefault();

  slidePage.style.marginLeft = "-50%";
  //step 
  bullet[current - 1].classList.add("active")
  progressText[current - 1].classList.add("active")
  progressCheck[current - 1].classList.add("active")
  current += 1;
})
nextBtnThird.addEventListener("click", (e) => {
  e.preventDefault();

  slidePage.style.marginLeft = "-75%";
  //step 
  bullet[current - 1].classList.add("active")
  progressText[current - 1].classList.add("active")
  progressCheck[current - 1].classList.add("active")
  current += 1;
})
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //step 
  bullet[current - 1].classList.add("active")
  progressText[current - 1].classList.add("active")
  progressCheck[current - 1].classList.add("active")
  current += 1;
  //timeout delay
  msgConcluido.classList.add("active");
})

// anterior
prevBtnSec.addEventListener("click", (e) => {
  e.preventDefault();

  slidePage.style.marginLeft = "0%";
  //step 
  bullet[current - 2].classList.remove("active")
  progressText[current - 2].classList.remove("active")
  progressCheck[current - 2].classList.remove("active")
  current -= 1;

})
prevBtnThird.addEventListener("click", (e) => {
  e.preventDefault();

  slidePage.style.marginLeft = "-25%";
  //step 
  bullet[current - 2].classList.remove("active")
  progressText[current - 2].classList.remove("active")
  progressCheck[current - 2].classList.remove("active")
  current -= 1;
})
prevBtnFourth.addEventListener("click", (e) => {
  e.preventDefault();

  slidePage.style.marginLeft = "-50%";
  //step 
  bullet[current - 2].classList.remove("active")
  progressText[current - 2].classList.remove("active")
  progressCheck[current - 2].classList.remove("active")
  current -= 1;
})
/* side  */
const dropOpen = document.querySelector('.web-btn')
const webShow = document.querySelector('.web-show')
$(document).ready(function () {
  $(dropOpen).click(function () {
    $(webShow).toggleClass("show")
  });
});
