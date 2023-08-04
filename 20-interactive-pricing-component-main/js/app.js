const pageViewsNumber = document.querySelector(".pageviews__number");
const price = document.querySelector(".price");
const pricingRange = document.querySelector(".pricing__range");
const discount = document.querySelector(".billing__check");

function getBasePrice(pricingValue) {
  if (pricingValue >= 0 && pricingValue <= 20) {
    pageViewsNumber.textContent = "10k";
    return 8;
  } else if (pricingValue >= 21 && pricingValue <= 40) {
    pageViewsNumber.textContent = "50k";
    return 12;
  } else if (pricingValue >= 41 && pricingValue <= 60) {
    pageViewsNumber.textContent = "100k";
    return 16;
  } else if (pricingValue >= 61 && pricingValue <= 80) {
    pageViewsNumber.textContent = "500k";
    return 24;
  } else {
    pageViewsNumber.textContent = "1m";
    return 36;
  }
}

function updatePrice() {
  const pricingValue = pricingRange.value;
  const basePrice = getBasePrice(pricingValue);
  const discountedPrice = discount.checked ? basePrice * 0.75 : basePrice;
  price.textContent = `$${discountedPrice.toFixed(2)}`;
}

pricingRange.addEventListener("input", () => {
  updatePrice();
  const progress = (pricingRange.value / pricingRange.max) * 100;
  pricingRange.style.background = `linear-gradient(to right, #a5f3eb ${progress}%, #eaeefb ${progress}%)`;
});

discount.addEventListener("change", () => {
  updatePrice();
});
