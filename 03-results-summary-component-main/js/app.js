function showScore(valor) {
  const scoreUser = document.querySelector(".score-user");

  for (let i = 0; i <= valor; i++) {
    setTimeout(() => {
      scoreUser.textContent = i;
    }, i * 10);
  }
}

showScore(76);

const responseHTML = document.querySelector(".summary ul");

fetch("./data.json")
  .then((response) => response.json())
  .then((summary) => {
    for (let key in summary) {
      let summaryType = summary[key];
      let category = summaryType.category.toLowerCase();
      let element = `
        <li class="summary-${category}">
          <p class="summary-type">
            <img src="assets/images/icon-${category}.svg" alt="${summaryType.category}" />
            ${summaryType.category}
          </p>
          <p class="summary-score">
            <span>${summaryType.score}</span>
            / 100
          </p>
        </li>
      `;
      responseHTML.innerHTML += element;
    }
  });
