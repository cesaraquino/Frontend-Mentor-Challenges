const formSubscribe = document.querySelector(".form-subscribe");
const inputEmail = document.querySelector(".input-email");
const buttonSubmit = document.querySelector(".button-subscribe");
const success = document.querySelector(".form-success");

inputEmail.addEventListener("input", () => {
  const email = inputEmail.value;
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isValidEmail = regexEmail.test(email);
  if (!isValidEmail) {
    formSubscribe.classList.add("error");
    buttonSubmit.disabled = true;
  } else {
    formSubscribe.classList.remove("error");
    buttonSubmit.disabled = false;
  }
});

formSubscribe.addEventListener("submit", (e) => {
  e.preventDefault();
  formSubscribe.classList.add("hide");
  success.classList.remove("hide");
});
