const username = document.getElementById("name");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

username.addEventListener("keyup", () => {
  loginBtn.disabled = !username.value || !password.value;
});

password.addEventListener("keyup", () => {
  loginBtn.disabled = !username.value || !password.value;
});

login = (e) => {
  e.preventDefault();

  fetch("api/controllers/user/login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: username.value, password: password.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("success:", data);
      localStorage.setItem("token", JSON.stringify(data.jwt));
      window.location.assign("/quiz");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};
