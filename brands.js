/* ===== HEADING TYPING + FADE ===== */
const headingText = "The Essence of FOGG";
let hIndex = 0;
const headingEl = document.getElementById("typing-heading");

function typeHeading() {
  headingEl.classList.remove("fade-in");
  headingEl.innerHTML = "";
  hIndex = 0;

  setTimeout(() => {
    headingEl.classList.add("fade-in");

    function write() {
      if (hIndex < headingText.length) {
        headingEl.innerHTML += headingText.charAt(hIndex);
        hIndex++;
        setTimeout(write, 80);
      } else {
        setTimeout(typeHeading, 2800);
      }
    }
    write();
  }, 300);
}

typeHeading();


/* ===== STORY TYPING + FADE ===== */
const texts = [
  "FOGG is more than a fragrance — it is a statement of confidence.",
  "Crafted for those who lead, not follow, and leave a lasting impression.",
  "Every spray delivers power, freshness, and identity that lasts all day.",
  "Distributed with pride by Mufee International across Sri Lanka."
];

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 60;
const pauseTime = 2000;
const textEl = document.getElementById("typing-text");

function typeStory() {
  textEl.classList.remove("fade-in");
  textEl.innerHTML = "";
  charIndex = 0;

  setTimeout(() => {
    textEl.classList.add("fade-in");

    function write() {
      if (charIndex < texts[textIndex].length) {
        textEl.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(write, typingSpeed);
      } else {
        setTimeout(() => {
          textIndex = (textIndex + 1) % texts.length;
          typeStory();
        }, pauseTime);
      }
    }
    write();
  }, 300);
}

typeStory();
