const newsletterSubscribe = document.querySelector(".newsletter-content");
const formSubscribe = document.querySelector(".newsletter-form");
const inputEmail = document.querySelector(".newsletter-email");
const buttonSubmit = document.querySelector(".newsletter-button");
const buttonDismiss = document.querySelector(".dismiss-button");
const errorMsg = document.querySelector(".error-message");
const successMsg = document.querySelector(".newsletter-success");
const titleConfirm = successMsg.querySelector("h1");

inputEmail.addEventListener("input", () => {
  const email = inputEmail.value;
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isValidEmail = regexEmail.test(email);
  if (!isValidEmail) {
    formSubscribe.classList.add("show-error");
    buttonSubmit.disabled = true;
  } else {
    formSubscribe.classList.remove("show-error");
    buttonSubmit.disabled = false;
  }
});

function showText() {
  const previousText = document.querySelector(".newsletter-success p");

  if (previousText) {
    previousText.remove();
  }

  const textConfirm = document.createElement("p");
  textConfirm.innerHTML = `A confirmation email has been sent to <b>${inputEmail.value}</b>. Please open it and click the button inside to confirm your subscription.`;
  titleConfirm.insertAdjacentElement("afterend", textConfirm);
}

formSubscribe.addEventListener("submit", (e) => {
  e.preventDefault();
  newsletterSubscribe.classList.add("hide");
  successMsg.classList.remove("hide");
  showText();
});

buttonDismiss.addEventListener("click", (e) => {
  newsletterSubscribe.classList.remove("hide");
  successMsg.classList.add("hide");
  inputEmail.value = "";
});
