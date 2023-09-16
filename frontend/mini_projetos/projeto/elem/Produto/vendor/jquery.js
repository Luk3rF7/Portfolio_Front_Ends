const btnColor = document.querySelectorAll('.circles span')
const srcImg = document.querySelectorAll('.main-image img')
// jquery

const dropOpen = document.querySelector('.web-btn')
const webShow = document.querySelector('.web-show')
$(document).ready(function () {
  $(dropOpen).click(function () {
    $(webShow).toggleClass("show")
  });

  $(btnColor).click(function () {
    let image = $(this).attr('data-image');
    $(srcImg).attr('src', image);
  })

});