import { introAnim } from "./Animations/introAnim.js";
import { splittingType } from "./Animations/splittingType.js";
import { fadeIn } from "./Animations/fadeIn.js";
import { tableAnim } from "./Animations/tableAnim.js";
import { smoothScrolling } from "./Animations/smoothScrolling.js";

document.addEventListener("DOMContentLoaded", () => {

  //play intro animation when page laods
  introAnim()

  //splitting type animations that play as you scroll
  splittingType()

  //page animations
  fadeIn()
  smoothScrolling()

  //animate table
  tableAnim()

  //parallax animation

});
