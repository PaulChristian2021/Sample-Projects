const previoushours = document.querySelectorAll(".prevhr"),
  currenthours = document.querySelectorAll(".currenthours");
let report;
fetch("./data.json")
  .then((a) => a.json())
  .then((a) => (report = a))
  .then(() => console.log(report));
const categories = document.querySelectorAll(".category");
function resetCategoriesColor() {
  categories.forEach((a) => {
    a.style.color = "rgba(255, 255, 255, 0.425)";
  });
}
categories.forEach((a) => {
  a.addEventListener("click", (b) => {
    resetCategoriesColor(), (a.style.color = "white");
    const c = b.target.textContent.toLowerCase();
    setReports(c);
  });
});
function setReports(a) {
  for (let b = 0; 6 > b; b++) {
    let c = 1 < report[b].timeframes[a].current ? "hrs" : "hr",
      d = 1 < report[b].timeframes[a].current ? "hrs" : "hr";
    (currenthours[b].textContent = report[b].timeframes[a].current + c),
      (previoushours[b].textContent = report[b].timeframes[a].previous + d);
  }
}
