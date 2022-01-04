const claimBtn = document.querySelector("button"),
  firstNm = document.querySelector("#fname"),
  lastNm = document.querySelector("#lname"),
  email = document.querySelector("#email"),
  pass = document.querySelector("#pass"),
  inputs = document.querySelectorAll("input"),
  formdiv = document.querySelectorAll(".formdiv"),
  error = document.querySelectorAll(".error"),
  erroricon = document.querySelectorAll(".erroricon");
claimBtn.addEventListener("click", (a) => {
  a.preventDefault(), validateAll();
}),
  inputs.forEach((a) => {
    a.addEventListener("input", (a) => {
      const b = a.target,
        c = elementIndex(b.id);
      validateEl(b, c), resetInputStyle(b);
    });
  });
function validateAll() {
  let a, b, c, d;
  console.log(a, b, c, d),
    !validateEl(firstNm, 0) || (a = !0),
    !validateEl(lastNm, 1) || (b = !0),
    !validateEl(pass, 3) || (c = !0),
    !emailValidation() || (d = !0),
    a && b && c && d ? alert("Sucessfully claimed!") : null,
    console.log(a, b, c, d);
}
function validateEl(a, b) {
  if ("email" !== a.id)
    return (
      !(1 > a.value.trim().length) ||
      void (invalid(a),
      (formdiv[b].style.height = "90px"),
      (error[b].textContent = `${a.placeholder} cannot be empty`),
      (error[b].style.opacity = "1"),
      (erroricon[b].style.opacity = "1"))
    );
}
function emailValidation() {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    ? ((email.parentNode.nextSibling.nextSibling.style.opacity = "0"),
      email.classList.remove("invalid"),
      !0)
    : (invalid(email),
      (error[2].textContent = `${email.placeholder} invalid`),
      (error[2].style.opacity = "1"),
      (formdiv[2].style.height = "90px"),
      (erroricon[2].style.opacity = "1"),
      !1);
}
function invalid(a) {
  a.classList.add("invalid");
}
function resetInputStyle(a) {
  formdiv.forEach((a) => {
    a.style.height = "70px";
  }),
    error.forEach((a) => {
      a.style.opacity = "0";
    }),
    (a.parentNode.nextSibling.nextSibling.style.opacity = "0"),
    a.classList.remove("invalid");
}
function elementIndex(a) {
  if ("fname" === a) return 0;
  return "lname" === a ? 1 : "email" === a ? 2 : "pass" === a ? 3 : void 0;
}
