/* ==============================
   BRAND STORY TYPING (FINAL)
============================== */

const headingText = "The Essence of FOGG";

const lines = [
  "FOGG is more than a fragrance — it is a statement of confidence.",
  "Crafted for those who lead, not follow, and leave a lasting impression.",
  "Every spray delivers power, freshness, and identity that lasts all day.",
  "Proudly distributed by Mufee International across Sri Lanka."
];

const headingEl = document.getElementById("typing-heading");
const linesEl = document.getElementById("typing-lines");

let hIndex = 0;
let lineIndex = 0;
let charIndex = 0;

/* TYPE HEADING */
function typeHeading() {
  headingEl.innerHTML = "";
  hIndex = 0;

  function writeHeading() {
    if (hIndex < headingText.length) {
      headingEl.innerHTML += headingText.charAt(hIndex);
      hIndex++;
      setTimeout(writeHeading, 80);
    } else {
      setTimeout(typeLine, 600);
    }
  }

  writeHeading();
}

/* TYPE EACH LINE */
function typeLine() {
  if (lineIndex >= lines.length) {
    // All done → wait → clear → restart
    setTimeout(resetAll, 2500);
    return;
  }

  const p = document.createElement("p");
  linesEl.appendChild(p);
  charIndex = 0;

  function writeChar() {
    if (charIndex < lines[lineIndex].length) {
      p.textContent += lines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(writeChar, 55);
    } else {
      lineIndex++;
      setTimeout(typeLine, 400);
    }
  }

  writeChar();
}

/* RESET EVERYTHING */
function resetAll() {
  headingEl.innerHTML = "";
  linesEl.innerHTML = "";
  lineIndex = 0;
  setTimeout(typeHeading, 800);
}

/* START */
typeHeading();
