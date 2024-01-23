var time = 60;
var score = 0;
const timer = document.querySelector('#timer')
const displayScore = document.querySelector('#score');
const divScore = document.querySelector('.div-score')
const gameBoard = document.querySelectorAll('.div-container');
const container = document.querySelector('.container')
const startText = document.querySelector('.start-text')

displayScore.innerHTML = score;
timer.innerHTML = time;

startText.addEventListener('click', () => {
    container.style.display = 'flex';
    timer.style.display = 'block'
    divScore.style.display = 'flex'
    startText.style.display = 'none';
})

