// ====== Mobile Menu Toggle ======
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
  }
});

// ====== Close Menu When a Link is Clicked (Mobile) ======
const navLinks = document.querySelectorAll("#navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navbar.style.display = "none";
    }
  });
});

// ====== Highlight Active Page ======
navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// ====== Fade-In Animation ======
window.addEventListener("load", () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "all 0.8s ease-out";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 150);
  });
});

console.log("✅ Portfolio script loaded successfully!");
