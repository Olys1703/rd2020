import { nodeStack } from "./global";
import { userContent } from "./global";

const clearAll = document.querySelector(".creating-form__clear-all");
clearAll.addEventListener("click", clearUserContent);
function clearUserContent() {
  nodeStack.length = 0;
  userContent.innerHTML = "";
}
