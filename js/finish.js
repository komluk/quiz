const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const user = JSON.parse(localStorage.getItem("user")) || {};

const MAX_HIGH_SCORES = 5;

finalScore.innerText = "score: " + mostRecentScore;
username.innerText = user.name;

// username.addEventListener('keyup', () => {
//     saveScoreBtn.disabled = !username.value;
// });

save = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/quiz");
};
