// Admin Password
const adminPassword = "mimamsa123";

// DOM Elements
const adminLoginSection = document.getElementById('adminLoginSection');
const adminPanel = document.getElementById('adminPanel');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const noticeForm = document.getElementById('noticeForm');
const noticeList = document.getElementById('noticeList');

// Handle Login
loginButton.addEventListener('click', function () {
    const passwordInput = document.getElementById('adminPassword').value;
    if (passwordInput === adminPassword) {
        adminLoginSection.classList.add('hidden');
        adminPanel.classList.remove('hidden');
    } else {
        alert("Incorrect password. Access denied.");
    }
});

// Handle Logout
logoutButton.addEventListener('click', function () {
    adminLoginSection.classList.remove('hidden');
    adminPanel.classList.add('hidden');
});

// Handle Adding New Notices
noticeForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const noticeMessage = document.getElementById('noticeMessage').value;
    const noticeDate = document.getElementById('noticeDate').value;

    if (noticeMessage && noticeDate) {
        const li = document.createElement('li');
        li.className = 'p-3 border border-gray-200 rounded-lg bg-gray-50 shadow';
        li.textContent = `${noticeDate}: ${noticeMessage}`;
        noticeList.appendChild(li);

        document.getElementById('noticeMessage').value = '';
        document.getElementById('noticeDate').value = '';
    } else {
        alert("Please enter both a notice and a date.");
    }
});
