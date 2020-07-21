let token = JSON.parse(localStorage.getItem("token")) || "";

window.onload = function () {
  if (!token || token == "" || token=="undefined") {
    window.location.assign("/quiz/login");
  }
};

start = async (e) => {
  e.preventDefault();
  await validate("/quiz/start");
};

score = async (e) => {
  e.preventDefault();
  await validate("/quiz/score");
};

logout = (e) => {
  e.preventDefault();
  localStorage.clear();
  token = "";
  window.location.assign("/quiz/login");
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
    window.location.assign("/quiz/login");
  }
};
