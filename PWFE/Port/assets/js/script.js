const header = document.querySelector('header');
let date = new Date()
let currentYear = date.getFullYear();

window.addEventListener('scroll', function() {
    header.classList.toggle('opacity', window.scrollY > 0);
});

document.querySelector('#year').textContent = currentYear;