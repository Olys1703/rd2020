import { nodeStack } from "./global";
import { userContent } from "./global";
import { closeCreater } from "./creater";
export function createNode() {
  const userText = document.querySelector(".creating-form__user-text");
  const tagName = document.querySelector(".creating-form__tag-name");
  const creater = document.querySelector(".creating-form");

  let newNode;
  try {
    newNode = document.createElement(tagName.value);
  } catch (e) {
    alert("Ошибка, тег не найден");
    return false;
  }
  const removeNodeBtn = document.createElement("button");
  const wrapper = document.createElement("div");
  wrapper.classList.add("user-content__item");
  userContent.append(wrapper);
  removeNodeBtn.innerHTML = "Удалить элемент";
  removeNodeBtn.classList.add("ref-def", "user-content__remove");
  newNode.innerHTML = userText.value;
  wrapper.append(newNode, removeNodeBtn);
  nodeStack.push(wrapper);
  closeCreater();
  creater.reset();
  localStorage.setItem("userItems", userContent.innerHTML);
}
