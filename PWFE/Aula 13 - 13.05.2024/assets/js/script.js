const questionElement = document.querySelector('.question');
const answersElement = document.querySelector('.answers');
const spn_qts = document.querySelector('.spn-qts');
const text_finish = document.querySelector('.finish span');
const content = document.querySelector('.content');
const content_finish = document.querySelector('.finish');
const btn_restart = document.querySelector('.finish button');

import questions from './questions.js';


let current_index = 0;
let questionsCorrect = 0;

function loadQuestion() {
    spn_qts.innerHTML = `${current_index + 1} / ${questions.length}`;
    const item = questions[current_index];
    answersElement.innerHTML = '';
    questionElement.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement('div');

        div.innerHTML = `
            <button class="answer" data-correct="${answer.correct}">${answer.option}</button>
        `;
        answersElement.appendChild(div);
    });

    document.querySelectorAll('.answer').forEach((button) => {
        button.addEventListener('click', nextQuestion);
    });
}

loadQuestion();

function nextQuestion(e) {
    if (e.target.getAttribute('data-correct') === 'true') {
        questionsCorrect++;
    }
    if (current_index < questions.length - 1) {
        current_index++;
        loadQuestion();
    } else {
        finish();
    }
}

function finish() {
    text_finish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length} questões!`;
    content.style.display = 'none';
    content_finish.style.display = 'flex';
}


btn_restart.onclick = () => {
    content.style.display = 'flex';
    content_finish.style.display = 'none';
    current_index = 0;
    questionsCorrect = 0;
    loadQuestion();
};