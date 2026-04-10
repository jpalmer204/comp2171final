import { CartItem } from "./cartItem";

export class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity = 1) {
    const existingItem = this.items.find(
      (item) => item.product.id == product.id,
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new CartItem(product, quantity));
    }
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find((item) => item.product.id === productId);

    if (!item) return;

    if (quantity <= 0) {
      this.removeItem(productId);
    } else {
      item.quantity = quantity;
    }
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.getsubtotal(), 0);
  }

  clearCart() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
