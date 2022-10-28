const Signinbox = document.querySelector(".Signinbox");
window.onload = () => {
        Signinbox.innerText = "로그인";
        const isLogin = sessionStorage.getItem("isLogin");
    if(sessionStorage.getItem("isLogin")){
        Signinbox.innerText = "로그아웃";
    }
    else if(!sessionStorage.getItem("isLogin")){
        Signinbox.innerText = "로그인";
    }
}
let i = 0;
const onClha = () => {
    if(i%2 == 0){
        alert("로그아웃 되었습니다"); 
        sessionStorage.setItem("isLogin", false);
        Signinbox.innerText = "로그인";
        i++;
    }
    else if(i%2 == 1){
        sessionStorage.setItem("isLogin", true);
        Signinbox.innerText = "로그아웃";
        i++;
        location="../pages/SiginIn.html";
    }
    }
Signinbox.addEventListener("click", onClha);