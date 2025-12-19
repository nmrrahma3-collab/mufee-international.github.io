function openMenu() {
  document.getElementById("menu").style.right = "0";
}

function closeMenu() {
  document.getElementById("menu").style.right = "-300px";
}

const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));
