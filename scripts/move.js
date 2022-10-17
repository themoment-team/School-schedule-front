const moveBTN = document.querySelector(".main__user__users__BTN");
const goModify = document.querySelector("#goModify");
const xMark = document.querySelector("#xMark");
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
const onClick = () => {
    gsap.to(
        ".main__modify",{
            opacity:1,
            x:1000,
        }
    )
}
const xClick = ()=>{
    gsap.to(
        ".main__modify",{
            opacity:0,
            x:0,
        }
    )
}

moveBTN.addEventListener("click", handleClick);
goModify.addEventListener("click", onClick);
xMark.addEventListener("click", xClick);