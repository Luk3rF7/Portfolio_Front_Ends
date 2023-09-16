const dropOpen = document.querySelector('.web-btn')
const webShow = document.querySelector('.web-show')
$(document).ready(function () {

  $(dropOpen).click(function () {
    $(webShow).toggleClass("show")
  });
});