//CONSTANTS
const CORRECT_BONUS = 10;
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const quiz = document.getElementById("quiz");

let currentQuestion = {};
let acceptingAnswers = false;
let MAX_QUESTIONS = 0;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [];

fetch("api/controllers/question/read.php")
  .then((result) => {
    return result.json();
  })
  .then((response) => {
    questions = response.data.map((question) => {
      let q = {
        id: question.id,
        question: question.value,
        answers: [],
      };
      return q;
    });
    startGame();
  })
  .catch((error) => {
    console.error(error);
  });

let startGame = async () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  MAX_QUESTIONS = availableQuestions.length;
  await getNextQuestion();

  quiz.classList.remove("hidden");
  loader.classList.add("hidden");
};

let getAnswers = async (qid) => {
  let response = await fetch("api/controllers/answer/read.php?qid=" + qid);
  let result = await response.json();
  currentQuestion.answers = result.data.map((answer) => {
    let a = {
      id: answer.id,
      value: answer.value,
      correct: answer.correct,
    };
    return a;
  });
};

getNextQuestion = async () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/quiz/finish.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  await getAnswers(currentQuestion.id);

  question.innerHTML = currentQuestion.question;
  setTimeout(() => {
    choices.forEach((choice) => {
      const number = choice.dataset["number"] - 1;
      const answer = currentQuestion.answers[number].value;
      choice.innerHTML = answer;
    });
  }, 100);

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    const idx = selectedAnswer - 1;
    console.log("selected: ", selectedAnswer);

    const classToApply =
      currentQuestion.answers[idx].correct == true ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore();
      saveResult();
    }
    

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNextQuestion();
    }, 1000);
  });
});

saveResult = () => {

};

incrementScore = () => {
  score += CORRECT_BONUS;
  scoreText.innerText = score;
};
