const text =
  "FOGG is more than a fragrance. It is confidence. It is presence. It is identity.";

let index = 0;
let typingElement = document.getElementById("typing-text");

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70); // typing speed
  } else {
    setTimeout(() => {
      typingElement.innerHTML = "";
      index = 0;
      typeEffect();
    }, 2000); // pause before restart
  }
}

typeEffect();
