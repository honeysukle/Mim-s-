// Toggle Dark Mode and Save Preference in LocalStorage
const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
});

// Load Dark Mode from LocalStorage on Page Load
window.addEventListener('DOMContentLoaded', () => {
    const darkModeSetting = localStorage.getItem('darkMode');
    if (darkModeSetting === 'enabled') {
        document.body.classList.add('dark');
    }
});

// Dynamic Assignments Section
const assignments = [
    { title: 'Assignment 1: Number Theory', dueDate: '5th April 2025' },
    { title: 'Assignment 2: Functions', dueDate: '12th April 2025' },
    { title: 'Assignment 3: Linear Algebra', dueDate: '19th April 2025' }
];

const assignmentsContainer = document.getElementById('assignments');
assignments.forEach((assignment) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3>${assignment.title}</h3>
        <p>Due Date: ${assignment.dueDate}</p>
    `;
    assignmentsContainer.appendChild(card);
});

// Initialize Chart.js Progress Chart
const ctx = document.getElementById('progressChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Math Progress (%)',
            data: [50, 60, 75, 90],
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            fill: true,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});
