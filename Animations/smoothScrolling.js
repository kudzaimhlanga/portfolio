import Lenis from "@studio-freight/lenis";

export function smoothScrolling() {

  class Scroll extends Lenis {
    constructor() {
      super({
        duration: 1.5,
        easing: (x) => 1 - Math.pow(1 - x, 4), // https://easings.net
        direction: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 1.5,
      });

      this.time = 0;
      this.isActive = true;
      this.init();
    }

    init() {
      this.render();
    }


    render() {
      this.raf((this.time += 10));
      window.requestAnimationFrame(this.render.bind(this));
    }
  }

  window.Scroll = new Scroll();
  observeEditor(); // don't trigger if it's webflow editor view

  /*
   * Make Editor View Scrollable
   */
  function observeEditor() {
    const html = document.documentElement;
    const config = { attributes: true, childList: false, subtree: false };

    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type === "attributes") {
          const btn = document.querySelector(".w-editor-bem-EditSiteButton");
          const bar = document.querySelector(".w-editor-bem-EditorMainMenu");
          const addTrig = (target) =>
            target.addEventListener("click", () => window.Scroll.destroy());

          if (btn) addTrig(btn);
          if (bar) addTrig(bar);
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(html, config);
  }
}
