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
const containerGameBoard = document.querySelector('.container')


function game() {
    displayScore.innerHTML = score;
    timer.innerHTML = time;
    
    gameBoard.forEach((e) => {
        e.addEventListener('click', () => { 
            if(e.classList.contains('active') && score >= 0) {
                score += 7;
                displayScore.innerHTML = score;
            } else if(!e.classList.contains('active') && score > 0) {
                score -= 3;
                displayScore.innerHTML = score;
            }
            e.classList.remove('active')
        })
    })

    setTimeout(() => {
        let TimeInterval = setInterval(() => {
            time--;
            timer.innerHTML = time;
            if (time <= 0){
                clearInterval(TimeInterval);
                containerGameBoard.setAttribute('style', 'pointer-events: none;');
                
            }
        }, 1000)
    }, 500)
}

startText.addEventListener('click', () => {
    startText.style.display = 'none';
    timeStartGame.style.display = 'flex';

    setTimeout(() => {
        timeStartGame.innerHTML = timeStart;
        let timeStartInterval = setInterval(() => {
            timeStart--
            timeStartGame.innerHTML = timeStart;

            if(timeStart == 0) {
                timeStartGame.innerHTML = 'GO!';
                clearInterval(timeStartInterval);
            }
        }, 1000);
    }, 500);

    setTimeout(() => {
        timeStartGame.style.display = 'none'
        containerGame.style.display = 'flex';
        game();
    }, 4000)
})



