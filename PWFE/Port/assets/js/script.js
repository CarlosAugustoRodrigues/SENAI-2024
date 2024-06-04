const header = document.querySelector('header');
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');
let date = new Date()
let currentYear = date.getFullYear();

window.addEventListener('scroll', function() {
    header.classList.toggle('effect-blur', window.scrollY > 0);
});

document.querySelector('#year').textContent = currentYear;

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

   // cursorOutline.style.left = `${posX}px`;
   // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 700, fill: 'forwards'});
});