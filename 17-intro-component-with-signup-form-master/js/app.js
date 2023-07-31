const signupForm = document.querySelector(".signup-form");

const firstName = document.querySelector("[name=first-name]");
const lastName = document.querySelector("[name=last-name]");
const email = document.querySelector("[name=email]");
const password = document.querySelector("[name=password]");
const signupButton = document.querySelector(".signup-button");

const regex =
  /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

let isValidFirstName = false;
let isValidLastName = false;
let isValidEmail = false;
let isValidPassword = false;

const addErrorClass = (element) => {
  element.parentElement.classList.add("error");
};

const removeErrorClass = (element) => {
  element.parentElement.classList.remove("error");
};

const isFieldEmpty = (value) => {
  return value.trim() === "";
};

const validateFirstName = () => {
  const value = firstName.value;

  if (isFieldEmpty(value)) {
    addErrorClass(firstName);
    isValidFirstName = false;
  } else {
    removeErrorClass(firstName);
    isValidFirstName = true;
  }

  validFields();
};

const validateLastName = () => {
  const value = lastName.value;

  if (isFieldEmpty(value)) {
    addErrorClass(lastName);
    isValidLastName = false;
  } else {
    removeErrorClass(lastName);
    isValidLastName = true;
  }

  validFields();
};

const validateEmail = () => {
  const regexEmail = email.value;

  if (!regexEmail.match(regex)) {
    addErrorClass(email);
    isValidEmail = false;
  } else {
    removeErrorClass(email);
    isValidEmail = true;
  }

  validFields();
};

const validatePassword = () => {
  const value = password.value;

  if (isFieldEmpty(value)) {
    addErrorClass(password);
    isValidPassword = false;
  } else {
    removeErrorClass(password);
    isValidPassword = true;
  }

  validFields();
};

firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);

const validFields = () => {
  if (isValidFirstName && isValidLastName && isValidEmail && isValidPassword) {
    signupButton.disabled = false;
  } else {
    signupButton.disabled = true;
  }
};

const resetForm = () => {
  signupForm.reset();
  isValidFirstName = false;
  isValidLastName = false;
  isValidEmail = false;
  isValidPassword = false;
  validFields();
};

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isValidFirstName && isValidLastName && isValidEmail && isValidPassword) {
    alert(`Usuario ${email.value} Registrado.`);
    resetForm();
  }
});
