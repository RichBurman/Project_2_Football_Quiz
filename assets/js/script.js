//DOM //

let userName = document.getElementById('username');
let playButton = document.getElementById('play-btn');
let message = document.getElementById('message');
let mainContainer = document.getElementById('main-container');
let showQuestion = document.getElementById('question-area');

let option1 = document.getElementById('answer-1');
let option2 = document.getElementById('answer-2');
let option3 = document.getElementById('answer-3');
let option4 = document.getElementById('answer-4');

let currentQuestion = 0;
let questionNumber = 1;
let selectedAnswer;


//username //

let user = userName;
let messageBlank = "*** Please enter a name***";

function validation () {
   var a = user.value;
   if (a =="") {
    message.innerHTML = messageBlank;
    return false
   }
};

playButton.onclick =() => {
    validation();
};

// Questions //

const quizQuestions = [{
    question:"What football club plays at Old Trafford?",
    answers: [
        {option: "Manchester United"},
        {option: "Liverpool"},
        {option: "Chelsea"},
        {option: "Arsenal"},
    ],
    correctAnswer: "Manchester United"
},
{
    question:"What football club does Neymar play for?",
    answers: [
        {option: "PSG"},
        {option: "Liverpool"},
        {option: "Chelsea"},
        {option: "Arsenal"},
    ],
    correctAnswer: "PSG"
}];
