const memuBtn = document.querySelector(".memu__btn");
const memu = document.querySelector(".memu__list");

memuBtn.addEventListener("click", () => {
  memu.classList.toggle("memu__list--active");
});
