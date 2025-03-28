// Dark Mode Toggle
const toggleDarkMode = document.getElementById('toggle-dark-mode');
toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleDarkMode.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

// Form Submission - Simple confirmation (You can replace this with backend integration)
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Your message has been sent! Thank you for contacting us.");
    e.target.reset(); // Reset form fields after submission
});
