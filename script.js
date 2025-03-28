// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function () {
    // Dark Mode Toggle
    const toggleButton = document.querySelector('.toggle-btn');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Scroll Animation for Sections
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
