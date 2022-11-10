let today = new Date();
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1; // 월
let date = today.getDate(); // 날짜
let YMD = `${year}${month}${date}`;
const size = 2;
let schoolCode;
let educationBlue;
// 20221023
// const YMDD = document.getElementById("YMD");
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const subject__title = document.querySelector('.subject__title');
const handleClicl = () => {
    let userName;
    let userSchool;
    let userGrade;
    let userClass;
    const dd = localStorage.getItem('setUserID');
    let URL = 'https://server.the-moment-schema.site/memberInfo';
    fetch(URL, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userid: dd,
        }),
    })
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            console.log(dd);
            console.log(json);
            userName = json.name;
            userSchool = json.school;
            userGrade = json.grade;
            userClass = json.class1;
            document.querySelector(`#in1`).value = userName;
            document.querySelector(`#in2`).value = userSchool;
            document.querySelector(`#in3`).value = userGrade;
            document.querySelector(`#in4`).value = userClass;
        });
    date = `${date}`;
    date = date.padStart(2, '0');
    YMD = `${year}${month}${date}`;
    subject__title.innerText = YMD;
    const setUserID = localStorage.getItem('setUserID');
    let url = 'https://server.the-moment-schema.site/memberInfo';
    fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userid: setUserID,
        }),
    })
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            console.log(setUserID);
            console.log(json);
            const userInfo = json;
            const class1 = userInfo.class1;
            const grade1 = userInfo.grade;
            const school1 = userInfo.school;
            console.log(school1);
            const url = `https://open.neis.go.kr/hub/schoolInfo?KEY=50eecef7f1de425d8ad7fd3e8026d8ce&Type=json&pindex=1&pSize=100&SCHUL_NM=${school1}`;
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    schoolCode = json.schoolInfo[1].row[0].SD_SCHUL_CODE;
                    educationBlue =
                        json.schoolInfo[1].row[0].ATPT_OFCDC_SC_CODE;
                    console.log(educationBlue, schoolCode, YMD);
                    fetch(
                        `https://open.neis.go.kr/hub/hisTimetable?KEY=a810dd9ec8c04e57b5ecc4d4ff4e400e&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=${educationBlue}&SD_SCHUL_CODE=${schoolCode}&AY=2022&SEM=2&ALL_TI_YMD=${YMD}&GRADE=${grade1}&CLASS_NM=${class1}`
                    )
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json);
                            for (let i = 0; i < 7; i++) {
                                const inner = document.getElementById(`${i}`);
                                try {
                                    if (
                                        json.hisTimetable[1].row[i].ITRT_CNTNT
                                            .length >= 9
                                    ) {
                                        inner.innerText = `${i + 1}교시 ${
                                            json.hisTimetable[1].row[i]
                                                .ITRT_CNTNT
                                        }`;
                                    } else {
                                        inner.innerText = `${i + 1}교시 ${
                                            json.hisTimetable[1].row[i]
                                                .ITRT_CNTNT
                                        }`;
                                    }
                                } catch {
                                    inner.innerText = `${
                                        i + 1
                                    }교시 데이터값 없음`;
                                }
                            }
                        });
                });
        });
};
function YMDPlus() {
    if (
        // 31일
        month == 1 ||
        month == 8 ||
        month == 3 ||
        month == 5 ||
        month == 7 ||
        month == 10 ||
        month == 12
    ) {
        if (date == 31) {
            if (month == 12) {
                month = 0;
                year++;
            }
            month++;
            date = 1;
            //console.log(month);
            //console.log(YMD);
            handleClicl();
            return;
        } else {
            date++;
            //console.log(YMD);
            handleClicl();
        }
    } else if (month == 2) {
        handleClicl();
        date++;
        if (date == 28) {
            month++;
            //console.log(month);
            date = 1;
        }
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        date++;
        handleClicl(3);
        if (date == 30) {
            month++;
            //console.log(month);
            date = 1;
            handleClicl();
            return;
        }
    }
}

function YMDMinus() {
    if (
        month == 1 ||
        month == 2 ||
        month == 4 ||
        month == 6 ||
        month == 8 ||
        month == 9 ||
        month == 11
    ) {
        date--;
        if (date == 0) {
            month--;
            date = 31;
            //console.log(month);

            handleClicl();

            return;
        } else {
            handleClicl();

            return;
        }
    } else if (month == 3) {
        date--;
        if (date == 0) {
            date = 28;
            month--;

            handleClicl();

            return;
        } else {
            handleClicl();

            return;
        }
    } else if (month == 5 || month == 7 || month == 10 || month == 12) {
        date--;
        if (date == 0) {
            month--;
            date = 30;
            //console.log(month);

            handleClicl();

            return;
        } else {
            handleClicl();

            return;
        }
    }
}
handleClicl();

/*const handleChange = (event) => {
  if (event.target == GRAInput) {
    GRADE = event.target.value;
  }
  if (event.target == YMDInput) {
    YMD = event.target.value;
  }
  if (event.target == CLAInput) {
    CLASS = event.target.value;
  }
  if (event.target == SEMInput) {
    SEM = event.target.value;
  }
  handleClick();
};*/

plus.addEventListener('click', YMDPlus);
minus.addEventListener('click', YMDMinus);
