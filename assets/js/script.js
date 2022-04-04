
const startButton = document.querySelector("#start-button"); // targets start button

const questionContainerElement = document.querySelector("#question-container"); // targets question container

const questionElement = document.querySelector("#question")

const answerElementButtons = document.querySelector("answer-btns")


startButton.addEventListener("click", startGame); // event listener for start game button



function startGame() { //starts game
  console.log("Game has started");
  startButton.classList.add("hide"); // adds the "hide" class to the "start-btn" ID to hide the element
  questionContainerElement.classList.remove("hide"); // removes the "hide" class to the "question-continer" ID to show the element // logs that the game has started in the console
  setNextQuestion()
};

function setNextQuestion() {

}










// array of questions and answers
const questions = [
  {
    question: "Question 1",
    answers: [
      {text: "A", correct: true },
      {text: "B", correct: false},
      {text: "C", correct: false},
      {text: "D", correct: false},
    ]
  }
]