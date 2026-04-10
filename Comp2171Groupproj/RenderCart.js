export function renderCart(cartService) {
  const cartContainer = document.getElementById("cartContainer");
  const cartTotal = document.getElementById("cartTotal");

  if (!cartContainer || !cartTotal) return;

  cartContainer.innerHTML = "";

  const items = cartService.getCartItems();

  if (items.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "Total: $0";
    return;
  }

  items.forEach((item) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");

    cartItemDiv.innerHTML = `
            <h4>${item.product.name}</h4>
            <p>Price: $${item.product.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Subtotal: $${item.getSubtotal()}</p>
            <button class="remove-btn" data-id="${item.product.id}">Remove</button>
        `;

    cartContainer.appendChild(cartItemDiv);
  });

  cartTotal.textContent = `Total: $${cartService.getCartTotal()}`;
}
