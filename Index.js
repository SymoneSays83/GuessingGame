let winningNum = Math.floor(Math.random() * 10) + 1;
const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("btnSubmit");
const resetBtn = document.getElementById("resetBtn");
const answerParagraph = document.getElementById("answer");
let counter = 1;
let points = 20;
let total = 0;

submitBtn.addEventListener("click", function(){
    let userResponse = userInput.value;
    if(counter < 4){
    if(userResponse == winningNum){
        total += points;
        answerParagraph.innerText = "You've Won!  Points awarded: " + points + "\nTotal points: " + total;
    }
    else if(userResponse == 0){
        answerParagraph.innerText = "You must guess a number between 1 and 10";
    }
    else if(userResponse == -1){
        answerParagraph.innerText = "You Lose!";
        counter = 4;
    }
    else if(userResponse > winningNum){
        answerParagraph.innerText = "Guess lower.";
    }
    else if(userResponse < winningNum){
        answerParagraph.innerText = "Guess higher.";
    }
    else{
        answerParagraph.innerText = "We're trying to do a thing";
    }
    counter++
    points /= 2;
    userInput.value = "";
}
else{
    answerParagraph.innerText = "Too many guesses. Game Over.\nTotal points: " + total;
}
});

resetBtn.addEventListener("click", function(){
    counter = 1;
    points = 20;
    userInput.value = "";
    winningNum = Math.floor(Math.random() * 10) + 1;
    answerParagraph.innerText = "";
});
