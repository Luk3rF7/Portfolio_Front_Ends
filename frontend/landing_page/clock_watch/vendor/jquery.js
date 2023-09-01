/* menu active setup */
$(document).ready(function () {
  /* btn active menu */
  $('nav ul li a').click(function () {
    $('nav ul li a').removeClass('active');
    $(this).addClass('active');
  });
  /* button controls  p/ mini slide */
  $('#right').click(function () {
    /* btn proxima img */
    $('.image-container').find('.active').next().addClass('active');
    /* btn previous img */
    $('.image-container').find('.active').prev().removeClass('active');
  });
  /* button controls  p/ mini slide */
  $('#left').click(function () {
    /* btn proxima img */
    $('.image-container').find('.active').prev().addClass('active');
    /* btn previous img */
    $('.image-container').find('.active').next().removeClass('active');
  });
});