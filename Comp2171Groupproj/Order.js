export class Order {
  constructor(customer, items, total, paymentMethod) {
    this.customer = customer;
    this.items = items;
    this.total = total;
    this.paymentMethod = paymentMethod;
    this.status = "Pending";
  }
}
