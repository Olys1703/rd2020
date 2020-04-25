import { userContent } from "./global";
import { nodeStack } from "./global";

userContent.addEventListener("click", (event) => {
  if (!event.target.classList.contains("user-content__remove")) return false;
  const node = event.target.closest(".user-content__item");
  let index = nodeStack.indexOf(node);
  if (index !== -1) nodeStack.splice(index, 1);
  node.remove();
});
