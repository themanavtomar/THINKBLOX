const questions=[
    {
        questions: "Which is largest animal in the world?",
        answers:[
            {text:"Shark",correct: false},
            {text:"Blue Whale",correct: true},
            {text:"Elephant",correct: false},
            {text:"Giraffe",correct: false},
        ]
    },
    {
        questions: "Which is the biggest continent in the world?",
        answers:[
            {text:"Asia",correct: true},
            {text:"North America",correct: false},
            {text:"Africa",correct: false},
            {text:"Australia",correct: false},
        ]
    },
    {
        questions: "What is the maximum number of Members in Lok Sabha?",
        answers:[
            {text:"512",correct: false},
            {text:"542",correct: false},
            {text:"552",correct: true},
            {text:"532",correct: false},
        ]
    },
    {
        questions: " Which of the following is known as the Diamond City of India?",
        answers:[
            {text:"Mumbai",correct: false},
            {text:"Jaipur",correct: false},
            {text:"Surat",correct: false},
            {text:"Panna",correct: true},
        ]
    },
    {
        questions: " In which year Forest Conservation Act was passed?",
        answers:[
            {text:"1980",correct: true},
            {text:"1988",correct: false},
            {text:"1986",correct: false},
            {text:"1990",correct: false},
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