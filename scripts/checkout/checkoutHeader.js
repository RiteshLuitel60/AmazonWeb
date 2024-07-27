import { currentCartQuantity } from "../../data/cart.js";
export function renderCheckoutHeader() {
  let quantity = currentCartQuantity();
  document.querySelector(
    ".js-return-home-link"
  ).innerHTML = ` ${quantity} Items`;
}
