
/**
 * ShopSphere
 * Shopping Cart Module
 *
 * Handles:
 * - Adding products
 * - Removing products
 * - Updating quantities
 * - Calculating totals
 * - Saving cart data
 */

const STORAGE_KEY = "shopsphere_cart";

let cart = loadCart();

/**
 * Load saved cart from Local Storage.
 */
function loadCart() {

    try {
        const savedCart = localStorage.getItem(STORAGE_KEY);

        const parsedCart = savedCart
            ? JSON.parse(savedCart)
            : [];

        if (!Array.isArray(parsedCart)) {
            return [];
        }

        return parsedCart.filter(item =>
            Number.isInteger(item.id) &&
            Number.isInteger(item.quantity) &&
            item.quantity > 0 &&
            products.some(product => product.id === item.id)
        );

    } catch (error) {

        console.error("Unable to load cart:", error);
        return [];

    }

}

/**
 * Save cart to Local Storage.
 */
function saveCart() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(cart)
    );

}

/**
 * Add a product to the cart.
 */
function addToCart(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product) return;

    const existingItem = cart.find(
        item => item.id === productId
    );

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            id: productId,
            quantity: 1
        });

    }

    saveCart();

    renderCart();

}

/**
 * Remove a product completely.
 */
function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    saveCart();

    renderCart();

}

/**
 * Change the quantity of a product.
 */
function updateCartQuantity(productId, change) {

    const item = cart.find(
        product => product.id === productId
    );

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;

    }

    saveCart();

    renderCart();

}

/**
 * Calculate the number of products.
 */
function getCartCount() {

    return cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

}

/**
 * Calculate the cart subtotal.
 */
function getCartTotal() {

    return cart.reduce((total, item) => {

        const product = products.find(
            product => product.id === item.id
        );

        return total + (
            product.price * item.quantity
        );

    }, 0);

}

/**
 * Format currency.
 */
function formatCurrency(amount) {

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(amount);

}

/**
 * Render cart contents.
 */
function renderCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const subtotal = document.getElementById("cart-subtotal");

    if (!cartItems) return;

    cartCount.textContent = getCartCount();

    subtotal.textContent = formatCurrency(
        getCartTotal()
    );

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="cart-empty">
                <h3>Your cart is empty</h3>
                <p>Discover something you love.</p>
            </div>
        `;

        return;

    }

    cartItems.innerHTML = cart.map(item => {

        const product = products.find(
            product => product.id === item.id
        );

        if (!product) return "";

        return `
            <div class="cart-item">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div>

                    <h4>${product.name}</h4>

                    <p class="cart-item-price">
                        ${formatCurrency(product.price * item.quantity)}
                    </p>

                    <div class="cart-item-controls">

                        <button
                            class="quantity-button"
                            data-action="decrease"
                            data-id="${product.id}"
                            aria-label="Decrease quantity"
                        >−</button>

                        <span class="quantity-number">
                            ${item.quantity}
                        </span>

                        <button
                            class="quantity-button"
                            data-action="increase"
                            data-id="${product.id}"
                            aria-label="Increase quantity"
                        >+</button>

                        <button
                            class="remove-item"
                            data-action="remove"
                            data-id="${product.id}"
                        >
                            Remove
                        </button>

                    </div>

                </div>

            </div>
        `;

    }).join("");

}

/**
 * Handle cart quantity and removal actions.
 */
document.getElementById("cart-items")
    .addEventListener("click", event => {

        const button = event.target.closest("button");

        if (!button) return;

        const productId = Number(button.dataset.id);

        const action = button.dataset.action;

        if (action === "increase") {
            updateCartQuantity(productId, 1);
        }

        if (action === "decrease") {
            updateCartQuantity(productId, -1);
        }

        if (action === "remove") {
            removeFromCart(productId);
        }

    });
