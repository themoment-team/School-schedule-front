const userId = document.querySelector('.id');
const userBtn = document.querySelector('button');
const userPw = document.querySelector('.pw');
const userName = document.querySelector('.name');
const userSchool = document.querySelector('.school');
const check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
function onClick() {
    if (userId.value.length > 0 && userPw.value.length > 0 && userName.value.length > 0 && userSchool.value.length) {
        userBtn.style.backgroundColor = '#c5e9ff';
        userBtn.style.color = 'black';
        userBtn.disabled = false;
    } else {
    }
}

function onBtnClick() {
    const result = checkPassword();
    if (result == true) {
        userBtn.disabled = false;;
    } else {
        userBtn.disabled = true;
    }
}
//비밀번호는 문자, 숫자, 특수문자의 조합으로 입력해주세요

function checkPassword() {
    if (!check.test(userPw.value)) {
        alert("비밀번호는 문자, 숫자, 특수문자의 조합으로 입력해주세요");
        return false;
    }
    if (userPw.length < 8 || userPw.length > 16) {
        alert("비밀번호는 8 ~ 16 자리로 입력해주세요.");
        return false;
    }
    return true;
}

userId.addEventListener('keyup', onClick);
userPw.addEventListener('keyup', onClick);
userName.addEventListener('keyup', onClick);
userSchool.addEventListener('keyup', onClick);
userBtn.addEventListener('click', onBtnClick);
