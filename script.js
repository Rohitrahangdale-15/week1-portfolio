// =========================
// MOBILE NAVIGATION
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// =========================
// CLOSE MENU AFTER CLICK
// =========================

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

  });

});


// =========================
// STICKY HEADER EFFECT
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.style.boxShadow =
      "0 10px 30px rgba(0,0,0,0.08)";

    header.style.background =
      "rgba(255,255,255,0.95)";

  } else {

    header.style.boxShadow = "none";

    header.style.background =
      "rgba(255,255,255,0.8)";
  }

});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements =
  document.querySelectorAll(
    ".section, .project-card, .skill-card"
  );

function revealOnScroll() {

  revealElements.forEach(element => {

    const windowHeight = window.innerHeight;

    const revealTop =
      element.getBoundingClientRect().top;

    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {

      element.style.opacity = "1";

      element.style.transform =
        "translateY(0px)";

    }

  });

}

revealElements.forEach(element => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(50px)";

  element.style.transition =
    "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =========================
// TYPING EFFECT
// =========================

const typingTexts = [

  "Frontend Developer",

  "Web Designer",

  "JavaScript Learner",

  "Responsive UI Creator"

];

let textIndex = 0;
let charIndex = 0;

const typingElement =
  document.querySelector(".hero-text h3");

function typeText() {

  if (charIndex < typingTexts[textIndex].length) {

    typingElement.textContent +=
      typingTexts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeText, 100);

  } else {

    setTimeout(eraseText, 1500);

  }

}

function eraseText() {

  if (charIndex > 0) {

    typingElement.textContent =
      typingTexts[textIndex].substring(
        0,
        charIndex - 1
      );

    charIndex--;

    setTimeout(eraseText, 50);

  } else {

    textIndex++;

    if (textIndex >= typingTexts.length) {

      textIndex = 0;

    }

    setTimeout(typeText, 300);

  }

}

typingElement.textContent = "";

typeText();


// =========================
// ACTIVE NAV LINK ON SCROLL
// =========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {

      current = section.getAttribute("id");

    }

  });

  navItems.forEach(link => {

    link.classList.remove("active-link");

    if (
      link.getAttribute("href")
      === `#${current}`
    ) {

      link.classList.add("active-link");

    }

  });

});


// =========================
// BUTTON RIPPLE EFFECT
// =========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform =
      "translateY(-5px) scale(1.03)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform =
      "translateY(0px) scale(1)";

  });

});


// =========================
// CONSOLE MESSAGE
// =========================

console.log(
  "%c🔥 Rohit Portfolio Loaded Successfully!",
  "color:#2563eb; font-size:16px; font-weight:bold;"
);