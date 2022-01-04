let todoByPaul,
  filteredTodos = [];
const themeBtn = document.getElementById("theme-btn"),
  bgImg = document.querySelector("#bg-img"),
  body = document.querySelector("body"),
  form = document.querySelector("form"),
  isCompleteInput = document.querySelector("#is-complete"),
  isComplete = document.querySelector("form label"),
  newtodo = document.querySelector("#newtodo"),
  list = document.querySelector("#list"),
  filter = document.querySelector("#filter"),
  clearcompleted = document.querySelector("#clearcompleted");
let filters = document.querySelectorAll(".filter"),
  listItem = document.querySelectorAll(".list-item"),
  closeBtn = document.querySelectorAll(".list-item button"),
  optionsGridDiv = document.querySelectorAll("#options-grid div"),
  checkb = document.querySelectorAll("li .checkb"),
  itemCheckbox = document.querySelectorAll(".itemCheckbox"),
  liParagraph = document.querySelectorAll(".li-p");
const listContainer = document.querySelector("#listContainer"),
  itemsLeft = document.querySelector("#items");
if (
  localStorage.getItem("todo-by-paul") &&
  localStorage.getItem("todo-by-paul").includes('"todos":[{')
)
  (todoByPaul = JSON.parse(localStorage.getItem("todo-by-paul"))),
    console.log("%ctodo-by-paul: Todo list retrieved.", "color:green"),
    console.log(todoByPaul),
    (filteredTodos = todoByPaul.todos),
    console.log(filteredTodos);
else {
  console.log("%ctodo-by-paul: Todo list does not exist.", "color:orange"),
    console.log("Creating dummy data...");
  let a = {
    todos: [
      {
        text: "This is a sample item.",
        checked: !0,
        id: Math.random().toString(),
      },
      {
        text: "Automatically saved in local storage.",
        checked: !1,
        id: Math.random().toFixed(3).toString(),
      },
      {
        text: "The lists can be dragged.",
        checked: !1,
        id: Math.random().toFixed(3).toString(),
      },
      {
        text: "Try the app!",
        checked: !1,
        id: Math.random().toFixed(3).toString(),
      },
    ],
  };
  localStorage.setItem("todo-by-paul", JSON.stringify(a)),
    (todoByPaul = JSON.parse(localStorage.getItem("todo-by-paul"))),
    (filteredTodos = todoByPaul.todos),
    console.log(filteredTodos);
}
function changeTheme() {
  "dark" === todoByPaul.theme
    ? (lightMode(),
      bgImg.classList.remove("darkbg"),
      (todoByPaul.theme = "light"))
    : "light" === todoByPaul.theme &&
      (darkMode(), bgImg.classList.add("darkbg"), (todoByPaul.theme = "dark")),
    saveToStorage();
}
function lightMode() {
  (themeBtn.style.background = 'url("./images/icon-moon.svg") no-repeat'),
    (body.style.backgroundColor = "hsl(0, 0%, 98%)"),
    (form.style.backgroundColor = "white"),
    (isComplete.style.backgroundColor = "rgb(228, 229, 241)"),
    isComplete.classList.remove("dark"),
    (newtodo.style.backgroundColor = "white"),
    (newtodo.style.color = "black"),
    (filter.style.backgroundColor = "white"),
    optionsGridDiv.forEach((a) => {
      a.style.backgroundColor = "white";
    }),
    checkb.forEach((a) => {
      (a.style.backgroundColor = "hsl(236, 33%, 92%)"),
        a.classList.remove("dark");
    }),
    listItem.forEach((a) => {
      (a.style.backgroundColor = "white"),
        (a.style.borderColor = "hsl(240, 13%, 86%)");
    }),
    liParagraph.forEach((a) => {
      a.style.color = "hsl(235, 19%, 35%)";
    }),
    filters.forEach((a) => {
      a.classList.remove("darkcolor");
    }),
    clearcompleted.classList.remove("darkcolor"),
    form.classList.remove("darkshadow"),
    filter.classList.remove("darkshadow"),
    list.classList.remove("darkshadow"),
    saveToStorage();
}
function darkMode() {
  (themeBtn.style.background = 'url("./images/icon-sun.svg") no-repeat'),
    (body.style.backgroundColor = "hsl(235, 21%, 11%)"),
    (form.style.backgroundColor = "hsl(235, 24%, 19%)"),
    (isComplete.style.backgroundColor = "hsl(237, 14%, 26%)"),
    isComplete.classList.add("dark"),
    (newtodo.style.backgroundColor = "hsl(235, 24%, 19%)"),
    (newtodo.style.color = "hsl(234, 39%, 85%)"),
    (filter.style.backgroundColor = "hsl(235, 24%, 19%)"),
    optionsGridDiv.forEach((a) => {
      a.style.backgroundColor = "hsl(235, 24%, 19%)";
    }),
    checkb.forEach((a) => {
      (a.style.backgroundColor = "hsl(237, 14%, 26%)"), a.classList.add("dark");
    }),
    listItem.forEach((a) => {
      (a.style.backgroundColor = "hsl(235, 24%, 19%)"),
        (a.style.borderColor = "hsl(237, 14%, 26%)");
    }),
    liParagraph.forEach((a) => {
      a.style.color = "hsl(234, 39%, 85%)";
    }),
    filters.forEach((a) => {
      a.classList.add("darkcolor");
    }),
    clearcompleted.classList.toggle("darkcolor"),
    form.classList.add("darkshadow"),
    filter.classList.add("darkshadow"),
    list.classList.add("darkshadow"),
    saveToStorage();
}
function saveToStorage() {
  (todoByPaul.todos = filteredTodos),
    localStorage.setItem("todo-by-paul", JSON.stringify(todoByPaul));
}
form.addEventListener("submit", (a) => {
  a.preventDefault();
  const b = newtodo.value,
    c = isCompleteInput.checked,
    d = { text: b, checked: c, id: Math.random().toFixed(3).toString() };
  (newtodo.value = ""),
    (isCompleteInput.checked = !1),
    createLi(d),
    filteredTodos.push(d),
    saveToStorage(),
    updateQueries(),
    updateItemsLeft();
});
function createLi(a) {
  let b =
      "dark" === todoByPaul.theme
        ? "background-color: rgb(37, 39, 60); border-color: rgb(57, 58, 76);"
        : "background-color: white; border-color: rgb(215, 215, 224);",
    c =
      "dark" === todoByPaul.theme
        ? "background-color: rgb(57, 58, 76);"
        : "background-color: rgb(228, 229, 241);",
    d =
      "dark" === todoByPaul.theme
        ? "color: rgb(202, 205, 232);"
        : "color: rgb(72, 75, 106);";
  const e = document.createElement("LI");
  (e.draggable = !0),
    e.classList.add("list-item"),
    e.setAttribute("style", b),
    (e.dataset.id = a.id);
  const f = document.createElement("input");
  f.classList.add("itemCheckbox"),
    f.setAttribute("type", "checkbox"),
    (f.checked = a.checked),
    (f.id = a.id);
  const g = document.createElement("label");
  g.classList.add("checkb"),
    g.classList.add(`${"dark" === todoByPaul.theme ? "dark" : null}`),
    g.classList.add("pointer"),
    g.setAttribute("style", c),
    g.setAttribute("for", a.id);
  const h = document.createElement("p");
  h.classList.add("li-p"),
    h.classList.add("pointer"),
    h.classList.add(`${a.checked ? "completed" : null}`),
    h.setAttribute("style", d);
  const i = document.createTextNode(`${a.text}`);
  h.appendChild(i);
  const j = document.createElement("button");
  j.classList.add("pointer");
  (j.innerHTML +=
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">\n          <path\n            fill="#494C6B"\n            fill-rule="evenodd"\n            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"\n          />'),
    e.appendChild(f),
    e.appendChild(g),
    e.appendChild(h),
    e.appendChild(j),
    e.addEventListener("drag", setDragging),
    e.addEventListener("dragover", setDraggedOver),
    e.addEventListener("drop", dropped),
    checkboxInputEventListener(f),
    liParagraphEventListener(h),
    newCloseBtnEventlistener(j),
    listContainer.appendChild(e),
    updateQueries();
}
function updateQueries() {
  (checkb = document.querySelectorAll("li .checkb")),
    (filters = document.querySelectorAll(".filter")),
    (listItem = document.querySelectorAll(".list-item")),
    (closeBtn = document.querySelectorAll(".list-item button")),
    (optionsGridDiv = document.querySelectorAll("#options-grid div")),
    (itemCheckbox = document.querySelectorAll(".itemCheckbox")),
    (liParagraph = document.querySelectorAll(".li-p"));
}
function displayTodos() {
  filteredTodos.forEach((a) => {
    createLi(a);
  });
}
displayTodos();
function checkboxInputEventListener(a) {
  a.addEventListener("change", () => {
    const b = a.parentNode,
      c = a.parentNode.children[2];
    a.checked ? c.classList.add("completed") : c.classList.remove("completed");
    const d = filteredTodos.findIndex((a) => b.dataset.id === a.id);
    (filteredTodos[d].checked = !filteredTodos[d].checked), saveToStorage();
  });
}
function liParagraphEventListener(a) {
  a.addEventListener("click", () => {
    const b = a.parentNode,
      c = a.parentNode.children[0];
    !0 === c.checked
      ? ((c.checked = !1), a.classList.toggle("completed"))
      : ((c.checked = !0), a.classList.toggle("completed"));
    const d = filteredTodos.findIndex((a) => b.dataset.id === a.id);
    (filteredTodos[d].checked = !filteredTodos[d].checked), saveToStorage();
  });
}
function newCloseBtnEventlistener(a) {
  a.addEventListener("click", () => {
    const b = a.parentNode,
      c = filteredTodos.findIndex((a) => b.dataset.id === a.id);
    filteredTodos.splice(c, 1),
      saveToStorage(),
      (listContainer.innerHTML = ""),
      displayTodos();
  });
}
themeBtn.addEventListener("click", () => {
  changeTheme();
}),
  clearcompleted.addEventListener("click", () => {
    const a = filteredTodos.filter((a) => !1 === a.checked);
    console.log(a),
      (filteredTodos = a),
      saveToStorage(),
      (listContainer.textContent = ""),
      displayTodos(),
      updateItemsLeft(),
      filters[0].click();
  }),
  filters.forEach((a) => {
    a.addEventListener("click", () => {
      const b = todoByPaul.theme;
      filters.forEach((a) => {
        a.style.color =
          "dark" === b ? "hsl(236, 9%, 61%)" : "hsl(236, 9%, 61%)";
      }),
        (a.style.color = "hsl(220, 98%, 61%)"),
        (listContainer.textContent = ""),
        "Active" === a.textContent
          ? (console.log("%cSHOWING ALL Active Todos.", "color: green;", a),
            (filteredTodos = todoByPaul.todos),
            (filteredTodos = filteredTodos.filter((a) => !1 === a.checked)))
          : "Completed" === a.textContent
          ? (console.log("%cSHOWING ALL Completed Todos.", "color: green;", a),
            (filteredTodos = todoByPaul.todos),
            (filteredTodos = filteredTodos.filter((a) => !0 === a.checked)))
          : console.log("%cSHOWING ALL Todos.", "color: green;"),
        updateItemsLeft(),
        displayTodos(),
        (filteredTodos = todoByPaul.todos);
    });
  }),
  filters[0].click(),
  "dark" === todoByPaul.theme && (darkMode(), bgImg.classList.add("darkbg")),
  (todoByPaul.theme = "light");
let draggedOver, dragging;
function setDragging(a) {
  let b = a.target;
  (dragging =
    "LI" == b.tagName
      ? b.dataset.id
      : "P" == b.tagName || "BUTTON" == b.tagName || "LABEL" == b.tagName
      ? b.parentNode.dataset.id
      : "SVG" == b.tagName
      ? b.parentNode.parentNode.dataset.id
      : "PATH" == b.tagName
      ? b.parentNode.parentNode.parentNode.dataset.id
      : "?"),
    console.log(dragging, "dragging is the id of the DOM element dragged.");
}
function setDraggedOver(a) {
  a.preventDefault();
  let b = a.target;
  draggedOver =
    "LI" == b.tagName
      ? b.dataset.id
      : "P" == b.tagName || "BUTTON" == b.tagName || "LABEL" == b.tagName
      ? b.parentNode.dataset.id
      : "SVG" == b.tagName
      ? b.parentNode.parentNode.dataset.id
      : "PATH" == b.tagName
      ? b.parentNode.parentNode.parentNode.dataset.id
      : "?";
}
function dropped(a) {
  console.log(a.target, "dropped");
  const b = filteredTodos.findIndex((a) => a.id === dragging),
    c = filteredTodos.findIndex((a) => a.id === draggedOver);
  (draggedTodo = filteredTodos[b]),
    filteredTodos.splice(b, 1),
    filteredTodos.splice(c, 0, draggedTodo),
    (listContainer.textContent = ""),
    saveToStorage(),
    displayTodos();
}
function updateItemsLeft() {
  itemsLeft.textContent = filteredTodos.length;
}
