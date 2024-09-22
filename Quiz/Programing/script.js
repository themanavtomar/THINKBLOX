const questions=[
    {
        questions: "Any C program",
        answers:[
            {text:"Must contain at least one function",correct: true},
            {text:"Need not contain any function",correct: false},
            {text:"Needs input data",correct: false},
            {text:"None of above",correct: false},
        ]
    },
    {
        questions: "In which of the following languages,the instructions are written in the form of 0s and 1s?",
        answers:[
            {text:"Assembly Language",correct: false},
            {text:"Programming Language",correct: false},
            {text:"High-Level Language",correct: false},
            {text:"Machine Language",correct: true},
        ]
    },
    {
        questions: "Which of these statements does not hold true for the operator ++ and --?",
        answers:[
            {text:"They are unary operators.",correct: false},
            {text:"The operand can come before or after the operator.",correct: false},
            {text:"They do not require variables as their operands.",correct: true},
            {text:"It can not be applied to an expression.",correct: false},
        ]
    },
    {
        questions: "Which of the following special symbol allowed in a variable name?",
        answers:[
            {text:"* (asterisk)",correct: false},
            {text:"| (pipeline)",correct: false},
            {text:"- (hyphen)",correct: false},
            {text:" _ (underscore)",correct: true},
        ]
    },
    {
        questions: "Which of the following correctly shows the hierarchy of Arithmetic Operator in C?",
        answers:[
            {text:"/ + * -",correct: false},
            {text:"/ * + -",correct: true},
            {text:"* - / +",correct: false},
            {text:"+ - / *",correct: false},
        ]
    }
];
const questionsElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

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
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNo + ". " + currentQuestion.
    questions;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild (button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });
}
function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild (answerButtons.firstChild);
    }
 }
 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionsElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display ="block";
    }
    function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
    showQuestion();
    }else{
    showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
}
)
startQuiz();