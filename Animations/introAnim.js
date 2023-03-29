import gsap from "gsap";
import Flip from "gsap/Flip";

export function introAnim() {
  gsap.registerPlugin(Flip);
  //runs befow anim plays
  function setupAnim() {
    gsap.set(".home-preloader", { display: "flex" });
    document.querySelector(".main").classList.add("is-loading");
  }

  //runs when anim is done playing
  function finishAnim() {
    document.querySelector(".main").classList.remove("is-loading");
    document.querySelector(".home-preloader").remove();
  }

  //intro animation
  function runAnim() {
    const tl = new gsap.timeline({
      onComplete: finishAnim,
      defaults: { duration: 0.8, ease: "power2.out" },
    });

    tl.from(".preloader_text-wrapper", { y: "100%", stagger: 0.1, delay: 1 })
      .from(".token-images", { y: "100%" }, ">")
      .from(".token-images", { opacity: 0, duration: 0.2 }, "<")
      .to(
        ".preloader-bg.is-2",
        { height: "0%", duration: 1, ease: "power2.inOut" },
        ">+=0.2"
      )
      .to(
        ".preloader_text-wrapper",
        {
          y: "-100%",
          ease: "power2.in",
          onComplete: flipTokens,
        },
        ">"
      )
      .from(".hero-loader_element", { y: "100%", stagger: 0.1 }, ">+=0.5")
      .from(".partner-tag", { opacity: 0, y: "100%" });

    //flip token images into hero section
    function flipTokens() {
      const loaderTokens = [...document.querySelectorAll(".token-image")];
      const heroTokens = [...document.querySelectorAll(".hero-token")];

      loaderTokens.forEach((token) => {
        const idx = loaderTokens.indexOf(token);
        const state = Flip.getState(loaderTokens[idx]);
        heroTokens[idx].appendChild(loaderTokens[idx]);
        Flip.from(state, {
          duration: 0.8,
          ease: "power2.inOut",
        });
      });
    }
  }

  setupAnim();
  runAnim();
}
