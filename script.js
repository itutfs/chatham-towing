'use strict';

/**
 * Navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}

/**
 * Header + Back to Top Button
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header?.classList.add("active");
    backTopBtn?.classList.add("show");
  } else {
    header?.classList.remove("active");
    backTopBtn?.classList.remove("show");
  }
});

/**
 * Smooth scroll to anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
