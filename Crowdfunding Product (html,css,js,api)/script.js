console.log("test"), initialGetData();
const overlay = document.querySelector("#overlay"),
  successOverlay = document.querySelector("#successOverlay"),
  menu = document.querySelector("#menu"),
  navLinks = document.querySelector("#nav-links"),
  cards = document.querySelectorAll(".option"),
  radios = document.querySelectorAll(".radio-container"),
  backThisBtn = document.querySelector("#back-this-button"),
  backThisProject = document.querySelector("#modals"),
  bookmark = document.querySelector("#bookmark"),
  bookmarkImg = document.querySelector("#bookmark img"),
  bookmarkText = document.querySelector("#bookmarkText"),
  continueBtns = document.querySelectorAll(".continue"),
  amounts = document.querySelectorAll(".amount"),
  selectRewardBtns = document.querySelectorAll(".reward-button"),
  enterPledge = document.querySelectorAll(".enter-pledge"),
  successModal = document.querySelector("#success-modal"),
  gotItBtn = document.querySelector(".success-btn"),
  backedAmountNum = document.querySelector("#backedAmountNum"),
  backingNeededNum = document.querySelector("#backingNeededNum"),
  backersNum = document.querySelector("#backersNum"),
  daysLeftNum = document.querySelector("#daysLeftNum"),
  progressWidth = document.querySelector("#progress-fill"),
  bambooNum = document.querySelectorAll(".bambooNum"),
  blackEditionNum = document.querySelectorAll(".blackEditionNum"),
  mahoganyNum = document.querySelectorAll(".mahoganyNum");
let menuIsOpen = !1,
  backThisModalsOpen = !1,
  windowWidth = window.innerWidth,
  bookmarked = CrowdfundingProductPage.bookmarkToggle,
  backers = CrowdfundingProductPage.backers,
  backedAmount = CrowdfundingProductPage.backedAmount,
  backingNeeded = CrowdfundingProductPage.backingNeeded,
  daysLeft = CrowdfundingProductPage.daysLeft,
  products = CrowdfundingProductPage.products,
  progressFill =
    100 *
    (CrowdfundingProductPage.backedAmount /
      CrowdfundingProductPage.backingNeeded);
function initialGetData() {
  localStorage.CrowdfundingProductPage
    ? ((CrowdfundingProductPage = JSON.parse(
        localStorage.getItem("CrowdfundingProductPage")
      )),
      console.log(CrowdfundingProductPage))
    : (localStorage.setItem(
        "CrowdfundingProductPage",
        JSON.stringify({
          bookmarkToggle: !1,
          backedAmount: 89914,
          backingNeeded: 1e5,
          backers: 5007,
          daysLeft: 56,
          products: { bambooNum: 101, blackEditionNum: 64, mahoganyNum: 0 },
        })
      ),
      (CrowdfundingProductPage = JSON.parse(
        localStorage.getItem("CrowdfundingProductPage")
      )));
}
function saveToLocalStorage(a, b, c = !1) {
  c ? (CrowdfundingProductPage[a][c] = b) : (CrowdfundingProductPage[a] = b),
    localStorage.setItem(
      "CrowdfundingProductPage",
      JSON.stringify(CrowdfundingProductPage)
    ),
    refreshPageData(),
    setPageDataDisplay();
}
setPageDataDisplay();
function refreshPageData() {
  (CrowdfundingProductPage = JSON.parse(
    localStorage.getItem("CrowdfundingProductPage")
  )),
    (bookmarked = CrowdfundingProductPage.bookmarkToggle),
    (backers = CrowdfundingProductPage.backers),
    (backedAmount = CrowdfundingProductPage.backedAmount),
    (backingNeeded = CrowdfundingProductPage.backingNeeded),
    (daysLeft = CrowdfundingProductPage.daysLeft),
    (products = CrowdfundingProductPage.products),
    (progressFill =
      100 *
      (CrowdfundingProductPage.backedAmount /
        CrowdfundingProductPage.backingNeeded)),
    console.log("---RefreshPageData", CrowdfundingProductPage);
}
function setPageDataDisplay() {
  bookmarkChange(),
    (backedAmountNum.textContent = backedAmount.toLocaleString("en-US")),
    (backingNeededNum.textContent = backingNeeded.toLocaleString("en-US")),
    (backersNum.textContent = backers.toLocaleString("en-US")),
    (daysLeftNum.textContent = daysLeft),
    (progressWidth.style.width = progressFill + "%"),
    bambooNum.forEach((a) => {
      a.textContent = products.bambooNum;
    }),
    blackEditionNum.forEach((a) => {
      a.textContent = products.blackEditionNum;
    }),
    mahoganyNum.forEach((a) => {
      a.textContent = products.mahoganyNum;
    }),
    console.log("---SetPageData", CrowdfundingProductPage);
}
menu.addEventListener("click", () => {
  menuIsOpen
    ? ((menuIsOpen = !menuIsOpen),
      toggleDisplay("none", overlay, navLinks),
      (menu.src = "./images/icon-hamburger.svg"))
    : !menuIsOpen &&
      ((menuIsOpen = !menuIsOpen),
      toggleDisplay("block", overlay, navLinks),
      (menu.src = "./images/icon-close-menu.svg"));
}),
  overlay.addEventListener("click", () => {
    menuIsOpen && !backThisModalsOpen
      ? ((menuIsOpen = !1),
        (menu.src = "./images/icon-hamburger.svg"),
        toggleDisplay("none", overlay, navLinks))
      : !menuIsOpen &&
        backThisModalsOpen &&
        ((backThisModalsOpen = !1),
        toggleDisplay("none", backThisProject, overlay)),
      successModal.classList.remove("displayFlex"),
      successModal.classList.add("displayNone");
  });
function toggleDisplay(a, ...b) {
  if (a && b) for (let c = 0; c < b.length; c++) b[c].style.display = a;
  else console.log("-- toggleDisplay function error --");
}
window.addEventListener("click", (a) => {
  if (!0 === a.target.classList.contains("mahogany"))
    console.log("disabled Mahogany class");
  else if (a.target.classList.contains("checkmark")) {
    deactivateCards(),
      closePledges(),
      a.target.parentNode.parentNode.parentNode.classList.add("green-border");
    const b = a.target.parentNode.parentNode.parentNode.children[3];
    1010 > windowWidth
      ? b.classList.add("displayBlock")
      : toggleDisplay("flex", b);
  } else if (a.target.classList.contains("radio-container")) {
    deactivateCards(), closePledges();
    const b = a.target.parentNode.parentNode.children[3];
    console.log(b),
      1010 > windowWidth
        ? b.classList.add("displayBlock")
        : toggleDisplay("flex", b);
  } else return;
});
function deactivateCards() {
  for (let a = 0; a < cards.length; a++)
    cards[a].classList.remove("green-border");
}
function closePledges() {
  for (let a = 0; a < enterPledge.length; a++)
    toggleDisplay("none", enterPledge[a]);
}
backThisBtn.addEventListener("click", () => {
  toggleDisplay("block", overlay),
    toggleDisplay("block", backThisProject),
    (backThisModalsOpen = !backThisModalsOpen),
    radios[0].click(),
    amounts[0].focus();
}),
  backThisProject.addEventListener("click", (a) => {
    ("modals" === a.target.id || "close-this-modals" === a.target.id) &&
      (toggleDisplay("none", overlay, backThisProject),
      (backThisModalsOpen = !backThisModalsOpen),
      successModal.classList.remove("displayFlex"),
      successModal.classList.add("displayNone"));
  }),
  selectRewardBtns.forEach((a) => {
    a.addEventListener("click", (a) => {
      console.log(a.target.value),
        toggleDisplay("block", overlay),
        toggleDisplay("block", backThisProject),
        (backThisModalsOpen = !backThisModalsOpen),
        radios[a.target.value].click(),
        amounts[a.target.value].focus();
    });
  }),
  bookmark.addEventListener("click", () => {
    bookmarkChange(), saveToLocalStorage("bookmarkToggle", !bookmarked);
  });
function bookmarkChange() {
  bookmarked
    ? ((bookmarkImg.src = "./images/icon-bookmarked.svg"),
      (bookmarkText.textContent = "Bookmarked"),
      (bookmarkText.style.color = "hsl(176, 72%, 28%)"))
    : !bookmarked &&
      ((bookmarkImg.src = "./images/icon-bookmark.svg"),
      (bookmarkText.textContent = "Bookmark"),
      (bookmarkText.style.color = "hsl(0, 0%, 48%)"));
}
radios.forEach((a) => {
  a.addEventListener("click", (a) => {
    console.log(a.target);
  });
}),
  continueBtns.forEach((a) => {
    a.addEventListener("click", () => {
      successModal.classList.remove("displayNone"),
        successModal.classList.add("displayFlex");
      const b = a.parentNode.children[0],
        c = +backedAmount + +b.value,
        d = a.parentNode.parentNode.parentNode.children[2].children[0];
      if (d.textContent) {
        const a = d.classList[1],
          b = +d.textContent - 1;
        saveToLocalStorage("products", b, a), console.log(d.textContent);
      } else console.log(!!d.textContent);
      saveToLocalStorage("backedAmount", c),
        saveToLocalStorage("backers", backers + 1),
        successOverlay.classList.remove("displayNone"),
        successOverlay.classList.add("displayFlex");
    });
  }),
  (gotItBtn.onclick = function () {
    successModal.classList.remove("displayFlex"),
      successModal.classList.add("displayNone"),
      successOverlay.classList.remove("displayFlex"),
      successOverlay.classList.add("displayNone");
  }),
  successModal.addEventListener("click", (a) => {
    "success-modal" === a.target.id && gotItBtn.click();
  }),
  (successOverlay.onclick = function () {
    gotItBtn.click();
  });
let today = new Date(),
  targetDate = new Date(today.getFullYear(), 11, 21);
11 == today.getMonth() &&
  21 < today.getDate() &&
  targetDate.setFullYear(targetDate.getFullYear() + 1);
let one_day = 86400000;
saveToLocalStorage(
  "daysLeft",
  Math.ceil((targetDate.getTime() - today.getTime()) / 86400000)
);
