
const questions = [
    {
        question: 'Quanto é 1 + 2?',
        answers: [
            {option: '3', correct: true},
            {option: '4', correct: false},
            {option: '2', correct: false},
            {option: '4', correct: false}
        ],
    },
    {
        question: 'Quanto é 5 x 2?',
        answers: [
            {option: '5', correct: false},
            {option: '10', correct: true},
            {option: '7', correct: false},
            {option: '3,14', correct: false}
        ],
    },
    {
        question: 'Qual a hipotenusa de um triângulo retângulo com as medidas dos catetos sendo 4cm e 3cm?',
        answers: [
            {option: '0cm', correct: false},
            {option: '7cm', correct: false},
            {option: '5cm', correct: true},
            {option: '2cm', correct: false}
        ],
    }
];

export default questions;
