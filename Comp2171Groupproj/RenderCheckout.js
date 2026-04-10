export function renderCheckoutMessage(order) {
  const confirmationMessage = document.getElementById("confirmationMessage");

  if (!confirmationMessage) return;

  confirmationMessage.innerHTML = `
        <h3>Order placed successfully</h3>
        <p>Name: ${order.customer.name}</p>
        <p>Email: ${order.customer.email}</p>
        <p>Address: ${order.customer.address}</p>
        <p>Payment Method: ${order.paymentMethod}</p>
        <p>Total: $${order.total}</p>
    `;
}
