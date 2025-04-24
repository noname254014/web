const inputToggle = document.querySelector('#toggleMode');

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
    inputToggle.checked = true;
}

// Toggle dark mode
inputToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});