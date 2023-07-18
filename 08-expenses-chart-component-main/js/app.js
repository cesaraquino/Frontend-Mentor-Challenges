const responseHTML = document.querySelector(".expenses-chart");
const totalAmountElement = document.querySelector(".expenses-total h1");
const totalAmount = parseFloat(totalAmountElement.textContent.replace("$", ""));
const chartBar = document.querySelector(".chart-bar");

let lastChartAmount = null;

responseHTML.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("chart-bar")) {
    const chartAmount = target.querySelector(".chart-amount");

    if (lastChartAmount !== null) {
      lastChartAmount.classList.remove("show");
    }

    chartAmount.classList.toggle("show");
    lastChartAmount = chartAmount;
  }
});

fetch("./data.json")
  .then((response) => response.json())
  .then((amounts) => {
    const currentDate = new Date();
    const currentDay = currentDate
      .toLocaleString("en-us", { weekday: "short" })
      .toLocaleLowerCase();

    for (let key in amounts) {
      let amountDay = amounts[key];
      let isActive = amountDay.day === currentDay ? "active" : "";
      let percent = (amountDay.amount / totalAmount) * 100;
      let element = `
        <div class="chart-col ${isActive}">
          <div class="chart-bar" style="height: ${percent}%">
            <p class="chart-amount">$${amountDay.amount}</p>
          </div>
          <p class="chart-day">${amountDay.day}</p>
        </div>
      `;
      responseHTML.innerHTML += element;
    }
  });
