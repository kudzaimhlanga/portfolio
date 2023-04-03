import gsap from "gsap";

export function heroTokens() {
  const tl = new gsap.timeline({
    defaults: {
        ease: "none"
    },
    scrollTrigger: {
      trigger: ".section-home-about",
      start: "top 90%",
      scrub: 1
    },
  });

  tl.to(".token-image", { y: "50%",  stagger: -0.05 });
}
