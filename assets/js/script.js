//DOM //

let userName = document.getElementById('username');
let playButton = document.getElementById('play-btn');
let message = document.getElementById('message');
let mainContainer = document.getElementById('main-container');
let showQuestion = document.getElementById('question-area');

let userNameDisplay = document.getElementById('username-display')
let heroImage = document.getElementById('hero-outer');

let option1 = document.getElementById('answer-1');
let option2 = document.getElementById('answer-2');
let option3 = document.getElementById('answer-3');
let option4 = document.getElementById('answer-4');

let currentQuestion = 0;
let questionNumber = 1;
let selectedAnswer;


//username //

let user = userName;
let messageBlank = "*** Please enter a valid name with no spaces or numbers ***";
let messageShort = "*** Name must be longer than 3 Characters ***"

function validation () {
   let characters = /^[A-Za-z]+$/;
   if (!user.value.match(characters)) {
    message.innerHTML = messageBlank;
    return false
   } else if (user.value.length <= Number(3)) {
    message.innerHTML = messageShort;
    return false
   } else if (user.value.length >= Number(3)) {
    startQuiz();
   }
};

playButton.onclick =() => {
    validation();
};


function startQuiz () {
    userNameDisplay.classList.add('hidden');
    heroImage.classList.add('hidden');
    mainContainer.classList.remove('hidden');
};

// Questions //

const displayQuestions = [ {
    question: "Which team plays in Manchester",
    answers :[
        {answer: 'Chelsea'},
        {answer: 'Tottenham'},
        {answer: 'Manchester United'},
        {answer: 'Arsenal'},
    ],
    correctAnswer: "Manchester United"
},
{
    question: "Which team plays in Manchester",
    answers :[
        {answer: 'Chelsea'},
        {answer: 'Tottenham'},
        {answer: 'Manchester United'},
        {answer: 'Arsenal'},
    ],
    correctAnswer: "Manchester United"
}];

