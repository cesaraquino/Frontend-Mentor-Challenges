const cardForm = document.querySelector(".card-form");
const cardConfirm = document.querySelector(".card-confirm");
const cardField = document.querySelector(".card-field");

const inputName = document.querySelector("[name=name]");
const inputCard = document.querySelector("[name=number]");
const inputMonth = document.querySelector("[name=month]");
const inputYear = document.querySelector("[name=year]");
const inputCVC = document.querySelector("[name=cvc]");

const cardUser = document.querySelector(".card-user");
const cardNumber = document.querySelector(".card-number");
const cardExpireMonth = document.querySelector(".card-expire-m");
const cardExpireYear = document.querySelector(".card-expire-y");
const cardCVC = document.querySelector(".card-cvc");

const buttonSubmit = document.querySelector("#button-submit");
const buttonContinue = document.querySelector("#button-continue");

const regexNumbers = /^[0-9]+$/;
const regexCard = /^[0-9\s]+$/;

let isValidName = false;
let isValidCard = false;
let isValidMonth = false;
let isValidYear = false;
let isValidCVC = false;

inputName.addEventListener("input", () => {
  if (inputName.value === "" || inputName.value.length < 5) {
    inputName.parentElement.classList.add("error");
    isValidName = false;
  } else {
    inputName.parentElement.classList.remove("error");
    cardUser.textContent = inputName.value;
    isValidName = true;
  }

  validFields();
});

inputCard.addEventListener("input", (e) => {
  if (
    inputCard.value === "" ||
    inputCard.value.replace(/ /g, "").length < 16 ||
    !inputCard.value.match(regexCard)
  ) {
    inputCard.parentElement.classList.add("error");
    isValidCard = false;
  } else {
    let val = inputCard.value.replace(/ /g, "");
    let newval = val.slice(0, 4);

    for (let i = 4; i < val.length; i += 4) {
      newval += " " + val.slice(i, i + 4);
    }

    inputCard.value = newval;
    cardNumber.textContent = newval;
    inputCard.parentElement.classList.remove("error");

    isValidCard = true;
  }

  validFields();
});

inputMonth.addEventListener("input", () => {
  const month = inputMonth.value;

  if (!month.match(regexNumbers) || month > 12) {
    inputMonth.parentElement.classList.add("error");
    isValidMonth = false;
  } else {
    if (month.length < 2) {
      cardExpireMonth.textContent = "0" + inputMonth.value;
    } else {
      cardExpireMonth.textContent = inputMonth.value;
    }

    inputMonth.parentElement.classList.remove("error");
    isValidMonth = true;
  }

  validFields();
});

inputYear.addEventListener("input", () => {
  const year = inputYear.value;
  const currentYear = new Date().getFullYear().toString();
  const yearXX = currentYear.slice(-2);

  if (!year.match(regexNumbers) || year < yearXX) {
    inputYear.parentElement.classList.add("error");
    isValidYear = false;
  } else {
    cardExpireYear.textContent = inputYear.value;
    inputYear.parentElement.classList.remove("error");
    isValidYear = true;
  }

  validFields();
});

inputCVC.addEventListener("input", () => {
  const cvc = inputCVC.value;

  if (!cvc.match(regexNumbers) || cvc.length < 3) {
    inputCVC.parentElement.classList.add("error");
    isValidCVC = false;
  } else {
    cardCVC.textContent = inputCVC.value;
    inputCVC.parentElement.classList.remove("error");
    isValidCVC = true;
  }

  validFields();
});

function validFields() {
  if (isValidName && isValidCard && isValidMonth && isValidYear && isValidCVC) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (isValidName && isValidCard && isValidMonth && isValidYear && isValidCVC) {
    cardForm.classList.add("hide");
    cardConfirm.classList.remove("hide");
  }
});

buttonContinue.addEventListener("click", (e) => {
  e.preventDefault();
  cardForm.classList.remove("hide");
  cardForm.reset();
  cardConfirm.classList.add("hide");

  cardNumber.textContent = "0000 0000 0000 0000";
  cardUser.textContent = "Jane Appleseed";
  cardExpireMonth.textContent = "00";
  cardExpireYear.textContent = "00";
  cardCVC.textContent = "00";
});
