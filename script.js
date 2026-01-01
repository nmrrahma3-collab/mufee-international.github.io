/* ===============================
   FADE-UP ON SCROLL (APPLE STYLE)
=============================== */
const fadeElements = document.querySelectorAll('.fade-up');

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.15
  }
);

fadeElements.forEach(el => fadeObserver.observe(el));


/* ===============================
   PRODUCT IMAGE POPUP (MODAL)
=============================== */
const productImages = document.querySelectorAll('.product-img-box img');

const modal = document.createElement('div');
modal.className = 'image-modal';
modal.innerHTML = `
  <span class="close-modal">&times;</span>
  <img class="modal-img" />
`;
document.body.appendChild(modal);

const modalImg = modal.querySelector('.modal-img');
const closeBtn = modal.querySelector('.close-modal');

productImages.forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.add('active');
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
