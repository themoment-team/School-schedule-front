const Target1 = document.querySelector("#LSJ_IMG");
const Target2 = document.querySelector("#HJU_IMG");
const Target3 = document.querySelector("#PJH_IMG");
const Target4 = document.querySelector("#JYB_IMG");
const Target5 = document.querySelector("#LJW_IMG");

const handleHover = (event) =>{
    const ID = `#${event.target.id}`;
    console.log(ID);
    gsap.to(
        `${ID}`,{
            x:20,
            duration: 0.3,
            ease:'elastic'
        }
    )
}
const handleHover2 = (event) => {
    const ID = `#${event.target.id}`;
    console.log(ID);
    gsap.to(
        `${ID}`,{
            x:0,
            duration: 0.3,
            ease:'elastic'
        }
    )
}

Target1.addEventListener("mouseover", handleHover);

Target2.addEventListener("mouseover", handleHover);

Target3.addEventListener("mouseover", handleHover); 

Target4.addEventListener("mouseover", handleHover);

Target5.addEventListener("mouseover", handleHover);

Target1.addEventListener("mouseleave", handleHover2);

Target2.addEventListener("mouseleave", handleHover2);

Target3.addEventListener("mouseleave", handleHover2); 

Target4.addEventListener("mouseleave", handleHover2);

Target5.addEventListener("mouseleave", handleHover2);