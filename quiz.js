const questions = [
    {
        question: `How do you write "Hello World" in an alert box?`,
        answers: [
            { text: `alertBox("Hello World");`, correct: false},
            { text: `msg("Hello World");`, correct: false},
            { text: `alert("Hello World");`, correct: true},
            { text: `msgBox("Hello World");`, correct: false}
        ]
    },
    {
        question: `How do you create a function in JavaScript?`,
        answers: [
            { text: `function = myFunction()`, correct: false},
            { text: `function myFunction()`, correct: true},
            { text: `create myFunction()`, correct: false},
            { text: `def myFunction()`, correct: false}
        ]
    },
    {
        question: `How do you call a function named "myFunction"?`,
        answers: [
            { text: `call function myFunction()`, correct: false},
            { text: `call myFunction()`, correct: false},
            { text: `myFunction()`, correct: true},
            { text: `Call.myFunction()`, correct: false}
        ]
    },
    {
        question: `How to write an IF statement in JavaScript?`,
        answers: [
            { text: `if i == 5 then`, correct: false},
            { text: `if i = 5`, correct: false},
            { text: `if i == 5 else`, correct: false},
            { text: `if (i == 5)`, correct: true}
        ]
    },
    {
        question: `How do you write an array in JavaScript?`,
        answers: [
            { text: `var fruits = "apple", "banana", "orange";`, correct: false},
            { text: `var fruits = ["apple", "banana", "orange"];`, correct: true},
            { text: `var fruits = (1: "apple", 2: "banana", 3: "orange");`, correct: false},
            { text: `var fruits = {"apple", "banana", "orange"}`, correct: false}
        ]  
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAswer(e){
    const selectedBtn = e.target; 
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true"
    });
    nextButton.style.display = "block"
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}
function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();

