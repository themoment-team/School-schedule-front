const moveBTN = document.querySelector(".main__user__users__BTN");
let cnt = 0;
const handleClick = () => {
    if(cnt%2===0){
        gsap.to(
            ".main__user__users",{
                x:-400,
            }
        )
        gsap.to(
            ".main__user__users__BTN",{
                rotate:180,
            }
        )
    }
    else{
        gsap.to(
            ".main__user__users",{
                x:0,
            }
        )
        gsap.to(
            ".main__user__users__BTN",{
                rotate:0,
            }
        )
    }
    cnt++;
}

moveBTN.addEventListener("click", handleClick);