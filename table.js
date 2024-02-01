const color = document.querySelector(".color");
const quantity = document.querySelector(".quantity");
const size = document.querySelector(".size");
const CartNumber = document.querySelector("#cartNumber");
const addToCart = document.querySelector(".add-to-cart");
const tableBody = document.querySelector("tbody");
addToCart.addEventListener("click", () => {
  if (addToCart.textContent == "Remove from Cart") {
    CartNumber.textContent = 0;
    addToCart.textContent = "ADD TO CART";
    localStorage.removeItem("color");
    localStorage.removeItem("quantity");
    localStorage.removeItem("size");
  } else {
    CartNumber.textContent = 1;
    console.log(color.value, size.value, quantity.value);
    localStorage.setItem("color", color.value);
    localStorage.setItem("quantity", quantity.value);
    localStorage.setItem("size", size.value);
    addToCart.textContent = "Remove from Cart";
  }
});

const updateDisplay = () => {
  if (localStorage.getItem("color")) {
    CartNumber.textContent = 1;
    addToCart.textContent = "Remove from Cart";
  }
};
updateDisplay();
