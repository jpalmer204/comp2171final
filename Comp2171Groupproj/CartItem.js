export class CartItem {
  constructor(product, quantity = 1) {
    this.product = product;
    this.quantity = quantity;
  }
  get subtotal() {
    return this.product.prive * this.quantity;
  }
}
