const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("score");

const recentScore = localStorage.getItem("score");
// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const user = JSON.parse(localStorage.getItem("user")) || {};

finalScore.innerText += recentScore;
username.innerText += user.name;

// username.addEventListener('keyup', () => {
//     saveScoreBtn.disabled = !username.value;
// });

save = (e) => {
  e.preventDefault();

//   const score = {
//     score: recentScore,
//     name: user.name,
//   };
//   highScores.push(score);
//   highScores.sort((a, b) => b.score - a.score);
//   highScores.splice(5);

//   localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/quiz");
};
