fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const timeframeLinks = document.querySelectorAll(".db-time-link");
    const resultContainer = document.querySelector(".db-activities");

    function displayData(timeframe) {
      const activityData = data.map((activity) => ({
        title: activity.title,
        current: activity.timeframes[timeframe].current,
        previous: activity.timeframes[timeframe].previous,
      }));

      let content = "";
      activityData.forEach((activity) => {
        const timeframeLabel =
          timeframe === "daily"
            ? "Yesterday"
            : timeframe === "weekly"
            ? "Last week"
            : "Last month";

        content += `
          <div class="db-activity db-activity-${activity.title
            .toLowerCase()
            .replace(/\s/g, "")}">
            <div class="db-activity-info">
              <div class="db-activity-name">
                <h3>${activity.title}</h3>
                <a href="" class="db-activity-option">
                  <img src="images/icon-ellipsis.svg" alt="" />
                </a>
              </div>
              <div class="db-activity-hs">
                <h2 class="db-activity-hours">${activity.current}hrs</h2>
                <p class="db-activity-summary">${timeframeLabel} - ${
          activity.previous
        }hrs</p>
              </div>
            </div>
          </div>
        `;
      });

      resultContainer.innerHTML = content;

      timeframeLinks.forEach((link) => {
        link.classList.remove("active");
      });

      const selectedLink = document.querySelector(
        `[data-timeframe="${timeframe}"]`
      );
      selectedLink.classList.add("active");
    }

    timeframeLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const timeframe = link.getAttribute("data-timeframe");
        displayData(timeframe);
      });
    });

    displayData("daily");
  })
  .catch((error) => console.error("Error al cargar el archivo JSON:", error));
