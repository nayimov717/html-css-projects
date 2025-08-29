// Offcanvas menu toggle
// const toggleButton = document.querySelector('.header__toggle');
// const offcanvasMenu = document.querySelector('.offcanvas');

// toggleButton.addEventListener('click', () => {
//   offcanvasMenu.classList.toggle('open');
// });


const burger = document.querySelector(".header__toggle");
const offcanvas = document.querySelector(".offcanvas");
const closeBtn = document.querySelector(".offcanvas__close");
const overlay = document.querySelector(".overlay");

// Offcanvas ochish
burger.addEventListener("click", () => {
  offcanvas.classList.add("active");
  overlay.classList.add("active");
});

// Yopish (close tugmasi yoki overlay bosilganda)
function closeOffcanvas() {
  offcanvas.classList.remove("active");
  overlay.classList.remove("active");
}

closeBtn.addEventListener("click", closeOffcanvas);
overlay.addEventListener("click", closeOffcanvas);

