// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
let isDarkMode = false;

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);

    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
});

// Apply saved theme preference on load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    if (savedTheme) {
        document.body.classList.add('dark-mode');
        isDarkMode = true;
    }
});

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

themeToggle.addEventListener('click', () => {
  console.log("Toggle button clicked!");
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  localStorage.setItem('darkMode', isDarkMode);
});
