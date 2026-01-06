// ===== AOS Init =====
AOS.init({ duration: 1000, once: true });

// ===== Typing Effect =====
const text = "Hi, I'm Rutuja Mokashi";
let index = 0;
function typeWriter() {
    const typedElement = document.getElementById("typed-text");
    if (index < text.length) {
        typedElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// ===== Smooth Scroll =====
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===== Scroll Reveal Sections & Circular Skills Animation =====
const sections = document.querySelectorAll("section");
const skillCircles = document.querySelectorAll(".circle");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        // Show section animation
        if (sectionTop < screenPosition) {
            section.classList.add("show");
        }
    });

    // Animate circular skill bars when Skills section is visible
    const skillsSection = document.getElementById("skills");
    const skillsTop = skillsSection.getBoundingClientRect().top;

    if (skillsTop < window.innerHeight / 1.3) {
        skillCircles.forEach(circle => {
            const percentage = circle.dataset.percentage;
            circle.style.background = `conic-gradient(#00adb5 0deg, #00adb5 ${percentage * 3.6}deg, #ddd ${percentage * 3.6}deg, #ddd 360deg)`;
        });
    }
});

// ===== Dark / Light Theme Toggle =====
const themeBtn = document.getElementById("theme-toggle");

// Set theme based on user preference
if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
} else {
    themeBtn.textContent = "🌙";
}

// Toggle dark/light mode on button click
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});
