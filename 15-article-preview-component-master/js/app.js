const shareTo = document.querySelector(".share-to");
const shareLinks = document.querySelector(".share-links");

shareTo.addEventListener("click", (e) => {
  e.preventDefault();
  shareLinks.classList.toggle("hide");
  shareTo.classList.toggle("active");
});
