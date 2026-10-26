/* =====================================================
   ENIYAN S - PORTFOLIO JAVASCRIPT
   ===================================================== */


/* ---------- TYPING EFFECT ---------- */

const roles = [
    "Aspiring Software Developer",
    "Java Developer",
    "Web Developer",
    "IoT Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const roleElement = document.querySelector(".home-content h2");


function typeEffect() {

    if (!roleElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        roleElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        roleElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    const speed = deleting ? 50 : 100;

    setTimeout(typeEffect, speed);
}


typeEffect();



/* ---------- NAVIGATION ACTIVE LINK ---------- */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});



/* ---------- SCROLL REVEAL ANIMATION ---------- */

const revealElements = document.querySelectorAll(
    ".about, .skills, .projects, .contact, .project-card, .skill"
);


const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});



/* ---------- CONTACT BUTTON MESSAGE ---------- */

const contactLinks = document.querySelectorAll(".contact-links a");


contactLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "Thank you for visiting Eniyan's portfolio!"
        );

    });

});



/* ---------- PROJECT LINK CHECK ---------- */

const projectLinks = document.querySelectorAll(".project-link");


projectLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        const linkAddress = link.getAttribute("href");

        if (linkAddress === "#") {

            event.preventDefault();

            alert(
                "Project link will be added soon."
            );

        }

    });

});



/* ---------- CURRENT YEAR ---------- */

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} Eniyan S. All Rights Reserved.`;

}