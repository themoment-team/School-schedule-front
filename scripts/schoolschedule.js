let today = new Date();
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1; // 월
let date = today.getDate(); // 날짜
let YMD = `${year}${month}${date}`;

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const threeOne = [1, 3, 5, 7, 8, 10, 12];

const handleClicl = () => {
  console.log("hello");
  console.log(YMD);
  fetch(
    `https://open.neis.go.kr/hub/hisTimetable?KEY=a810dd9ec8c04e57b5ecc4d4ff4e400e&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&AY=2022&SEM=2&ALL_TI_YMD=${YMD}&GRADE=1&CLASS_NM=4`
  )
    .then((res) => res.json())
    .then((json) => {
      for (let i = 0; i < 7; i++) {
        const inner = document.getElementById(`${i}`);
        try {
          inner.innerText = `${i + 1}교시 ${
            json.hisTimetable[1].row[i].ITRT_CNTNT
          }`;
        } catch {
          inner.innerText = `${i + 1}교시 데이터값 없음`;
        }
      }
    });
};
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

function YMDPlus() {
  switch (month) {
    case 2: {
      if (date >= 28) {
        ++month;
        date = "01";
        YMD = `${year}${month}${date}`;
      } else {
        ++date;
        YMD = `${year}${month}${date}`;
      }
      handleClicl();
      break;
    }
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (date === 31) {
        if (month == 12) {
          month = 1;
          date = "01";
        } else {
          month++;
          date = "01";
        }
      } else {
        if (date >= 10) {
          date++;
        } else {
          date = `0${++date}`;
          if (date === "010") {
            date = "10";
          }
        }
      }
      YMD = `${year}${month}${date}`;
      handleClicl();

      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (date === 30) {
        month++;
        date = "01";
      } else {
        if (date >= 10) {
          date++;
        } else {
          date = `0${++date}`;
          if (date === "010") {
            console.log("sex");
            date = "10";
          }
        }
      }
      YMD = `${year}${month}${date}`;
      handleClicl();
      break;
  }
}

function YMDMinus() {
  handleClicl();
}

handleClicl();
plus.addEventListener("click", YMDPlus);
minus.addEventListener("click", YMDMinus);
