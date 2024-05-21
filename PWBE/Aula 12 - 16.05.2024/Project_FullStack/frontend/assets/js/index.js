const data = new Date();
const header = document.querySelector('header');

function currentYear() {
    const year = data.getFullYear();
    this.document.querySelector('#data').textContent = year;
};

window.addEventListener('scroll', () => {
    header.classList.toggle('effect-blur', window.scrollY > 0);
});