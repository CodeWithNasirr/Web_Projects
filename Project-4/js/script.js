// let blur=document.querySelector(".mouse-hover-blur")

// document.addEventListener('mousemove',function(dets){
//     blur.style.left=dets.x + 'px'
//     blur.style.top=dets.y + 'px'
// })

var timeout;
function circlecaptakaro() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener('mousemove', function (dets) {
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circlemousefollow(dets.clientX, dets.clientY, xscale, yscale);

        timeout = setTimeout(function () {
            const elements = document.getElementsByClassName("mouse-hover");
            elements[0].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100); // Adding a delay of 100ms
    });
}

function circlemousefollow(clientX, clientY, xscale, yscale) {
    const elements = document.getElementsByClassName("mouse-hover");
    if (elements.length > 0) {
        elements[0].style.transform = `translate(${clientX}px, ${clientY}px) scale(${xscale}, ${yscale})`;
        if (clientY <= 0) {
            elements[0].style.display = 'none';
        } else {
            elements[0].style.display = 'block';
        }
    }
}

circlecaptakaro();





gsap.to('.nav',{
    backgroundColor:"black",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:" top -12%",
        scrub:1 

    }
})

gsap.to('.main',{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        markers:true,
        start:"top -50%",
        end:"top -100%",
        scrub:2

    }
})

var blur = document.querySelector('.mouse-hover-blur')
window.addEventListener('mousemove',function(dets){
    gsap.to(blur,{
        x:dets.x,
        y:dets.y
    })
})

gsap.to(".scroller-in", {
    xPercent: -100,
    ease: "none",
    repeat: -1,
    duration: 40
});