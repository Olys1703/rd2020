import { nodeStack } from "./global";
import { userContent } from "./global";
if (localStorage.getItem("userItems")) {
  userContent.innerHTML = localStorage.getItem("userItems");
  const contentItems = Array.from(
    document.querySelectorAll(".user-content__item")
  );
  contentItems.forEach((item) => nodeStack.push(item));
}
