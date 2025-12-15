// Smooth scrolling for navigation
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href || !href.startsWith("#")) return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;

        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// Active state on scroll
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const setActiveNav = () => {
    let currentId = "";
    const offset = 120;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top - offset <= 0 && rect.bottom - offset > 0) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        const id = href && href.startsWith("#") ? href.slice(1) : "";
        link.classList.toggle("active", id === currentId || (id === "home" && !currentId));
    });
};

window.addEventListener("scroll", setActiveNav);
window.addEventListener("load", setActiveNav);


