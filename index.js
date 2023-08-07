var readlineSync = require("readline-sync");
var score = 0;
// var userName = "";
function welcome() {
  var userName = readlineSync.question("Hi, What is Your name? ");
  console.log("Hello, " + userName + " Let's answer some question about Anupam-->");
  console.log();
}

function quiz(question, answer) {
  var userAns = readlineSync.question(question);
  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log("Yes You are right! Now Your score is updated to +1");
    score++;
  }
  else {
    console.log("Oops! You are Wrong! Now Your score is updated to +0");
  }
  console.log("----------------------------------------------------");
}

var knowledge = [{
  question: "Where Anupam live? ",
  answer: "Kolkata"
}, {
  question: "In which class Anupam studying? ",
  answer: "Graduation"
}, {
  question: "What is the age of Anupam? ",
  answer: "22"
}, {
  question: "What is Anupam's favourite sport? ",
  answer: "cricket"
}, {
  question: "In which college Anupam study ?  ",
  answer: "Sammilani Mahavidyalaya"
}];

welcome();

for (var i = 0; i < knowledge.length; i++) {
  quiz(knowledge[i].question, knowledge[i].answer);
}

console.log("Yeh! Now Your Final Score is " + score);