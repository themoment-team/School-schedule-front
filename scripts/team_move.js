let tl = gsap.timeline();

let intervalId = setInterval(function () {     
    tl.to(
        ".teamIMGs__IMGbox",{
            x:-100,
            rotation:80
        }
    )
    tl.to(
        ".teamIMGs__IMGbox",{
            y:-100,
            rotation:160
        }
    )
    tl.to(
        ".teamIMGs__IMGbox",{
            x:0,
            rotation:240
        }
    )
    tl.to(
        ".teamIMGs__IMGbox",{
            y:0,
            rotation:360
        }
    )
    tl.to(
        ".teamIMGs__IMGbox",{
            y:0,
            rotation:0
        }
    )

}, 3000);