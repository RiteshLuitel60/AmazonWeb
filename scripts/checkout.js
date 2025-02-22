import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";

import "../data/cart-class.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";

renderOrderSummary();
renderPaymentSummary();
renderCheckoutHeader();
