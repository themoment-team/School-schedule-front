let isTrueClick = false;
const userId = document.querySelector('.id');
const userBtn = document.querySelector('button');
const userPw = document.querySelector('.pw');
const userName = document.querySelector('.name');
const userSchool = document.querySelector('.school');
const check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
let isSameID;
let isSignUp = false;

userBtn.style.backgroundColor = 'white';
function checkPassword() {
    if (!check.test(userPw.value)) {
        alert('비밀번호는 문자, 숫자, 특수문자의 조합으로 입력해주세요');
        location.reload();
        return false;
    }
    if (userPw.length < 8 || userPw.length > 16) {
        alert('비밀번호는 8 ~ 16 자리로 입력해주세요.');
        location.reload();
        return false;
    }
    return true;
}

function onClick() {
    if (userId.value.length > 0 && userPw.value.length > 0) {
        if (checkPassword() === false) {
            alert('비밀번호가 정규식에 맞지 않습니다');
            userBtn.disabled = true;
            location.reload();
            return;
        } else {
            isTrueClick = true;
            const uid = userId.value;
            const upw = userPw.value;
            let url = 'https://server.the-moment-schema.site/loginInfo';
            fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userid: uid,
                    password: upw,
                }),
            })
                .then((res) => {
                    return res.json();
                })
                .then((json) => {
                    console.log(json);
                    const status = json.status;
                    if (status === 404) {
                        userBtn.disabled = true;
                        alert('id나 password가 잘못되었습니다');
                        location.reload();
                    } else if (status === 200) {
                        sessionStorage.setItem('isLogin', true);
                        const sendID = userId.value;
                        localStorage.setItem('setUserID', sendID);
                        userBtn.style.backgroundColor = '#c5e9ff';
                        userBtn.style.color = 'black';
                        location = '../pages/main.html';
                        return;
                    }
                });
            userBtn.disabled = true;
        }
    } else {
        userBtn.disabled = true;
        location.reload();
    }
}

// userId.addEventListener('keyup', onClick);,,
// userPw.addEventListener('keyup', onClick);
userBtn.addEventListener('click', onClick);
// userBtn.addEventListener('click', onSubmitButton);/
const checkSameThing = (e) => {
    console.log(e.target.classList[1]);
    if (e.target.classList[1] == 'id') {
    } else if (e.target.classList[1] == 'pw') {
        const pwEventValue = e.target.value;
        return;
    }
};

// userBtn.addEventListener('click', signInBtn);
