const questions=[
    {
        questions: "Brass gets discoloured in air because of the presence of which of the following gases in air?",
        answers:[
            {text:"Oxygen",correct: false},
            {text:"Carbon dioxide",correct: false},
            {text:"Nitrogen",correct: false},
            {text:"Hydrogen sulphide",correct: true},
        ]
    },
    {
        questions: "Yeast is a type of ____.",
        answers:[
            {text:"Plant",correct: false},
            {text:"Animal",correct: false},
            {text:"Fungus",correct: true},
            {text:"Bacterium",correct: false},
        ]
    },
    {
        questions: "The gas usually filled in the electric bulb is",
        answers:[
            {text:"nitrogen",correct: true},
            {text:"hydrogen",correct: false},
            {text:"carbon dioxide",correct: false},
            {text:"oxygen",correct: false},
        ]
    },
    {
        questions: "Which is the closest planet to the sun?",
        answers:[
            {text:"Mercury",correct: true},
            {text:"Venus",correct: false},
            {text:"Mars",correct: false},
            {text:"Earth",correct: false},
        ]
    },
    {
        questions: "The unit of which quantity is taken from Ohm's law?",
        answers:[
            {text:"electric current",correct: false},
            {text:"resistance",correct: true},
            {text:"of potential difference",correct: false},
            {text:"electric capacitance",correct: false},
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