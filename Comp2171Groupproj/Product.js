class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  getStock() {
    return this.stock;
  }
}
