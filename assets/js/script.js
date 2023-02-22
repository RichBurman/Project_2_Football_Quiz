//DOM //

let userName = document.getElementById('username');
let playButton = document.getElementById('play-btn');
let message = document.getElementById('message');
let mainContainer = document.getElementById('main-container');
let showQuestion = document.getElementById('question-area');

let userNameDisplay = document.getElementById('username-display');
let heroImage = document.getElementById('hero-outer');

let questionCount = document.getElementById('question-num');
const ansBtns = document.querySelectorAll(".answer-btn");

let option1 = document.getElementById('answer-1');
let option2 = document.getElementById('answer-2');
let option3 = document.getElementById('answer-3');
let option4 = document.getElementById('answer-4');
let nextBtn = document.getElementById('next-button');
let quizBtn = document.getElementById('quiz-end')
let endQuizBtn = document.getElementById('end-quiz-button')

console.log(document.getElementsByClassName("answer-btn"), "<===ans btn")


let currentQuestion = 0;
let questionNumber = 1;
let selectedAnswer;


//username //

let user = userName;
let messageBlank = "*** Please enter a valid name with no spaces or numbers ***";
let messageShort = "*** Name must be longer than 3 Characters ***";

function validation () {
   let characters = /^[A-Za-z]+$/;
   if (!user.value.match(characters)) {
    message.innerHTML = messageBlank;
    return false;
   } else if (user.value.length <= Number(3)) {
    message.innerHTML = messageShort;
    return false;
   } else if (user.value.length >= Number(3)) {
    startQuiz();
   }
}

playButton.onclick =() => {
    validation();
    }


function startQuiz () {
    userNameDisplay.classList.add('hidden');
    heroImage.classList.add('hidden');
    mainContainer.classList.remove('hidden');
    questionCount.innerText = questionNumber;

    getNewQuestion(displayQuestions[currentQuestion]);
}


function getNewQuestion (question) {
    showQuestion.innerText = question.question;
    option1.innerText = question.answers[0].answer;
    option2.innerText = question.answers[1].answer;
    option3.innerText = question.answers[2].answer;
    option4.innerText = question.answers[3].answer;

    option1.onclick = calculateCorrectAnswer;
    option2.onclick = calculateCorrectAnswer;
    option3.onclick = calculateCorrectAnswer;
    option4.onclick = calculateCorrectAnswer;
}

function enableButtons () {
    ansBtns.forEach(btn => {
        btn.disabled = false;
    })
}

function disableButtons () {
    ansBtns.forEach(btn => {
        btn.disabled = true;
    })
}

function calculateCorrectAnswer(event) {
   
    selectedAnswer = event.target;
    let userAnswer = selectedAnswer.innerText;
    let rightAnswer = displayQuestions[currentQuestion].correctAnswer;
    

    console.log('you selected', displayQuestions[currentQuestion]);
    if (userAnswer === rightAnswer) {
        getNewQuestion(displayQuestions[currentQuestion]);
        incrementScore();
        selectedAnswer.classList.add('correct-answer');
        disableButtons ();
    } else {
        getNewQuestion(displayQuestions[currentQuestion]);
        selectedAnswer.classList.add('wrong-answer');
        incrementWrongAnswer();
        disableButtons ();
    }

    startQuiz();
}

function next () {
    currentQuestion++;
    questionNumber++;
    enableButtons();
    if (currentQuestion <= '8') {
        questionCount.innerText = questionNumber;
        getNewQuestion(displayQuestions[currentQuestion]);
        count = 8;
    } else {
        quizBtn.classList.remove('hidden')
        showUsername();
    }
}

nextBtn.onclick =() => {
    next();
    removeColors();
};

function visitPage(){
    window.location='https://richburman.github.io/Project_2_Football_Quiz/';
}

function showUsername() {
    let name = document.getElementById("username").value;
    document.getElementById("usernameInput").innerHTML = "Hello " + name + " !";
  }

endQuizBtn.onclick =() => {
    visitPage();
};



// Remove colors//

function removeColors() {
    if (selectedAnswer) {
        selectedAnswer.classList.remove('correct-answer');
        selectedAnswer.classList.remove('wrong-answer');
    }
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

// Questions //

const displayQuestions = [ {
    question: "Which team plays in Manchester?",
    answers :[
        {answer: 'Chelsea'},
        {answer: 'Tottenham'},
        {answer: 'Manchester United'},
        {answer: 'Arsenal'},
    ],
    correctAnswer: "Manchester United",
    incorrectAnswers: ["Chelsea", "Tottenham", "Arsenal"]
},

{ 
    question: "What team plays in blue?",
    answers :[
    {answer: 'Chelsea'},
    {answer: 'Tottenham'},
    {answer: 'Manchester United'},
    {answer: 'Arsenal'},
],
    correctAnswer: "Chelsea",
    incorrectAnswers: ["Manchester United", "Tottenham", "Arsenal"]
},

{ 
    question: "What team plays in white?",
    answers :[
    {answer: 'Chelsea'},
    {answer: 'Tottenham'},
    {answer: 'Manchester United'},
    {answer: 'Arsenal'},
],
    correctAnswer: "Tottenham",
    incorrectAnswers: ["Chelsea", "Manchester United", "Arsenal"]
},

{ question: "Which team are nicknamed the Gunners?",
    answers :[
    {answer: 'Chelsea'},
    {answer: 'Tottenham'},
    {answer: 'Manchester United'},
    {answer: 'Arsenal'},
],
    correctAnswer: "Arsenal",
    incorrectAnswers: ["Chelsea", "Tottenham", "Manchester United"]
},

{ 
    question: "Which team plays at Anfield?",
    answers :[
    {answer: 'Liverpool'},
    {answer: 'Tottenham'},
    {answer: 'Manchester United'},
    {answer: 'Arsenal'},
],
    correctAnswer: "Liverpool",
    incorrectAnswers: ["Manchester United", "Tottenham", "Arsenal"]
},

{ question: "Which team plays in red and white?",
    answers :[
    {answer: 'Chelsea'},
    {answer: 'Tottenham'},
    {answer: 'Southampton'},
    {answer: 'Newcastle'},
],
    correctAnswer: "Southampton",
    incorrectAnswers: ["Chelsea", "Tottenham", "Newcastle"]
},

{ 
    question: "Which teams plays at Stamford Bridge?",
    answers :[
    {answer: 'Chelsea'},
    {answer: 'Tottenham'},
    {answer: 'Manchester United'},
    {answer: 'Arsenal'},
],
    correctAnswer: "Chelsea",
    incorrectAnswers: ["Manchester United", "Tottenham", "Arsenal"]
},

{ 
    question: "Which team isn't in the Premier League?",
    answers :[
    {answer: 'Margate'},
    {answer: 'Tottenham'},
    {answer: 'Manchester United'},
    {answer: 'Arsenal'},
],
    correctAnswer: "Margate",
    incorrectAnswers: ["Manchester United", "Tottenham", "Arsenal"]
},

{
    question: "Which team plays in blue?",
    answers :[
        {answer: 'Chelsea'},
        {answer: 'Tottenham'},
        {answer: 'Manchester United'},
        {answer: 'Arsenal'},
    ],
    correctAnswer: "Chelsea",
    incorrectAnswers: ["Manchester United", "Tottenham", "Arsenal"]
}];