const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("score");
const recentScore = localStorage.getItem("score");

let user = JSON.parse(localStorage.getItem("user")) || {};
let token = JSON.parse(localStorage.getItem("token")) || "";

finalScore.innerText += recentScore;
username.innerText += user.name;

window.onload = function () {
  if (!token || token == "" || token == "undefined") {
    window.location.assign("/quiz/login");
  }
};

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
