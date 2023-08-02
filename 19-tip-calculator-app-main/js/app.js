const inputBill = document.querySelector("[name=input-bill]");
const tipPercentCustom = document.querySelector("[name=tip-percent-custom]");
const numberPeople = document.querySelector("[name=number-people]");

const tipAmount = document.querySelector("#tip-person");
const tipTotal = document.querySelector("#tip-total");

const buttonReset = document.querySelector(".button__reset");
const radioButtons = document.querySelectorAll("input[name=tip-percent]");

function tipCalculate() {
  const tipPercent = document.querySelector("input[name=tip-percent]:checked");

  let bill = parseFloat(inputBill.value);
  let percentCustom = parseFloat(tipPercentCustom.value);
  let people = parseInt(numberPeople.value);

  if (
    isNaN(bill) ||
    (tipPercent === null && isNaN(percentCustom)) ||
    isNaN(people)
  ) {
    tipAmount.textContent = "$0.00";
    tipTotal.textContent = "$0.00";
    return;
  }

  if (people === 0) {
    numberPeople.parentElement.classList.add("danger");

    tipAmount.textContent = "$0.00";
    tipTotal.textContent = "$0.00";
    return;
  } else {
    numberPeople.parentElement.classList.remove("danger");
  }

  let percent = tipPercent ? parseFloat(tipPercent.value) : percentCustom;

  if (isNaN(percent)) {
    return;
  }

  let tipValue = bill * (percent / 100);
  tipAmount.textContent = `$${(tipValue / people).toFixed(2)}`;

  let total = bill + tipValue;
  tipTotal.textContent = `$${(total / people).toFixed(2)}`;
}

function clearRadioButtons() {
  radioButtons.forEach((radio) => (radio.checked = false));
}

inputBill.addEventListener("change", tipCalculate);
tipPercentCustom.addEventListener("input", () => {
  radioButtons.forEach((radio) => (radio.checked = false));
  tipCalculate();
});
numberPeople.addEventListener("change", tipCalculate);

radioButtons.forEach((radio) => {
  radio.addEventListener("change", () => {
    tipPercentCustom.value = "";
    tipCalculate();
  });
});

buttonReset.addEventListener("click", () => {
  inputBill.value = "";
  tipPercentCustom.value = "";
  numberPeople.value = "";

  tipAmount.textContent = "$0.00";
  tipTotal.textContent = "$0.00";

  clearRadioButtons();

  numberPeople.parentElement.classList.remove("danger");
});
