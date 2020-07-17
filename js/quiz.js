//CONSTANTS
const CORRECT_BONUS = 10;
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const quiz = document.getElementById("quiz");
const user = JSON.parse(localStorage.getItem("user")) || {};

let currentQuestion = {};
let acceptingAnswers = false;
let MAX_QUESTIONS = 0;
let score = 0;
let questionCounter = 0;
let questions = [];

fetch("api/controllers/question/read.php")
  .then((result) => {
    return result.json();
  })
  .then((response) => {
    questions = response.data.map((q) => {
      let question = {
        id: q.id,
        question: q.value,
        answers: [],
      };
      return question;
    });
    startGame();
  })
  .catch((error) => {
    console.error(error);
  });

let startGame = async () => {
  questionCounter = 0;
  score = 0;
  MAX_QUESTIONS = questions.length;
  await getNextQuestion();

  quiz.classList.remove("hidden");
  loader.classList.add("hidden");
};

let getAnswers = async (qid) => {
  let response = await fetch("api/controllers/answer/read.php?qid=" + qid);
  let result = await response.json();
  currentQuestion.answers = result.data.map((a) => {
    let answer = {
      id: a.id,
      value: a.value,
      correct: a.correct,
      points: a.points,
    };
    return answer;
  });
};

getNextQuestion = async () => {
  if (questions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("score", score);
    return window.location.assign("/quiz/finish.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[questionIndex];
  await getAnswers(currentQuestion.id);

  question.innerHTML = currentQuestion.question;
  setTimeout(() => {
    choices.forEach((choice) => {
      const number = choice.dataset["number"] - 1;
      const answer = currentQuestion.answers[number].value;
      choice.innerHTML = answer;
    });
  }, 100);

  questions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    const idx = selectedAnswer - 1;
    const answer = currentQuestion.answers[idx];
    console.log(answer);

    const classToApply = answer.correct == true ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(answer.points);
      saveResult(user.id, currentQuestion.id, answer.id);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNextQuestion();
    }, 1000);
  });
});

saveResult = (uid, qid, aid) => {
  fetch("api/controllers/result/create.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: uid,
      question: qid,
      answer: aid,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("success:", data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

incrementScore = (points) => {
  score += points;
  scoreText.innerText = score;
};
