// import './assets/css/main.css'
import "./src/assets/scss/main.scss";
import "./src/assets/js/creater";
import "./src/assets/js/checkStorage";
import { createNode } from "./src/assets/js/createNode";
import "./src/assets/js/scroll";
import { nodeStack } from "./src/assets/js/global";
import "./src/assets/js/clearAll";
import "./src/assets/js/removeSection";

const screenWindow = document.querySelector(".screen-window");

const addElement = document.querySelector(".creating-form__add-elem");
addElement.addEventListener("click", createNode);

const generateHTML = document.querySelector(".generate-html");
function addAsText() {
  const str = nodeStack.reduce((s, item) => {
    const itemAsStr = item.firstChild.outerHTML;
    return (
      s +
      itemAsStr
        .split("")
        .map((el) => {
          if (el === "<") {
            return "\n&lt;";
          }
          if (el === ">") {
            return "&gt;\n";
          }
          return el;
        })
        .join("")
    );
  }, "");
  screenWindow.innerHTML = str;
}
generateHTML.addEventListener("click", addAsText);
