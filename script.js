//A bunch of variables that i will be using//
var startScreen = document.querySelector(".startscreen");
var quiz = document.querySelector(".Quiz");
var button = document.querySelector(".button");
let time = document.querySelector("#time");
var quizTitle = document.querySelector(".quiz-title");
var quizChoices = document.querySelector(".quiz-choices");
var questions = [
  {
    questionTitle: "whats is used to make an arrey?",
    choices: ["()", "[]", "<>", "{}"],
    answer: "[]",
  },
  {
    questionTitle: "what element is used to make a paragraph?",
    choices: ["h1", "p", "ol", "a"],
    answer: "p",
  },
  {
    questionTitle: "what file type do you use in order to cascade a page?",
    choices: ["html", "js", "css", "md"],
    answer: "css",
  },
  {
    questionTitle: "what do we upload our assigments to?",
    choices: ["github", "githlab", "bootcampspot", "slacks"],
    answer: "bootcampspot",
  },
  {
    questionTitle: "what is our teachers name",
    choices: ["dan", "doreen", "ashley", "greg"],
    answer: "dan",
  },
];

let timer = 0;
var questionIndex = 0;

//this function should have my questions appear after  pressing the start button and create buttons with the answers for the question//
function showQuestions() {
  quizTitle.innerHTML = "";
  quizChoices.innerHTML = "";
  var h2 = document.createElement("h2");
  h2.textContent = questions[questionIndex].questionTitle;
  quizTitle.append(h2);
  for (
    var index = 0;
    index < questions[questionIndex].choices.length;
    index++
  ) {
    var buttonEl = document.createElement("button");
    buttonEl.textContent = questions[questionIndex].choices[index];
    quizChoices.append(buttonEl);
    buttonEl.addEventListener("click", checkAnswer);
  }
  if (buttonEl == questions[0].answer)
    return (h2.textContent = questions[1].questionTitle);
  setInterval(countDown, 1000);
}
function checkAnswer(event) {
  if (questions[questionIndex].answer == event.target.textContent) {
  }
  questionIndex++;
  console.log(event.target);
  if (questionIndex < questions.length) {
    showQuestions();
  }
}

//Attempt at adding a timer//
let countDown = () => {
  if (timer === 20) {
    clearInterval(interval);
    // next_question.click();
  } else {
    timer++;
    time.innerText = timer;
  }
};

//This function starts the quiz ny hiding the start screen and showing the actual quiz screen//
function startquiz() {
  quiz.classList.remove("hide");
  startScreen.classList.add("hide");
  showQuestions();
}

button.addEventListener("click", startquiz);
