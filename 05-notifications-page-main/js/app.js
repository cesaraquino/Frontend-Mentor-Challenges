const markAllAsRead = document.querySelector("#mark-read");
const unreadNotifications = document.querySelectorAll(".unread");
const markAsRead = document.querySelector(".notifications-item");
const unreadNumber = document.querySelector(".notifications-unread");

function updateCount() {
  const count = document.querySelectorAll(".unread").length;
  unreadNumber.textContent = count;
}

updateCount();

markAllAsRead.addEventListener("click", (e) => {
  e.preventDefault();
  unreadNotifications.forEach((article) => article.classList.remove("unread"));
  updateCount();
});

unreadNotifications.forEach((article) =>
  article.addEventListener("click", () => {
    article.classList.remove("unread");
    updateCount();
  })
);
