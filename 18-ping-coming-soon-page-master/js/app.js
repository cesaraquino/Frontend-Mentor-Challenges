const formSubscribe = document.querySelector(".form__subscribe");
const inputEmail = document.querySelector(".input__email");
const buttonSubmit = document.querySelector(".button__submit");
const success = document.querySelector(".success__message");

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
