// Mobile menu toggle
const mobileToggle = document.getElementById("mobileMenuToggle");
const mainNav = document.getElementById("mainNav");

if (mobileToggle && mainNav) {
  mobileToggle.addEventListener("click", () => {
    mainNav.classList.toggle("nav--open");
  });
}

// Set current year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
