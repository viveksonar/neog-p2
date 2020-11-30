var readlineSync = require("readline-sync");
const chalk = require('chalk');
var score = 0
var userName = readlineSync.question("Whats your name?: ");

console.log("Welcome " + userName + ", Get ready for the quize\n")

//play function
function play(question,options, answer){
  console.log(chalk.rgb(125, 68, 240)(question))
  console.log(chalk.rgb(0, 0, 255)(options,"\n"))
  var userAnswer = readlineSync.question(chalk.rgb(255, 118, 0)("Enter Answer number here: "));
  if(userAnswer === answer){
    console.log(chalk.green("right!!!"))
    score = score + 1
  }else{
    console.log(chalk.red("Wrong!!!"))
  }
  console.log(chalk.rgb(108, 247, 231)("Your current score is:",score))
  console.log("--------------\n")
}
var questions = [{
  question: "Inside which HTML element do we put the JavaScript? ",
  options:"1. <script> \n2. <javascript> \n3. <js> \n4. <scripting> ",
  answer: "1"
  },
  {
  question: "What is the correct syntax for referring to an external script called xxx.js? ",
  options: "1. <script src='xxx.js'> \n2. <script href='xxx.js'> \n3. <script name='xxx.js'>, \n4. <script source='xxx.js'>",
  answer: "1"
  },
  {
  question: 'How do you write "Hello World" in an alert box? ',
  options: '1. msg("Hello World");\n2. alert("Hello World")\n3. Correct answer  alertBox("Hello World");\n4. msgBox("Hello World");',
  answer: "2"
  },
  {
  question: "How do you create a function in JavaScript? ",
  options: "1. function = myFunction()\n2. function:myFunction()\n3. function myFunction()\n4. function.myFunction() ",
  answer: "3"
  },
  {
  question: 'How do you call a function named "myFunction"? ',
  options: "1. call myFunction()\n2. call function myFunction()\n3. myFunction()\n4. function call myFunction()",
  answer: "3"
  },
  {
  question: "How to write an IF statement in JavaScript? ",
  options: "1. if i = 5\n2. if i == 5 then\n3. if (i == 5)\n4. if i = 5 then",
  answer: "3"
  },
  {
  question: "How does a FOR loop start? ",
  options: "1. for (i = 0; i <= 5; i++)\n2. for (i <= 5; i++)\n3. for (i = 0; i <= 5)\n4. for i = 1 to 5",
  answer: "1"
  },
  {
  question: "How can you add a comment in a JavaScript? ",
  options: "1. <!--This is a comment-->\n2. 'This is a comment\n3. //This is a comment\n 4. ||This is a comment",
  answer: "3"
  },
  {
  question: "What is the correct way to write a JavaScript array? ",
  options: '1. var colors = ["red", "green", "blue"]\n2. var colors = "red", "green", "blue"\n3. var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")\n4. var colors = (1:"red", 2:"green", 3:"blue")',
  answer: "1"
  },
  {
  question: "The external JavaScript file must contain the <script> tag. ",
  options: "1. True \n2. False ",
  answer: "2"
  }];

  var highScore = [
    {
      name: "Vivek",
      score: "10"
    },
    {
      name: "Adrash",
      score: "09"
    }
  ]
  
//Loop
for (var i=0; i<questions.length; i++){
  currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.options, currentQuestion.answer);
}

console.log("YAY! You SCORED: ", score);
console.log("Chckout the highscores")

for(var i = 0; i<highScore.length; i++){
  currentPerson = highScore[i]
  console.log(currentPerson.name + " scored " + currentPerson.score + " points")
}