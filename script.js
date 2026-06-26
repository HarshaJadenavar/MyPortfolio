// ================================
// Typing Animation
// ================================

const words = [
    "Python Full Stack Developer",
    "Data Science Enthusiast",
    "AI Explorer",
    "Machine Learning Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex++);
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        isDeleting = true;
        speed = 1500;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();



// ================================
// Scroll Reveal Animation
// ================================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            section.classList.add("active");
        }

    });

}

// Run once when page loads
window.addEventListener("load", revealSections);

// Run while scrolling
window.addEventListener("scroll", revealSections);



// ================================
// Theme Toggle
// ================================

const themeBtn = document.getElementById("theme");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "🌙";
    } else {
        themeBtn.textContent = "☀";
    }

});



// ================================
// Mobile Menu
// ================================

const menuBtn = document.getElementById("menu");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }

});



// ================================
// Active Navigation Link
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }

    });

});
