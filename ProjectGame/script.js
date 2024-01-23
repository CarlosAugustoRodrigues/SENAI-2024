var time = 10;
var timeStart = 3;
var score = 0;
var record;
const timer = document.querySelector('#timer');
const displayScore = document.querySelector('#score');
const gameBoard = document.querySelectorAll('.div-container');
const startText = document.querySelector('.start-text');
const containerGame = document.querySelector('.container-game');
const timeStartGame = document.querySelector('.time-start-game');


function game() {
    displayScore.innerHTML = score;
    timer.innerHTML = time;
    
    gameBoard.forEach((e) => {
        e.addEventListener('click', () => {
            if(e.classList.contains('active')) {
                score += 7;
                displayScore.innerHTML = score;
            } if(!e.classList.contains('active')) {
                score -= 3;
                displayScore.innerHTML = score;
            }
            e.classList.remove('active')
        })
    })

    setTimeout(() => {
        setInterval(() => {
            time--;
            timer.innerHTML = time;
        }, 1000)
    }, 500)
}

startText.addEventListener('click', () => {
    startText.style.display = 'none';
    timeStartGame.style.display = 'flex';

    setTimeout(() => {
        timeStartGame.innerHTML = timeStart;
        setInterval(() => {
            timeStart--
            timeStartGame.innerHTML = timeStart;

            if(timeStart == 0) {
                timeStartGame.innerHTML = 'GO';
            }
        }, 1000);
    }, 500);

    setTimeout(() => {
        timeStartGame.style.display = 'none'
        containerGame.style.display = 'flex';
        game();
    }, 4000)
})



