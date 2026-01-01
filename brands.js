/* ===== HEADING TYPING ===== */
const headingText = "The Essence of FOGG";
let hIndex = 0;
const headingEl = document.getElementById("typing-heading");

function typeHeading() {
  if (hIndex < headingText.length) {
    headingEl.innerHTML += headingText.charAt(hIndex);
    hIndex++;
    setTimeout(typeHeading, 80);
  } else {
    setTimeout(() => {
      headingEl.innerHTML = "";
      hIndex = 0;
      typeHeading();
    }, 2500);
  }
}

typeHeading();


/* ===== STORY TYPING ===== */
const texts = [
  "FOGG is more than a fragrance — it is a statement of confidence.",
  "Crafted for those who lead, not follow, and who leave a lasting impression.",
  "Every spray delivers power, freshness, and identity that lasts all day.",
  "Distributed with pride by Mufee International across Sri Lanka."
];

let textIndex = 0;
let charIndex = 0;
const speed = 65;
const pause = 1800;
const element = document.getElementById("typing-text");

function typeStory() {
  if (charIndex < texts[textIndex].length) {
    element.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeStory, speed);
  } else {
    setTimeout(() => {
      element.innerHTML = "";
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;
      typeStory();
    }, pause);
  }
}

typeStory();
