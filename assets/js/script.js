
const startButton = document.querySelector("#start-button"); // targets start button

const questionContainerElement = document.getElementById("question-container"); // targets question container

var answerElementButtons = document.querySelector("#answer-btns") // targets answer buttons in html

var timer = document.querySelector(".time") // targets class of time in the html

var currentQuestionIndex = 0 // sets question index to 0


startButton.addEventListener("click", startGame); // event listener for start game button



function startGame() { //starts game
  startTimer()
  console.log("Game has started");
  startButton.classList.add("hide"); // adds the "hide" class to the "start-btn" ID to hide the element
  questionContainerElement.removeAttribute("class"); // removes the "hide" class to the "question-continer" ID to show the element // logs that the game has started in the console
  setNextQuestion()
}

function setNextQuestion() {
  showQuestion()
}

function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex]
  var questionTitle = document.getElementById("question")
  questionTitle.textContent = currentQuestion.question1
  // loop over question choices
  // hide old question choices
  // append buttons for each answer
  // add event listener click for choice
  // display selected choice on page


}

function startTimer() {
  var startTime = 3
  setInterval(function() {
  startTime--;
  if (startTime >= 0) {
    timer.textContent = startTime;
  } if (startTime === 0) {
    timer.textContent = "Game Over";
    clearInterval(startTime);
  }
  }, 1000);
}









// array of questions and answers
const questions = [
  {
    question1: "Do you like Dogs?",
    answers: [
      {text: "A", correct: true},
      {text: "B", correct: false},
      {text: "C", correct: false},
      {text: "D", correct: false},
    ]
  },
  {
    question1: "Do you like Dogs?",
    answers: [
      {text: "A", correct: true},
      {text: "B", correct: false},
      {text: "C", correct: false},
      {text: "D", correct: false},
    ]
  },
]