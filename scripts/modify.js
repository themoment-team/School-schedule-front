const modifyBTNzz = document.getElementById('modifyBTN');
let uid = localStorage.getItem('setUserID');

const turnonClick = () => {
    const userName = document.getElementById('inputN1').value;
    const school = document.getElementById('inputN2').placeholder;
    const grade = document.getElementById('inputN3').value;
    const CLASS = document.getElementById('inputN4').value;
    const userIdTest = document.getElementById('inputN5').value;
    if (grade != 1 && grade != 2 && grade != 3) {
        const redP = document.getElementById('redP');
        redP.innerText = '잘못된 값을 입력했어요!';
        redP.style.color = 'red';
    } else {
        const redP = document.getElementById('redP');
        redP.innerText = '';
        localStorage.setItem('userName', userName);
        localStorage.setItem('school', school);
        localStorage.setItem('grade', grade);
        localStorage.setItem('CLASS', CLASS);
        localStorage.setItem('UserID', userIdTest);
        const in1 = (document.getElementById('in1').value = userName);
        const in2 = (document.getElementById('in2').placeholder = school);
        const in3 = (document.getElementById('in3').value = grade);
        const in4 = (document.getElementById('in4').value = CLASS);
        asyncTest(userName, grade, school, CLASS, userIdTest);
    }
};

function asyncTest(userName, grade, school, CLASS, userIdTest) {
    uid = localStorage.getItem('setUserID');
    if (userIdTest != uid) {
        alert('아이디가 다릅니다');
        return;
    } else {
        const userInfo = `${userName}`;
        const putGrade = `${grade}`;
        const putSchool = `${school}`;
        const putClass = `${CLASS}`;
        const putID = `${userIdTest}`;

        let url = 'https://server.the-moment-schema.site/modify';
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                class1: putClass,
                grade: putGrade,
                name: userInfo,
                school: putSchool,
                userid: putID,
            }),
        })
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                console.log(json);
            })
            .catch((err) => {
                console.log(err);
            });
        handleClicl();
    }
}

modifyBTN.addEventListener('click', () => {
    turnonClick();
    setTimeout(turnonClick, 200);
});

const schoolSearch = document.querySelector('.search');
const searchBtn = document.querySelector('.search_window');
const school = document.querySelector('.school');
const exit = document.querySelector('.exit');
function schoolData() {
    const schoolName = document.querySelector('#inputN2').value;
    const url = `https://open.neis.go.kr/hub/schoolInfo?KEY=50eecef7f1de425d8ad7fd3e8026d8ce&Type=json&pindex=1&pSize=100&SCHUL_NM=${schoolName}`;

    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            try {
                schoolSearch.disabled = false;
                const s = json.schoolInfo[1].row;
                const a = s.filter(function (s) {
                    return s.ORG_RDNMA;
                });
                const b = s.filter(function (s) {
                    return s.SCHUL_NM;
                });
                const title = document.createElement('h3');
                title.setAttribute('class', 'title');
                title.innerText = schoolName;
                searchBtn.appendChild(title);
                console.log(title);
                for (let i = 0; i < s.length; i++) {
                    console.log(a[i].ORG_RDNMA);
                    let List = document.createElement('button');
                    List.setAttribute('class', 'search_window_school');
                    List.setAttribute('id', i);
                    List.setAttribute('onClick', 'selectSchool(this.id)');
                    List.innerText = a[i].SCHUL_NM + '\n' + a[i].ORG_RDNMA;
                    searchBtn.appendChild(List);
                    let height = i * 70 + 300;
                    searchBtn.style.height = height + 'px';
                }
                searchBtn.style.flexDirection = 'column';
                searchBtn.style.display = 'flex';
                school.value = null;
                // schoolSearch.disabled = true;
                schoolSearch.style.cursor = 'default';
                // school.disabled = true;
            } catch (error) {
                alert('존재하지 않는 학교입니다');
                school.value = null;
                return;
            }
        });
}
let UserSchoolName;
function selectSchool(clicked_id) {
    const d = document.getElementById(clicked_id).innerText;
    const w = d.split('\n', 1);
    UserSchoolName = w;
    school.placeholder = w;
    searchBtn.style.display = 'none';
    if (
        userId.value.length > 0 &&
        userPw.value.length > 0 &&
        userName.value.length > 0
    ) {
        signupBtn.style.background = '#c5e9ff';
        signupBtn.style.color = 'black';
    }
}
function goBack() {
    searchBtn.style.flexDirection = 'column';
    searchBtn.style.display = 'none';
    school.value = null;
    schoolSearch.disabled = false;
    schoolSearch.style.cursor = 'pointer';
    school.disabled = false;
    schoolName = null;
    removeAllchild(searchBtn);
}
function removeAllchild(div) {
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
    searchBtn.appendChild(exit);
}
schoolSearch.addEventListener('click', schoolData);
