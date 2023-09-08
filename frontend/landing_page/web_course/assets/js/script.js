$(document).ready(function () {
  /* header - menu  */
  $('.fa-bars').click(function () {
    $(this).toggleClass('fa-times')
    $('nav').toggleClass('nav-toggle')
  });

  /* header */
  $(window).on('load scroll', function () {

    if ($(window).scrollTop() > 20) {
      $('#header').css('top', '0')
      /* menu */
      $(this).removeClass('fa-times')
      $('nav').removeClass('nav-toggle')
    } else {
      $('#header').css('top', '-100%')
    }
  })
})