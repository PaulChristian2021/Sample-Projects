const shareBtn = document.querySelector(".share-button"),
  hiddenOptions = document.querySelector(".hidden-options"),
  shareBtnPath = document.querySelector(".share-button-path");
shareBtn.addEventListener("click", () => {
  "flex" === hiddenOptions.style.display
    ? hideModal()
    : ((hiddenOptions.style.display = "flex"),
      (shareBtnPath.style.fill = "white"),
      (shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)"));
});
function hideModal() {
  (hiddenOptions.style.display = "none"),
    (shareBtnPath.style.fill = "#6E8098"),
    (shareBtn.style.backgroundColor = "#EFEFEF");
}
window.addEventListener("click", (a) => {
  "BUTTON" === a.target.tagName ||
  "path" === a.target.tagName ||
  "svg" === a.target.tagName
    ? console.log(a.target.tagName, "clicked")
    : (hideModal(), console.log(a.target.tagName, "clicked"));
});
