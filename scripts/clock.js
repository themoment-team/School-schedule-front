const clock = document.querySelector("h2#clock"); //html에서 id가 clock인 h2를 가져온다
function getClock()
{
    const date = new Date(); //날짜를 받아온다
    const hours = String(date.getHours()).padStart(2, "0"); //시간을 받아온다
    const minutes = String(date.getMinutes()).padStart(2, "0"); //분을 받아온다
    const seconds = String(date.getSeconds()).padStart(2, "0"); //초를 받아온다
    clock.innerText = `${hours}:${minutes}:${seconds}` //종합하여 출력한다
}
getClock();
setInterval(getClock, 1000); //1초마다 getClock을 실행시킨다