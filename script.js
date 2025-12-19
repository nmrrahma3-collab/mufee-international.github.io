/* MENU OPEN / CLOSE */
function openMenu() {
  const menu = document.getElementById("menu");
  if (menu) menu.classList.add("show");
}

function closeMenu() {
  const menu = document.getElementById("menu");
  if (menu) menu.classList.remove("show");
}

/* HEADER SHOW AFTER SCROLL */
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (!header) return;

  if (window.scrollY > 80) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
});

/* SCROLL REVEAL */
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
});
