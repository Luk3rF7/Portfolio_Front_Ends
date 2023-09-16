/* card numero : */
document.querySelector('.card-number-input').oninput = () => {
  document.querySelector('.card-number').innerText = document.querySelector('.card-number-input').value;
}
/* card-holder */
document.querySelector('.card-holder-input').oninput = () => {
  document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}
/* cvv - mes */
document.querySelector('.month-input').oninput = () => {
  document.querySelector('.exp-month').innerText =
    document.querySelector('.month-input').value;
}
/* cvv - year */
document.querySelector('.year-input').oninput = () => {
  document.querySelector('.exp-year').innerText =
    document.querySelector('.year-input').value;
}
/* cvv - year */
document.querySelector('.cvv-input').oninput = () => {
  document.querySelector('.cvv-box').innerText =
    document.querySelector('.cvv-input').value;
}
/* cvv- vira trazeiro card */
document.querySelector('.cvv-input').onmouseenter = () => {
  document.querySelector('.front-card').style.transform = 'perspective(1000px) rotateY(-180deg)'
  document.querySelector('.back-card').style.transform = 'perspective(1000px) rotateY(0deg)'
}
/* cvv- yfrente card */
document.querySelector('.cvv-input').onmouseleave = () => {
  document.querySelector('.front-card').style.transform = 'perspective(1000px) rotateY(0deg)'
  document.querySelector('.back-card').style.transform = 'perspective(1000px) rotateY(-180deg)'
}
/* side  */
const dropOpen = document.querySelector('.web-btn')
const webShow = document.querySelector('.web-show')
$(document).ready(function () {

  $(dropOpen).click(function () {
    $(webShow).toggleClass("show")
  });
});