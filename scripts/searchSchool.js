const schoolSearch = document.querySelector(".search");
const searchBtn = document.querySelector(".search_window");
const school = document.querySelector(".school");
const signupBtn = document.querySelector(".signup");
const exit = document.querySelector(".exit");
const userId = document.querySelector('.id');
const userPw = document.querySelector('.pw');
const userName = document.querySelector('.name');
const check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
let schoolInfo;


function schoolData() {
    const schoolName = document.querySelector(".school").value;
    const url = `https://open.neis.go.kr/hub/schoolInfo?KEY=50eecef7f1de425d8ad7fd3e8026d8ce&Type=json&pindex=1&pSize=100&SCHUL_NM=${schoolName}`;

    fetch(url).then(response => response.json()).then(json => {
        console.log(json);
        try {
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
                List.innerText = a[i].SCHUL_NM + "\n" + a[i].ORG_RDNMA;
                searchBtn.appendChild(List);
                let height = i * 70 + 300;
                searchBtn.style.height = height + 'px';
            }
            searchBtn.style.flexDirection = "column";
            searchBtn.style.display = "flex";
            school.value = null;
            schoolSearch.disabled = true;
            schoolSearch.style.cursor = 'default';
            school.disabled = true;
        } catch (error) {
            alert("존재하지 않는 학교입니다");
            school.value = null;
            return;
        }
    });

}
function selectSchool(clicked_id) {
    const d = document.getElementById(clicked_id).innerText;
    const w = d.split('\n', 1);
    school.placeholder = w;
    searchBtn.style.display = "none";
    if (userId.value.length > 0 && userPw.value.length > 0 && userName.value.length > 0) {
        signupBtn.style.background = '#c5e9ff';
        signupBtn.style.color = 'black';
    }
}
function goBack() {
    searchBtn.style.flexDirection = "column";
    searchBtn.style.display = "none";
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
function Clicked() {
    const result = checkPassword();
    console.log("실행");
    if (userId.value.length > 0 && userPw.value.length > 0 && userName.value.length > 0) {
        if (result == true) {
            setTimeout(() => signupBtn.disabled = false, 3000);
        }//비밀번호가 정규식에 맞을때
        else {
            signupBtn.disabled = true;
        }
    } else {
        signupBtn.disabled = true;
        alert("입력되지 않은 칸이 있습니다");
    }
}
function checkPassword() {
    if (!check.test(userPw.value)) {
        alert("비밀번호는 문자, 숫자, 특수문자의 조합으로 입력해주세요");
        return false;
    }
    if (userPw.length < 8 || userPw.length > 16) {
        alert("비밀번호는 8 ~ 16 자리로 입력해주세요.");
        userPw.value = null;
        return false;
    }
    return true;
}
schoolSearch.addEventListener('click', schoolData);
signupBtn.addEventListener('click', Clicked);