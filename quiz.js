const quizForm = document.querySelector('.quizForm');
const quizBtn = document.querySelector('#quizBtn');
const output = document.querySelector('#outputText');

const correctAnswer = ["90°","Right Angled","Equilateral","30°","Obtuse","a + b + c"];


function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswer[index]){
        score = score+1;
        }
        index = index+1;
    }
    outputText.innerText ="Your score is "+score 

}

quizBtn.addEventListener("click",calculateScore);