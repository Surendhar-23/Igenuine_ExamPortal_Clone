// Toogle side nav

let menubtn = document.querySelector(".menu__icon__box");
let sideNav = document.querySelector(".side__nav");

menubtn.addEventListener("click", () => {
  sideNav.classList.toggle("side__nav__open");
});

let fullscreenBtn = document.querySelector(".fullscreen__btn");

fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    fullscreenBtn.classList = "bx bx-exit-fullscreen fullscreen__btn";
  } else {
    document.exitFullscreen();
    fullscreenBtn.classList = "bx bx-fullscreen fullscreen__btn";
  }
});

// upcoming exam minimize and maximize

let upcomToggleBtn = document.querySelectorAll(".exam__type__header__icon ");

upcomToggleBtn.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e);
    let typeContainer = e.closest(".exam__type__container");
    let upcomExamContainer = typeContainer.querySelector(
      ".exam__upcom__container"
    );
    upcomExamContainer.classList.toggle("exam__upcom__container__open");
  });
});
//
// upcomToggleBtn.addEventListener("click", () => {
//
// });
