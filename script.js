// script.js

// Find the button and the body element in the document
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Add an event listener to the button that triggers on click
themeToggle.addEventListener('click', () => {
    // Toggle the 'light-mode' class on the body
    body.classList.toggle('light-mode');
});
