/* menu hambuguer */
$(document).ready(function () {
  /* menu - fecha e abrir*/
  $('.fa-bars').click(function () {
    $(this).toggleClass('fa-times');
    $('nav').toggleClass('nav-toggle');
  });
  /*  */
  $('nav ul li a').click(function () {
    $('.fars-bars').removeClass('fa-times');
    $('nav').removeClass('nav-toggle')
  })
  /* scroll */
  $(window).scroll(function () {
    if ($(window).scrollTop() < 20) {
      $('header').css('box-shadow', 'none')
    } else {
      $('header').css('box-shadow', '0 .2rem .5rem #333')
    }
  });
})