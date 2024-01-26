const startText = document.querySelector('.start-text');
const startGame = document.querySelector('.time-start-game');

const timer = document.querySelector('#timer');
const score = document.querySelector('#score');

const containerGame = document.querySelector('.container-game');
const square = document.querySelectorAll('.square');
const gameBoard = document.querySelector('.game-board');

const bestScore = document.querySelector(".best-score");
const restart = document.querySelector(".restart")

const gameSettings = {
    time: 45,
    timeStart: 3,
    score: 0,
    record: 0,
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
    }, 500)
        

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
                if(gameSettings.score <= 200) {
                    gameSettings.score += 7;
                    score.innerHTML = gameSettings.score;
                } else if(gameSettings.score <= 700) {
                    gameSettings.score += 11;
                    score.innerHTML = gameSettings.score;
                } else {
                    gameSettings.score += 21;
                    score.innerHTML = gameSettings.score;
                }
            } else if(!e.classList.contains('active') && gameSettings.score > 2) {
                if(gameSettings.score <= 200) {
                    gameSettings.score -= 3;
                    score.innerHTML = gameSettings.score;
                } else if(gameSettings.score <= 700) {
                    gameSettings.score -= 7;
                    score.innerHTML = gameSettings.score;
                } else {
                    gameSettings.score -= 14;
                    score.innerHTML = gameSettings.score;
                }
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
            if(gameSettings.score >= gameSettings.record) {
                gameSettings.record = gameSettings.score;
                bestScore.innerHTML = 'BEST SCORE: ' + gameSettings.record;
            }
        }
    }, 1000);
}

function randomSquare() {
    let rnd;
    let numberRdn = [];

    let randomInterval = setInterval(() => {
        if (gameSettings.time > 0) {

            rnd = Math.floor(Math.random() * square.length);
            numberRdn.push(rnd);

            if (!square[rnd].classList.contains('active')) {
                square[rnd].classList.add('active');
            }
        } else {
            clearInterval(randomInterval);
        }
    }, 250);

    setTimeout(() => {
        let removeSquare = setInterval(() => {
            if (gameSettings.time > 0 && numberRdn.length > 0) {
                const indexRemove = numberRdn.shift();
                square[indexRemove].classList.remove('active');
            } else {
                clearInterval(removeSquare);
                numberRdn = [];
            }
        }, 1000);
    }, 500) 
}

startText.addEventListener('click', () => {
    timeStart();
})

restart.addEventListener('click', () => {
    location.reload();
})