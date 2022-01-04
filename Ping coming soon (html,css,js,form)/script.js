const notifyBtn = document.querySelector("button"),
  emailInput = document.querySelector("input"),
  invalidEmailMsg = document.querySelector(".invalid");
notifyBtn.addEventListener("click", (a) => {
  a.preventDefault(), validateEmail(emailInput.value), (emailInput.value = "");
});
function validateEmail(a) {
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a)
    ? ((emailInput.placeholder = "Email set up successfully!"),
      (invalidEmailMsg.style.display = "none"),
      (emailInput.style.borderColor = ""),
      setTimeout(() => {
        emailInput.placeholder = "Your email address...";
      }, 2e3))
    : ((invalidEmailMsg.style.display = "block"),
      (notifyBtn.style.marginBottom = "-27px"),
      (emailInput.style.borderColor = "hsl(354, 100%, 66%)"),
      console.log("email invalid"));
}
