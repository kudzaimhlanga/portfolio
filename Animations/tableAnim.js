import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function tableAnim(){
    const tableRows = [...document.querySelectorAll(".table-row")]
    
    tableRows.forEach((row) => {
        const tl = new gsap.timeline({
            defaults: {
                duration: 0.75,
                ease: "power2.out"
            },
            scrollTrigger: {
                trigger: row,
                start: "top 80%",
                scrub: true
            }
        })

        tl.from(row.querySelector(".table-border"), { width: "0%"})
        .from(row.querySelectorAll(".table-cell"), {y: "1rem", opacity: 0, stagger: 0.2}, "<")
    })
}