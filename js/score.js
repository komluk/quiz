const userScores = document.getElementById("scores");

let user = JSON.parse(localStorage.getItem("user")) || {};
let token = JSON.parse(localStorage.getItem("token")) || "";
let scores = [];

window.onload = function () {
  if (!token || token == "") {
    window.location.assign("/quiz/login.html");
  } else init();
};

let init = () => {
  fetch("api/controllers/score/read.php?uid=" + user.id)
    .then((result) => {
      return result.json();
    })
    .then((response) => {
      userScores.innerHTML = response.data
        .map((s) => {
          return `<li class="high-score">${user.name} - ${s.score}</li>`;
        })
        .join("");
    })
    .catch((error) => {
      console.error(error);
    });
};
