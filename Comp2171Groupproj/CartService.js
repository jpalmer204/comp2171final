import { Cart } from "./Cart";

export class CartService {
  constructor() {
    this.cart = new Cart();
  }

  addToCart(product, quantity = 1) {
    this.cart.addItem(product, quantity);
  }

  removeFromCart(productId) {
    this.cart.removeItem(productId);
  }

  updateItemQuantity(productId, quantity) {
    this.cart.updateQuantity(productId, quantity);
  }

  getCartItems() {
    return this.cart.getItems();
  }

  getCartTotal() {
    return this.cart.getTotal();
  }

  clearCart() {
    this.cart.clearCart();
  }

  isCartEmpty() {
    return this.cart.isEmpty();
  }
}
