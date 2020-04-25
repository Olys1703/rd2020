const showCreateForm = document.querySelector(".create-elem");
const createFormWrapper = document.querySelector(".creating-form-wrapper");
showCreateForm.addEventListener("click", () => {
  createFormWrapper.style.display = "initial";
});
export function closeCreater() {
  createFormWrapper.style.display = "none";
}
const closeForm = document.querySelector(".creating-form__close-form");
closeForm.addEventListener("click", closeCreater);
