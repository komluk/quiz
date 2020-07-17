const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("score");

const recentScore = localStorage.getItem("score");
const user = JSON.parse(localStorage.getItem("user")) || {};

finalScore.innerText += recentScore;
username.innerText += user.name;

save = (e) => {
  e.preventDefault();

  fetch("api/controllers/score/create.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: user.id, score: recentScore }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("success:", data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  window.location.assign("/quiz");
};
