const username = document.getElementById("name");
const password = document.getElementById("password");
const registerBtn = document.getElementById("registerBtn");

username.addEventListener("keyup", () => {
  registerBtn.disabled = !username.value || !password.value;
});

password.addEventListener("keyup", () => {
  registerBtn.disabled = !username.value || !password.value;
});

register = (e) => {
  e.preventDefault();

  fetch("api/controllers/user/create.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: username.value, password: password.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("success:", data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  window.location.assign("/quiz/login");
};
