const modifyBTNzz = document.getElementById("modifyBTN");

const turnonClick = () => {
    const userName = document.getElementById("inputN1").value;
    const school = document.getElementById("inputN2").value;
    const grade = document.getElementById("inputN3").value;
    const CLASS = document.getElementById("inputN4").value;
    if((grade != 1 && grade != 2 && grade != 3)){
        const redP = document.getElementById("redP");
        redP.innerText = "잘못된 값을 입력했어요!";
        redP.style.color="red";
    }
    else{
        const redP = document.getElementById("redP");
        redP.innerText = "";
        localStorage.setItem("userName", userName);
        localStorage.setItem("school", school);
        localStorage.setItem("grade", grade);
        localStorage.setItem("CLASS", CLASS);
        const in1 = document.getElementById("in1").value = userName;
        const in2 = document.getElementById("in2").value = school;
        const in3 = document.getElementById("in3").value = grade;
        const in4 = document.getElementById("in4").value = CLASS;
    }
}

modifyBTN.addEventListener("click", turnonClick);
function asyncTest() {
    let jsonObj = new Object();
    let jsonArray = new Array();

    const userInfo = `${userName}`;
    const putGrade = `${grade}`;
    const putSchool = `${school}`;
    const putClass = `${CLASS}`;
    const puts = [userInfo, putGrade, putSchool, putClass];

    for (let i = 0; i < puts.length; i++) {
        jsonObj.puts = puts[i];
        jsonArray.push(jsonObj);
        jsonObj = {};
    }
    jsonObj.commons = {
        이름: userInfo,
        학교: putSchool,
        학년: putGrade,
        반: putClass,
    };
    jsonArray.push(jsonObj);

    let url = 'http://3.39.150.178/';
    fetch(url, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonArray),
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
}
