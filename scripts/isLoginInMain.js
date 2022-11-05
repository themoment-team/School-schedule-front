const Signinbox = document.querySelector(".Signinbox");
let uid = localStorage.getItem("setUserID");


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
        uid = localStorage.getItem("setUserID");
        let url = 'https://server.the-moment-schema.site/logout/session';
        console.log(uid);
        fetch(url,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userid: uid,
            }),
        }).then((res) => {
            return res.json();
        })
        .then((json) => {
            console.log(json);
        })
        .catch((err) => {
            console.log(err);
        });
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