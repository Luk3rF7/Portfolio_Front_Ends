/* instancia */
const openBox = document.querySelectorAll('.box')
/* jquery slide */
$(document).ready(function () {
  $(openBox).click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  })
});
/* side  */
const dropOpen = document.querySelector('.web-btn')
const webShow = document.querySelector('.web-show')
$(document).ready(function () {

  $(dropOpen).click(function () {
    $(webShow).toggleClass("show")
  });
});