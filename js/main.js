let token = JSON.parse(localStorage.getItem("token")) || "";

window.onload = function () {
  if (!token || token == "") {
    window.location.assign("/quiz/login.html");
  }
};

start = async (e) => {
  e.preventDefault();
  await validate("/quiz/quiz.html");
};

score = async (e) => {
  e.preventDefault();
  await validate("/quiz/score.html");
};

logout = (e) => {
  e.preventDefault();
  localStorage.clear();
  token = {};
  window.location.assign("/quiz/login.html");
};

let validate = async (url) => {
  if (token && token != "") {
    let response = await fetch("api/controllers/token/validate.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jwt: token }),
    });
    let result = await response.json();
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(result.data));
    window.location.assign(url);
  } else {
    window.location.assign("/quiz/login.html");
  }
};
