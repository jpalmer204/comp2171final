import { Order } from "./Order";

export class CheckoutService {
  constructor(cartService) {
    this.cartService = cartService;
  }

  createOrder(customer, paymentMethod) {
    const items = this.cartService.getCartItems();
    const total = this.cartService.getCartTotal();

    if (items.length === 0) {
      throw new Error("Cart is empty.");
    }

    return new Order(customer, items, total, paymentMethod);
  }

  completeCheckout(customer, paymentMethod) {
    const order = this.createOrder(customer, paymentMethod);
    this.cartService.clearCart();
    return order;
  }
}
