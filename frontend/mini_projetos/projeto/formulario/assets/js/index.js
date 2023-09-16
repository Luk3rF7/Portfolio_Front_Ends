/* formulario */
const slidePage = document.querySelector(".slidepage")
const firstNextBtn = document.querySelector(".nextBtn")
/* btn next & prev */
const prevBtnSec = document.querySelector(".prev-1")
const nextBtnSec = document.querySelector(".next-1")
/* page 2*/
const prevBtnThird = document.querySelector(".prev-2")
const nextBtnThird = document.querySelector(".next-2")
/* page 4 */
const prevBtnSec = document.querySelector(".prev-3")
/* submit */
const submit = document.querySelector('.submit')
firstNextBtn.addEventListener('click', function (e) {
  e.preventDefault()
  slidePage.style.marginLeft = "-25%";
  console.log('clicou')
})


/* side  */
const dropOpen = document.querySelector('.web-btn')
const webShow = document.querySelector('.web-show')
$(document).ready(function () {
  $(dropOpen).click(function () {
    $(webShow).toggleClass("show")
  });
});
