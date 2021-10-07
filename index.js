var readlineSync = require("readline-sync");

var score=0;
var highScores = [
  {
    name: "Dhruva",
    score: 3,
  },

  {
    name: "Kanhaya",
    score: 2,
  },
]

var name = readlineSync.question("Whats your name? ");

console.log("Welcome to the this Anime Quiz "+name+"!!")

var questions = [{
  question:`What show is Naruto the MainCharacter of? 
  a: Naruto
  b: Sasuke
  c: Konoha
  d: Pokemon \n`,
  answer: "a"
} , {
  question:`Which Pokemon did Ash first recieve from Prof.Oak? 
  a: Squirtle
  b: Charmander
  c: Nodi-ji
  d: Pikachu \n`,
  answer:"d"
},{
  question:`What is the name of the book which has the power to Kill people?
  a: Maths Textbook
  b: Grimoire
  c: Death Note
  d: Advanced Thermodynamics \n`,
  answer:"c"
}];

function quiz(question,answer){
  var userAnswer=readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Correct!!")
    score = score+1;
    console.log("Your Score is: "+score);
    console.log("----------")
  }
  else {
    console.log("Wrong!!")
    score = score+0;
    console.log("Your Score is: "+score);
    console.log("----------")
  }
}

function game(){
  for(var i=0;i<questions.length;i++){
    var currentQuestion=questions[i];
    quiz(currentQuestion.question,currentQuestion.answer)
  }
}
function scores(){
  console.log("Your Score is: "+score);
  console.log("Check out the high scores, if you should be there Send a Screenshot to me and I'll update it ;)");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

game();
scores();
console.log("Thank you For Playing With us")