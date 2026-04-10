function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = new User(username, password);
    const authService = new AuthService();

    const message = document.getElementById("message");

    if (authService.login(user)) {
        message.style.color = "lightgreen";
        message.innerText = "Login Successful!";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    } else {
        message.style.color = "red";
        message.innerText = "Invalid credentials!";
    }
}
/* ================= CART + CHECKOUT ================= */

document.addEventListener("DOMContentLoaded", function () {

    const viewCartBtn = document.getElementById("viewCartBtn");
    const cartSection = document.getElementById("cartSection");
    const checkoutBtn = document.getElementById("checkoutBtn");
    const checkoutSection = document.getElementById("checkoutSection");
    const checkoutForm = document.getElementById("checkoutForm");

    // sample data so cart is not empty
    const cartItems = [
        { name: "Dash Cam A", price: 120, qty: 1 },
        { name: "Dash Cam B", price: 180, qty: 2 }
    ];

    // open cart
    if (viewCartBtn) {
        viewCartBtn.addEventListener("click", function () {
            cartSection.classList.toggle("hidden");
            renderCart(cartItems);
        });
    }

    // open checkout
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", function () {
            checkoutSection.classList.remove("hidden");
        });
    }

    // submit checkout
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", function (e) {
            e.preventDefault();

            document.getElementById("confirmationMessage").innerText =
                "Order placed successfully!";
        });
    }
});


/* ================= RENDER CART ================= */

function renderCart(items) {
    const cartContainer = document.getElementById("cartContainer");
    const cartTotal = document.getElementById("cartTotal");

    cartContainer.innerHTML = "";

    let total = 0;

    items.forEach(function (item) {
        const div = document.createElement("div");

        div.classList.add("card");

        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.qty}</p>
        `;

        cartContainer.appendChild(div);

        total += item.price * item.qty;
    });

    cartTotal.innerText = "Total: $" + total;
}
