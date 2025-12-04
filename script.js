// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// Set default theme to dark
if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'dark');
}

// Load saved theme or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  html.setAttribute('data-theme', 'light');
  themeToggle.textContent = '☀️';
} else {
  themeToggle.textContent = '🌙';
}

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute('data-theme');

  if (currentTheme === 'light') {
    html.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  }
});

// Mobile nav toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
      navLinks.classList.remove("show");
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest('.navbar')) {
    navLinks.classList.remove("show");
  }
});
