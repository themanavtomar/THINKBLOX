const questions=[
    {
        questions: "You ______ take poison ",
        answers:[
            {text:"should not",correct: false},
            {text:"must not",correct: true},
            {text:"Can't",correct: false},
            {text:"Should",correct: false},
        ]
    },
    {
        questions: "Choose the word which is most nearly the same in meaning of the word. EXQUISITE",
        answers:[
            {text:"Expensive",correct: false},
            {text:"Delicate",correct: false},
            {text:"Elaborate",correct: false},
            {text:"Wonderful",correct: true},
        ]
    },
    {
        questions: "Choose the word/group of words which is most opposite in meaning to above given word PLEASE",
        answers:[
            {text:"annoy",correct: true},
            {text:"wrong",correct: false},
            {text:"request",correct: false},
            {text:"satisfy",correct: false},
        ]
    },
    {
        questions: "Only the blood-stained road was a witness ___ his assassination.",
        answers:[
            {text:"to",correct: true},
            {text:"of",correct: false},
            {text:"at",correct: false},
            {text:"on",correct: false},
        ]
    },
    {
        questions: "There was no agreement ___ the great powers ___ a treaty to ban nuclear weapons.",
        answers:[
            {text:"with; about",correct: false},
            {text:"in; for",correct: false},
            {text:"among; on",correct: true},
            {text:"between; about",correct: false},
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