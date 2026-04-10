class ProductService {
  constructor() {
    this.products = JSON.parse(localStorage.getItem("products")) || [];
  }

  addProduct(product) {
    this.products.push(product);
    localStorage.setItem("products", JSON.stringify(this.products));
  }

  getProducts() {
    return this.products;
  }

  deleteProduct(index) {
    this.products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(this.products));
  }
}
s;
