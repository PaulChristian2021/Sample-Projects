const billInput = document.querySelector("#bill"),
  peopleNumberInput = document.querySelector("#peoplenumber"),
  tipInput = document.querySelector("#tip"),
  tipPercents = document.querySelectorAll(".tip"),
  resetBtn = document.querySelector("#reset"),
  tipAmount = document.querySelector("#tip-amount"),
  totalAmount = document.querySelector("#total-amount");
let billData = 0,
  tipPercent = 0,
  peopleNum = 0,
  tipData = 0,
  totalData = 0;
billInput.addEventListener("input", () => {
  (billData = +billInput.value),
    0 < billInput.value.length
      ? billInput.classList.add("activeInput")
      : billInput.classList.remove("activeInput"),
    calculate();
}),
  tipPercents.forEach((a) => {
    a.addEventListener("click", (a) => {
      "tip" === a.target.id
        ? null
        : (tipPercent = a.target.textContent.replace(/\D/g, "")),
        resetTips(),
        "tip" !== a.target.id &&
          ((a.target.style.color = "hsl(183, 100%, 15%)"),
          (a.target.style.backgroundColor = "hsl(172, 67%, 45%)"),
          tipInput.classList.remove("activeInput"),
          (tipInput.value = "")),
        calculate();
    });
  }),
  tipInput.addEventListener("input", () => {
    (tipPercent = 0 < tipInput.value.length ? +tipInput.value : 0),
      0 < tipInput.value.length
        ? tipInput.classList.add("activeInput")
        : tipInput.classList.remove("activeInput"),
      calculate();
  }),
  peopleNumberInput.addEventListener("input", () => {
    (peopleNum = +peopleNumberInput.value),
      0 < !+peopleNumberInput.value || 0 < !peopleNumberInput.value.length
        ? (peopleNumberInput.classList.add("invalidInput"),
          (document.querySelector(".invalidPeople").style.display = "inline"))
        : (peopleNumberInput.classList.remove("invalidInput"),
          peopleNumberInput.classList.add("activeInput"),
          (document.querySelector(".invalidPeople").style.display = "none")),
      calculate();
  }),
  resetBtn.addEventListener("click", () => {
    reset();
  });
function reset() {
  (billData = 0),
    (tipPercent = 0),
    (peopleNum = 0),
    (tipData = 0),
    (totalData = 0),
    (billInput.value = ""),
    (tipInput.value = ""),
    (peopleNumberInput.value = ""),
    resetTips(),
    displayAll();
}
function resetTips() {
  tipPercents.forEach((a) => {
    "tip" !== a.id &&
      ((a.style.color = "white"),
      (a.style.backgroundColor = "hsl(183, 100%, 15%)"));
  });
}
function calculate() {
  const a = 0 < peopleNum ? peopleNum : 1,
    b = ((tipPercent / 100) * billData) / a,
    c = b + (billData ? billData : 0 / a);
  (tipData = b),
    (totalData = c / a),
    displayAll(),
    console.log(tipData, totalData);
}
function displayAll() {
  (totalAmount.textContent =
    totalData === NaN || totalData === 1 / 0
      ? `$0.00`
      : `$${totalData.toFixed(2)}`),
    (tipAmount.textContent =
      tipData === 1 / 0 || tipData === NaN
        ? `$0.00`
        : `$${tipData.toFixed(2)}`);
}
