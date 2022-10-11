const userId = document.querySelector('.id');
const userBtn = document.querySelector('button');
const userPw = document.querySelector('.pw');
const userName = document.querySelector('.name');
const userSchool = document.querySelector('.school');
let regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

function onClick() {
    if (userId.value.length > 0 && userPw.value.length > 0) {
        userBtn.style.backgroundColor = '#c5e9ff';
        userBtn.style.color = 'black';
        userBtn.disabled = false;
    } else {
    }
}

userId.addEventListener('keyup', onClick);
userPw.addEventListener('keyup', onClick);
userBtn.addEventListener('click', onClick);