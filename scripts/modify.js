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