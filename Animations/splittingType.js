import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

export function splittingType(){
    gsap.registerPlugin(ScrollTrigger)

    const splitType = SplitType.create(".split-type", {types: 'lines', lineClass: "split-line"})

    const splitSections = [...document.querySelectorAll(".split-type")]
    

    splitSections.forEach((section) => {
        const splitLines = [...section.querySelectorAll(".split-line")]
        
        const tl = new gsap.timeline({
            defaults: {
                duration: 0.75,
                ease: "power2.out",
                stagger: 0.05
            },
            scrollTrigger: {
                trigger: section,
                start: "top 70%",
                scrub: true
            }
        })
        
        tl.from(splitLines, {y: "5rem", opacity: 0})

    })
    


    //manage resize
    function manageResize(){
        splitType.split()
    }

    window.addEventListener("resize", manageResize)
    
}