// Sample Assignments Data
const assignments = [
    { title: 'Assignment 1: Number Theory', dueDate: '5th April 2025' },
    { title: 'Assignment 2: Functions', dueDate: '12th April 2025' },
    { title: 'Assignment 3: Calculus', dueDate: '19th April 2025' }
];

// Populate Assignments Section
const assignmentsContainer = document.getElementById('assignments');
assignments.forEach(assignment => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${assignment.title}</h3><p>Due Date: ${assignment.dueDate}</p>`;
    assignmentsContainer.appendChild(div);
});

// Chart.js for Progress Chart
const ctx = document.getElementById('progressChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Assignment 1', 'Assignment 2', 'Assignment 3'],
        datasets: [{
            label: 'Score Progress',
            data: [85, 90, 95],
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Dark Mode Toggle
const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});

// Load Dark Mode Preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
}
