let circle = document.querySelector(".color-option");

circle.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("circle")) {
    circle.querySelector(".active").classList.remove("active");
    target.classList.add("active");
  }
});