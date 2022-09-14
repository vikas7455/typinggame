window.addEventListener('load', init)
//Global
//Available Levels
const Levels ={
    easy: 5,
    medium: 3,
    hard: 2
}
//To change level
const currentLevel = Levels.easy;

let time = 5;
let score = 0;
let isplaying;

//Dom Element

const wordInput = document.querySelector("#word-input")
const currentword = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const massage = document.querySelector("#massage")
const seconds = document.querySelector("#seconds") 



//Array of Words
const words = [
    'hello',
    'Durga',
    'kaali',
    'Mahadev',
    'Mahakaal',
    'Ganga',
    'Yamuna',
    'sarswati',
    'Shiv',
];

//Initialize Game

function init(){
    //Show number of second in UI
    seconds.innerHTML = currentLevel;
//Load word from array
showWord(words)
//Start matching on wordInput
wordInput.addEventListener('input',startmatch);
//Call countdown every second
setInterval(countdown, 2000)
//Check game status
setInterval(checkstatus, 50)
}
//Start match 
function startmatch(){
   if(matchwords()){
    isplaying = true;
    time = currentLevel+1;
    showWord(words);
    wordInput.value = '';
    score++;
   }
   //If score is -1 display 0
   if(score === -1){
    scoreDisplay.innerHTML = 0;
   }else{
   scoreDisplay.innerHTML = score;
    }
   }
   //Match currentword to wordInput
   function matchwords(){
    if(wordInput.value === currentword.innerHTML){
        message.innerHTML = 'Correct!!!'
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
   }

//Pick & show random word
function showWord(words){
//Generate random array index
const randIndex = Math.floor(Math.random()*words.length);
//Output random word
currentword.innerHTML = words[randIndex];


}

//countdown timer
function countdown() {
    //make sure time is not run out
    if(time > 0){
        //documennt
        time--;
    }
else if(time === 0){
//Game is over
isplaying = false;
}
//Show time
timeDisplay.innerHTML = time;

}

//Check game status
function checkstatus(){
    if(isplaying && time === 0){
        massage.innerHTML ='Game Over!!!'
        score = -1;
    }
}