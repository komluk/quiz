const user = JSON.parse(localStorage.getItem("user")) || {};

fetch = () => {
  
};

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
