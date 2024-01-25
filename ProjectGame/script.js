const startText = document.querySelector('.start-text');
const startGame = document.querySelector('.time-start-game');

const timer = document.querySelector('#timer');
const score = document.querySelector('#score');

const containerGame = document.querySelector('.container-game');
const square = document.querySelectorAll('.square');
const gameBoard = document.querySelector('.game-board');

const bestScore = document.querySelector(".best-score");

const gameSettings = {
    time: 10,
    timeStart: 3,
    score: 0,
    squareActive: 7,
    squareInactive: 3
}

function timeStart() {
    startText.style.display = 'none';
    startGame.style.display = 'flex';

    setTimeout(() => {
        startGame.innerHTML = gameSettings.timeStart;
        var startInterval = setInterval(() => {
            gameSettings.timeStart--
            startGame.innerHTML = gameSettings.timeStart;

            if(gameSettings.timeStart == 0) {
                startGame.innerHTML = 'GO!';
                clearInterval(startInterval);
            }
        }, 1000);
    }, 200);

    setTimeout(() => {
        startGame.innerHTML = '';
        startGame.style.display = 'none'
        containerGame.style.display = 'flex';
        scoreGame();
        timeGame();
        randomSquare();
    }, 4000)
}

function scoreGame() {
    score.innerHTML = gameSettings.score;

    square.forEach((e) => {
        e.addEventListener('click', () => { 
            if(e.classList.contains('active') && gameSettings.score >= 0) {
                gameSettings.score += gameSettings.squareActive;
                score.innerHTML = gameSettings.score;
            } else if(!e.classList.contains('active') && gameSettings.score > 2) {
                gameSettings.score -= gameSettings.squareInactive;
                score.innerHTML = gameSettings.score;
            } else {
                gameSettings.score = 0;
                score.innerHTML = gameSettings.score;
            }
            e.classList.remove('active');
        });
    });
}

function timeGame() {
    timer.innerHTML = gameSettings.time;

    var gameInterval = setInterval(() => {
        gameSettings.time--;
        timer.innerHTML = gameSettings.time;
        if (gameSettings.time == 0){
            clearInterval(gameInterval);
            gameBoard.style.pointerEvents = 'none';
            if(gameSettings.score > gameSettings.record || gameSettings.score == gameSettings.record) {
                gameSettings.record = gameSettings.score;
                bestScore.innerHTML = 'BEST SCORE: ' + gameSettings.record;
            }
        }
    }, 1000);
}

function randomSquare() {

    var randomInterval = setInterval(() => {
        while(gameSettings.time > 0) {
            let rnd = Math.floor(Math.random() * square.length);
            if (!square[rnd].classList.contains('active')){
                square[rnd].classList.add('active');
                break;
            }
        }
    }, 400)
}

startText.addEventListener('click', () => {
    timeStart();
})