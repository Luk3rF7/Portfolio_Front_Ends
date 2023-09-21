/* instanciando */
const colorPainel = document.querySelectorAll('.colors span');
const backgroundTrade = document.querySelector('.box-container');
const selectImg = document.querySelector('.image img');
/* jquery */
$(document).ready(function () {
  // selecionando 
  $(colorPainel).click(function () {
    $(this).addClass('active').siblings().removeClass('active')

    // mudar cor de fundo
    let color = $(this).css('background');
    $(backgroundTrade).css('background', color);
    //mudando img
    let image = $(this).attr('data-image');
    $(selectImg).attr('src', image)

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