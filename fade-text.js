const fadeText = document.querySelectorAll(".fade-text");

function fadeInText() {
  fadeText.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 80) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", fadeInText);
fadeInText();
