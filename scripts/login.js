const userId = document.querySelector('.id');
const userBtn = document.querySelector('button');
const userPw = document.querySelector('.pw');
const userName = document.querySelector('.name');
const userSchool = document.querySelector('.school');
let regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

function onClick() {
    if (userId.value.length > 0 && userPw.value.length > 0 && userName.value.length > 0 && userSchool.value.length) {
        userBtn.style.backgroundColor = '#3baff7';
        userBtn.style.color = 'black';
        userBtn.disabled = false;
    } else {
    }
}

userId.addEventListener('keyup', onClick);
userPw.addEventListener('keyup', onClick);
userName.addEventListener('keyup', onClick);
userSchool.addEventListener('keyup', onClick);
userBtn.addEventListener('click', onClick);