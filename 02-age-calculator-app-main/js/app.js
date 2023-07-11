const form = document.querySelector(".agecalc-form");
const calculateBtn = document.querySelector(".agecalc-button");
const resultYears = document.querySelector(".agecalc-years span");
const resultMonths = document.querySelector(".agecalc-months span");
const resultDays = document.querySelector(".agecalc-days span");
const errorMsg = document.querySelectorAll(".error-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  calculateAge();
});

calculateBtn.addEventListener("click", calculateAge);

function calculateAge() {
  const day = parseInt(document.querySelector(".agecalc-day").value);
  const month = parseInt(document.querySelector(".agecalc-month").value);
  const year = parseInt(document.querySelector(".agecalc-year").value);

  // Reset error messages
  errorMsg.forEach((error, index) => {
    error.textContent = "";
    error.classList.remove("show");
    const label = error.parentElement;
    if (label.classList.contains("invalid")) {
      label.classList.remove("invalid");
    }
  });

  if (!isValidDate(day, month, year)) {
    if (!day || day < 1 || day > 31 || !isValidDayInMonth(day, month, year)) {
      errorMsg[0].classList.add("show");
      errorMsg[0].textContent = "Must be a valid day";
      const label = errorMsg[0].parentElement;
      label.classList.add("invalid");
    }
    if (!month || month < 1 || month > 12) {
      errorMsg[1].classList.add("show");
      errorMsg[1].textContent = "Must be a valid month";
      const label = errorMsg[1].parentElement;
      label.classList.add("invalid");
    }
    if (!year || isNaN(year) || !isValidYear(year)) {
      errorMsg[2].classList.add("show");
      errorMsg[2].textContent = "Must be a valid year";
      const label = errorMsg[2].parentElement;
      label.classList.add("invalid");
    }
    if (isFutureDate(day, month, year)) {
      errorMsg[2].classList.add("show");
      errorMsg[2].textContent = "Must be in the past";
      const label = errorMsg[2].parentElement;
      label.classList.add("invalid");
    }
    return;
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  let years = currentYear - year;
  let months = currentMonth - month;
  let days = currentDay - day;

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    const daysInPreviousMonth = getDaysInMonth(currentMonth - 1, currentYear);
    days += daysInPreviousMonth;
    months--;
  }

  // Check if birth date is in the future
  if (isFutureDate(day, month, year)) {
    years = 0;
    months = 0;
    days = 0;
    errorMsg[2].classList.add("show");
    errorMsg[2].textContent = "Must be in the past";
  }

  resultYears.textContent = years;
  resultMonths.textContent = months;
  resultDays.textContent = days;
}

function isValidDate(day, month, year) {
  if (month < 1 || month > 12) {
    return false;
  }

  if (day < 1 || day > 31) {
    return false;
  }

  // Validate February in leap years
  if (month === 2) {
    if (day > 29) {
      return false;
    }
    if (day === 29 && !isLeapYear(year)) {
      return false;
    }
  }

  // Validate months with 30 days
  if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
    return false;
  }

  return true;
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function isValidDayInMonth(day, month, year) {
  const daysInMonth = new Date(year, month, 0).getDate();
  return day <= daysInMonth;
}

function isValidYear(year) {
  const currentYear = new Date().getFullYear();
  return year <= currentYear;
}

function isFutureDate(day, month, year) {
  const currentDate = new Date();
  const selectedDate = new Date(year, month - 1, day);

  currentDate.setHours(0, 0, 0, 0);
  selectedDate.setHours(0, 0, 0, 0);

  return selectedDate >= currentDate;
}
