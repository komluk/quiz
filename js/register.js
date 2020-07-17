const username = document.getElementById('name');
const password = document.getElementById('password');
const registerBtn = document.getElementById('registerBtn');

username.addEventListener('keyup', () => {
    registerBtn.disabled = !username.value || !password.value;
});

password.addEventListener('keyup', () => {
    registerBtn.disabled = !username.value || !password.value;
});

register = (e) => {
    e.preventDefault();
    alert('Register!');    

    window.location.assign('/quiz/login.html');
}