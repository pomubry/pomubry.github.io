AOS.init({
  delay: 100,
});

const tooltip = document.querySelectorAll(".tech-fa");
const burger = document.querySelector(".burger");
const close = document.querySelector(".fa-times");
const modal = document.querySelector(".backdrop");

[...tooltip].forEach((li) => {
  li.addEventListener("mouseenter", () => {
    li.firstElementChild.style.opacity = 1;
  });
  li.addEventListener("mouseleave", () => {
    li.firstElementChild.style.opacity = 0;
  });
});

burger.addEventListener("click", () => {
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
