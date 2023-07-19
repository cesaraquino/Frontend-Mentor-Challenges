const ratVote = document.querySelector("#ratingVote");
const ratConfirm = document.querySelector("#ratingConfirm");
const ratingConfirm = document.querySelector(".rating-confirm h5");
const ratingButton = document.querySelector(".rating-button");

ratingButton.addEventListener("click", (e) => {
  e.preventDefault();
  const ratingOption = document.querySelector("input[name=rating]:checked");

  if (ratingOption) {
    ratingConfirm.textContent = `You selected ${ratingOption.value} out of 5`;
    ratVote.classList.add("hide");
    ratConfirm.classList.remove("hide");
  }
});
