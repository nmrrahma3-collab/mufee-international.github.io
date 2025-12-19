/* =========================
   RIGHT SIDE MENU
========================= */

function openMenu() {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.style.right = "0";
  }
}

function closeMenu() {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.style.right = "-300px";
  }
}

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  reveals.forEach((el) => observer.observe(el));
});
