$(document).ready(function () {
  $('.small-image img').click(function () {
    $(this).addClass('active').siblings().removeClass('active')

    let image = $(this).attr('src');
    $('.big-image img').attr('src', image)
  });
});
/* side  */
const dropOpen = document.querySelector('.web-btn')
const webShow = document.querySelector('.web-show')
$(document).ready(function () {

  $(dropOpen).click(function () {
    $(webShow).toggleClass("show")
  });
});