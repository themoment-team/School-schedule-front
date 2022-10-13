const setIMG = document.querySelector(".userIMGfile");
const imgInput = document.querySelector(".main__user__users__userBox__userIMG__input");
function onChange(event){
    let selectFile = document.querySelector(".main__user__users__userBox__userIMG__input").files[0];
    const file = URL.createObjectURL(selectFile);
    document.querySelector(".userIMGfile").src = file;
    setIMG.classList.remove("display");
    const element = document.querySelector(".main__user__users__userBox__userIMG__input").style.display="none";
    const wantNone = document.querySelector("#wantNone").style.display="none";
}
imgInput.addEventListener("change", onChange);