
const startButton = document.querySelector("#start-button"); // targets start button

const questionContainerElement = document.querySelector("#question-container"); // targets question container

var questionElement = document.querySelector("#question")

var answerElementButtons = document.querySelector("#answer-btns")

var timer = document.querySelector(".time")

var startTime = 3


startButton.addEventListener("click", startGame); // event listener for start game button



function startGame() { //starts game
  startTimer()
  console.log("Game has started");
  startButton.classList.add("hide"); // adds the "hide" class to the "start-btn" ID to hide the element
  questionContainerElement.classList.remove("hide"); // removes the "hide" class to the "question-continer" ID to show the element // logs that the game has started in the console
  setNextQuestion()
};

function setNextQuestion() {
  showQuestion()
}

function showQuestion() {
  questionElement.textContent = questions.question1
}

function startTimer() {
  setInterval(function() {
  startTime--;
  if (startTime < 3) {
    timer.textContent = startTime;
  } if (startTime === 0) {
    timer.textContent = "Game Over";
    clearInterval(startTimer);
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
  }
]