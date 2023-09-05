/* menu bar  */
$(document).ready(function () {
  $('#menu').click(function () {
    /* close */
    $(this).toggleClass('fa-times');
    /* navbar */
    $('.navbar').toggleClass('nav-toggle')
  });
  /* menu */
  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    /* header bar bottom */
    if ($(window).scrollTop() > 60) {
      $('header').addClass('header-active');
    } else {
      $('header').removeClass('header-active')
    }
  })

});