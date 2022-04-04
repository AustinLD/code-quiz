
const startButton = document.querySelector("#start-button"); // targets start button

const questionContainerElement = document.getElementById("question-container"); // targets question container

 var answerElementButtons = document.querySelector("#answer-btns") // targets answer buttons container in html

var timer = document.querySelector(".time") // targets class of time in the html

var currentQuestionIndex = 0 // sets question index to 0


const answerButtons = document.querySelector(".btn") // targets answers buttons


answerButtons.addEventListener("click", );
startButton.addEventListener("click", startGame); // event listener for start game button



function startGame() { //starts game
  startTimer()
  console.log("Game has started");
  startButton.classList.add("hide"); // adds the "hide" class to the "start-btn" ID to hide the element
  questionContainerElement.removeAttribute("class");
  $("#answer-btns").children().removeClass("hide");
  setNextQuestion()
}




function setNextQuestion() {
  showQuestion()
  showAnswer()

}





function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex]
  var questionTitle = document.getElementById("question")
  questionTitle.textContent = currentQuestion.prompt
  // loop over question choices
  // hide old question choices
  // add event listener click for choice


}






function showAnswer() {
var currentQuestion = questions[currentQuestionIndex]
var availableAnswer1 = document.querySelector(".btn1")
var availableAnswer2 = document.querySelector(".btn2")
var availableAnswer3 = document.querySelector(".btn3")
var availableAnswer4 = document.querySelector(".btn4")
availableAnswer1.textContent = currentQuestion.answers[0].text1
availableAnswer2.textContent = currentQuestion.answers[1].text2
availableAnswer3.textContent = currentQuestion.answers[2].text3
availableAnswer4.textContent = currentQuestion.answers[3].text4


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


function endQuiz() {


}






// array of questions and answers
const questions = [
  {
    prompt: "Do you like Dogs?",
    answers: [
      {text1: "A", correct: true},
      {text2: "B", correct: false},
      {text3: "C", correct: false},
      {text4: "D", correct: false},
    ]
  },
  {
    prompt: "Do you like Dogs?",
    answers: [
      {text1: "A", correct: true},
      {text2: "B", correct: false},
      {text3: "C", correct: false},
      {text4: "D", correct: false},
    ]
  },
]
