// Theme Toggle
// const themeToggle = document.getElementById('theme-toggle');
// const body = document.body;
// const toggleText = document.querySelector('.toggle-text');

// themeToggle.addEventListener('click', function() {
//     body.classList.toggle('dark-mode');
    
//     if (body.classList.contains('dark-mode')) {
//         toggleText.textContent = 'Switch to Light Mode';
//     } else {
//         toggleText.textContent = 'Switch to Dark Mode';
//     }
// });


const publicationCards = document.querySelectorAll('.publication-card');

publicationCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
});




const headerToggle = document.querySelector('.header-toggle');
const headerNav = document.getElementById('header-nav');

headerToggle.addEventListener('click', () => {
    headerNav.classList.toggle('show');
});


const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});