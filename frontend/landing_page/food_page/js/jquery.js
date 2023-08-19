// loop imagem fundo tela com zoom cursor

$(document).ready(function () {


  $('.container').mousemove(function (e) {

    var x = e.pageX + 'px';
    var y = e.pageY + 'px';

    $('.cursor').css({ 'top': y, 'left': x });

  });

  var images = new Array('./img/img_1.jpg', './img/img_2.jpg', './img/img_3.jpg', './img/img_4.jpg', './img/img_5.jpg');

  setInterval(function () {

    var random = images[Math.floor(Math.random() * images.length)];
    $('.image').css('background', 'url(' + random + ')');

  }, 2500);

});
