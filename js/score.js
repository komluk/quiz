const user = JSON.parse(localStorage.getItem("user")) || {};
let scores = [];

fetch("api/controllers/score/read.php?uid=" + user.id)
  .then((result) => {
    return result.json();
  })
  .then((response) => {
    scores = response.data.map((s) => {
      let score = {
        uid: s.user_id,
        score: s.score,
      };
      return score;
    });
  })
  .catch((error) => {
    console.error(error);
  });

highScoresList.innerHTML = scores
  .map((score) => {
    return `<li class="high-score">${user.name} - ${score.score}</li>`;
  })
  .join("");
