//DOM //

let userName = document.getElementById('username');
let playButton = document.getElementById('play-btn');
let message = document.getElementById('message');
let mainContainer = document.getElementById('main-container');
let showQuestion = document.getElementById('question-area');

let userNameDisplay = document.getElementById('username-display')
let heroImage = document.getElementById('hero-outer');

let questionCount = document.getElementById('question-num')

let option1 = document.getElementById('answer-1');
let option2 = document.getElementById('answer-2');
let option3 = document.getElementById('answer-3');
let option4 = document.getElementById('answer-4');
let nextBtn = document.getElementById('next-button');

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
    questionCount.innerText = questionNumber;

    getNewQuestion(displayQuestions[currentQuestion]);
};


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

function calculateCorrectAnswer(event) {
    selectedAnswer = event.target;
    let userAnswer = selectedAnswer.innerText;
    let rightAnswer = displayQuestions[currentQuestion].correctAnswer;

    if (userAnswer === rightAnswer) {
        getNewQuestion(displayQuestions[currentQuestion])
        selectedAnswer.classList.add('correct-answer');
    } else {
        getNewQuestion(displayQuestions[currentQuestion])
        selectedAnswer.classList.add('wrong-answer');
    }

    startQuiz();
}

function next () {
    currentQuestion++;
    questionNumber++;
    if (currentQuestion <= '9') {
        questionCount.innerText = questionNumber;
    } else {

        return (currentQuestion);
    }

    getNewQuestion(displayQuestions[currentQuestion]);
    count = 10;
}

nextBtn.onclick =() => {
    next();
    removeColors();
    };

// Remove colors//

function removeColors() {
    if (selectedAnswer) {
        selectedAnswer.classList.remove('correct-answer');
        selectedAnswer.classList.remove('wrong-answer');
    }
}
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

{ question: "Pink",
answers :[
    {answer: 'Chelsea'},
    {answer: 'Tottenham'},
    {answer: 'Manchester United'},
    {answer: 'Arsenal'},
],
correctAnswer: "Manchester United"
},

{ question: "Yellow",
answers :[
    {answer: 'Chelsea'},
    {answer: 'Tottenham'},
    {answer: 'Manchester United'},
    {answer: 'Arsenal'},
],
correctAnswer: "Manchester United"
},

{ question: "Orange",
answers :[
    {answer: 'Chelsea'},
    {answer: 'Tottenham'},
    {answer: 'Manchester United'},
    {answer: 'Arsenal'},
],
correctAnswer: "Manchester United"
},

{ question: "Red",
answers :[
    {answer: 'Chelsea'},
    {answer: 'Tottenham'},
    {answer: 'Manchester United'},
    {answer: 'Arsenal'},
],
correctAnswer: "Manchester United"
},

{ question: "Black",
answers :[
    {answer: 'Chelsea'},
    {answer: 'Tottenham'},
    {answer: 'Manchester United'},
    {answer: 'Arsenal'},
],
correctAnswer: "Manchester United"
},

{ question: "Green",
answers :[
    {answer: 'Chelsea'},
    {answer: 'Tottenham'},
    {answer: 'Manchester United'},
    {answer: 'Arsenal'},
],
correctAnswer: "Manchester United"
},

{ question: "Red",
answers :[
    {answer: 'Chelsea'},
    {answer: 'Tottenham'},
    {answer: 'Manchester United'},
    {answer: 'Arsenal'},
],
correctAnswer: "Manchester United"
},

{
    question: "Blue",
    answers :[
        {answer: 'Chelsea'},
        {answer: 'Tottenham'},
        {answer: 'Manchester United'},
        {answer: 'Arsenal'},
    ],
    correctAnswer: "Manchester United"
}];

