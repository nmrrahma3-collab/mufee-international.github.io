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

const fadeTexts = document.querySelectorAll('.fade-text');

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

fadeTexts.forEach(text => fadeObserver.observe(text));
