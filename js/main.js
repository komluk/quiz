const token = JSON.parse(localStorage.getItem("token"));

start = (e) => {
  e.preventDefault();

  if (token) {
    fetch("api/controllers/token/validate.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jwt: token }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success:", data);

        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(data.data));

        window.location.assign("/quiz/quiz.html");
      })
      .catch((error) => {
        window.location.assign("/quiz/login.html");
        console.log("Error:", error);
      });
  } else {
    window.location.assign("/quiz/login.html");
  }
};
