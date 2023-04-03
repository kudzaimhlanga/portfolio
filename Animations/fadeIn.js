import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function fadeIn(){
    const fadeIn = [...document.querySelectorAll(".fade-in")]
    
    fadeIn.forEach((element) => {
        const tl = new gsap.timeline({
            defaults: {
                duration: 0.75,
                ease: "power2.out",
                stagger: 0.05
            },
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                scrub: true
            }
        })

        tl.from(element,{y: "4rem", opacity: 0} )
    })
}