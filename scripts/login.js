const userId = document.querySelector('.id');
const userBtn = document.querySelector('button');
const userPw = document.querySelector('.pw');
const userName = document.querySelector('.name');
const userSchool = document.querySelector('.school');

const check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

userBtn.style.backgroundColor = "white";
function checkPassword() {
    if (!check.test(userPw.value)) {
        alert("비밀번호는 문자, 숫자, 특수문자의 조합으로 입력해주세요");
        location.reload();
        return false;
    }
    if (userPw.length < 8 || userPw.length > 16) {
        alert("비밀번호는 8 ~ 16 자리로 입력해주세요.");
        location.reload();
        return false;
    }
    return true;
}

function onClick() {
    if (userId.value.length > 0 && userPw.value.length > 0) {
        if(checkPassword() === false){
            alert("비밀번호가 정규식에 맞지 않습니다");
            userBtn.disabled = true;
            window.location.reload();
            return;
        }else{
            sendID = userId.value.substring;
            localStorage.setItem("userID", sendID);
            userBtn.style.backgroundColor = '#c5e9ff';
            userBtn.style.color = 'black';
            sessionStorage.setItem("isLogin", true);
        }
    } else {
        userBtn.disabled = true;
        location.reload();
    }
}

// userId.addEventListener('keyup', onClick);
// userPw.addEventListener('keyup', onClick);
userBtn.addEventListener('click', onClick);