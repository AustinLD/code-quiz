
const startButton = document.querySelector("#start-button"); // targets start button

const questionContainerElement = document.getElementById("question-container"); // targets question container

var answerElementButtons = document.querySelector("#answer-btns") // targets answer buttons container in html

var timer = document.querySelector(".time") // targets class of time in the html

var currentQuestionIndex = 0 // sets question index to 0
 // sets score equal to timer

var startTime = 60

var scoreCard = document.querySelector("#scoreCard")


var finalScore = document.getElementById("final-score")


// const answerButtons = document.querySelector(".btn")// targets answers buttons
document.querySelector("#btn1").addEventListener("click", setNextQuestion)
document.querySelector("#btn2").addEventListener("click", setNextQuestion)
document.querySelector("#btn3").addEventListener("click", setNextQuestion)
document.querySelector("#btn4").addEventListener("click", setNextQuestion)



// answerButtons.addEventListener("click", setNextQuestion);
 // event listener for answer buttons
startButton.addEventListener("click", startGame); // event listener for start game button

function startGame() { //starts game
  startTimer()
  console.log("Game has started");
  startButton.classList.add("hide"); // adds the "hide" class to the "start-btn" ID to hide the element
  questionContainerElement.removeAttribute("class");
  $("#answer-btns").children().removeClass("hide"); 
  showQuestion()
  showAnswer()
  setNextQuestion() 
}




function setNextQuestion() {
  console.log(this.value)
  if(this.value == "true") {
    currentQuestionIndex++;
    console.log(currentQuestionIndex)
    showQuestion()
    showAnswer()
  } else {
    startTime -= 5 
  }
}

function EndGame() {
localStorage.setItem("final time", JSON.stringify(startTime));
var score = JSON.parse(localStorage.getItem("final time"));
scoreCard.removeAttribute("class");
finalScore.innerHTML = score;
clearInterval(startTimer);
}





function showQuestion() {
  if(currentQuestionIndex == 5) {
    EndGame()
  } else {
  var currentQuestion = questions[currentQuestionIndex]
  var questionTitle = document.getElementById("question")
  questionTitle.textContent = currentQuestion.prompt
  }
}





function showAnswer() {
var currentQuestion = questions[currentQuestionIndex]
var availableAnswer1 = document.querySelector("#btn1")
var availableAnswer2 = document.querySelector("#btn2")
var availableAnswer3 = document.querySelector("#btn3")
var availableAnswer4 = document.querySelector("#btn4")
availableAnswer1.textContent = currentQuestion.answers[0].text1
availableAnswer1.value = currentQuestion.answers[0].correct
availableAnswer2.textContent = currentQuestion.answers[1].text2
availableAnswer2.value = currentQuestion.answers[1].correct
availableAnswer3.textContent = currentQuestion.answers[2].text3
availableAnswer3.value = currentQuestion.answers[2].correct
availableAnswer4.textContent = currentQuestion.answers[3].text4
availableAnswer4.value = currentQuestion.answers[3].correct
console.log(currentQuestion.answers)
}






function startTimer() {
  setInterval(function() {
  startTime--;
  if (startTime >= 0) {
    timer.textContent = startTime;
  } if (startTime === 0) {
    timer.textContent = "Game Over"
    EndGame();
    clearInterval(startTime);
  }
  }, 1000);
}










// array of questions and answers
var questions = [
  {
    prompt: "In 1768, Captain James Cook set out to explore which ocean?",
    answers: [
      {text1: "Pacific Ocean", correct: true},
      {text2: "Atlantic Ocean", correct: false},
      {text3: "Indian Ocean", correct: false},
      {text4: "Arctic Ocean", correct: false}
    ]
  },
  {
    prompt: "Which of the following is not an international organisation?",
    answers: [
      {text1: "FIFA", correct: false},
      {text2: "NATO", correct: false},
      {text3: "ASEAN", correct: false},
      {text4: "FBI", correct: true},
    ]
  },
  {
    prompt: "What is the speed of sound?",
    answers: [
      {text1: "120 km/h", correct: false},
      {text2: "1,200 km/h", correct: true},
      {text3: "400 km/h", correct: false},
      {text4: "700 km/h", correct: false},
    ]
  },
  {
    prompt: "What is the main component of the sun?",
    answers: [
      {text1: "Liquid lava", correct: false},
      {text2: "Gas", correct: true},
      {text3: "Molten iron", correct: false},
      {text4: "Rock", correct: false},
    ]
  },
  {
    prompt: "How many time zones are there in total in the world?",
    answers: [
      {text1: "8", correct: false},
      {text2: "16", correct: false},
      {text3: "24", correct: true},
      {text4: "32", correct: false},
    ]
  },
]
