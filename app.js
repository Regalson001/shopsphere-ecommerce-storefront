
/**
 * ShopSphere
 * Main Application Controller
 *
 * Handles:
 * - Product rendering
 * - Search
 * - Category filtering
 * - Price filtering
 * - Rating filtering
 * - Sorting
 * - Cart drawer interactions
 */

const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const priceFilter = document.getElementById("price-filter");
const ratingFilter = document.getElementById("rating-filter");

const resultsCount = document.getElementById("results-count");
const emptyState = document.getElementById("empty-state");

const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");

let selectedCategory = "all";

/**
 * Format product currency.
 */
function displayPrice(price) {

    return formatCurrency(price);

}

/**
 * Generate star ratings.
 */
function generateStars(rating) {

    const fullStars = Math.floor(rating);

    const hasHalfStar = rating - fullStars >= 0.5;

    return (
        "★".repeat(fullStars) +
        (hasHalfStar ? "½" : "")
    );

}

/**
 * Create product card.
 */
function createProductCard(product) {

    return `
        <article class="product-card">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="product-badge">
                    ${product.badge}
                </span>

            </div>

            <div class="product-details">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <div class="product-rating">

                    ${generateStars(product.rating)}

                    <span class="rating-number">
                        ${product.rating.toFixed(1)}
                    </span>

                </div>

                <div class="product-bottom">

                    <span class="product-price">
                        ${displayPrice(product.price)}
                    </span>

                    <button
                        class="add-cart-button"
                        data-product-id="${product.id}"
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        </article>
    `;

}

/**
 * Get filtered products.
 */
function getFilteredProducts() {

    const searchTerm = searchInput.value
        .trim()
        .toLowerCase();

    const maxPrice = Number(priceFilter.value);

    const minimumRating = Number(ratingFilter.value);

    let filteredProducts = products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm);

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        const matchesPrice =
            product.price <= maxPrice;

        const matchesRating =
            product.rating >= minimumRating;

        return (
            matchesSearch &&
            matchesCategory &&
            matchesPrice &&
            matchesRating
        );

    });

    return filteredProducts;

}

/**
 * Sort products.
 */
function sortProducts(productList) {

    const sortValue = sortSelect.value;

    const sorted = [...productList];

    switch (sortValue) {

        case "price-low":

            sorted.sort((a, b) => a.price - b.price);

            break;

        case "price-high":

            sorted.sort((a, b) => b.price - a.price);

            break;

        case "rating":

            sorted.sort((a, b) => b.rating - a.rating);

            break;

        case "name":

            sorted.sort((a, b) =>
                a.name.localeCompare(b.name)
            );

            break;

        default:

            break;

    }

    return sorted;

}

/**
 * Render products.
 */
function renderProducts() {

    const filteredProducts = getFilteredProducts();

    const sortedProducts = sortProducts(filteredProducts);

    resultsCount.textContent =
        `Showing ${sortedProducts.length} of ${products.length} products`;

    if (sortedProducts.length === 0) {

        productGrid.innerHTML = "";

        emptyState.classList.remove("hidden");

        return;

    }

    emptyState.classList.add("hidden");

    productGrid.innerHTML = sortedProducts
        .map(createProductCard)
        .join("");

}

/**
 * Search interaction.
 */
searchInput.addEventListener("input", renderProducts);

/**
 * Sorting interaction.
 */
sortSelect.addEventListener("change", renderProducts);

/**
 * Price interaction.
 */
priceFilter.addEventListener("input", () => {

    document.getElementById("price-value").textContent =
        formatCurrency(Number(priceFilter.value));

    renderProducts();

});

/**
 * Rating interaction.
 */
ratingFilter.addEventListener("change", renderProducts);

/**
 * Category sidebar interaction.
 */
document.querySelectorAll('input[name="category"]')
    .forEach(input => {

        input.addEventListener("change", () => {

            selectedCategory = input.value;

            updateCategoryButtons();

            renderProducts();

        });

    });

/**
 * Category buttons interaction.
 */
document.querySelectorAll(".category-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            selectedCategory = button.dataset.category;

            document.querySelectorAll('input[name="category"]')
                .forEach(input => {

                    input.checked =
                        input.value === selectedCategory;

                });

            updateCategoryButtons();

            renderProducts();

        });

    });

/**
 * Keep category buttons synchronized.
 */
function updateCategoryButtons() {

    document.querySelectorAll(".category-button")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.category === selectedCategory
            );

        });

}

/**
 * Product add-to-cart interaction.
 */
productGrid.addEventListener("click", event => {

    const button = event.target.closest(".add-cart-button");

    if (!button) return;

    const productId = Number(button.dataset.productId);

    addToCart(productId);

    const originalText = button.textContent;

    button.textContent = "Added ✓";

    button.disabled = true;

    setTimeout(() => {

        button.textContent = originalText;

        button.disabled = false;

    }, 800);

});

/**
 * Clear all filters.
 */
function clearFilters() {

    searchInput.value = "";

    sortSelect.value = "featured";

    priceFilter.value = 1000;

    ratingFilter.value = 0;

    selectedCategory = "all";

    document.querySelector(
        'input[name="category"][value="all"]'
    ).checked = true;

    document.getElementById("price-value").textContent =
        formatCurrency(1000);

    updateCategoryButtons();

    renderProducts();

}

document.getElementById("clear-filters")
    .addEventListener("click", clearFilters);

document.getElementById("reset-search")
    .addEventListener("click", clearFilters);

/**
 * Open shopping cart.
 */
function openCart() {

    cartDrawer.classList.add("open");

    cartOverlay.classList.add("open");

    cartDrawer.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

}

/**
 * Close shopping cart.
 */
function closeCart() {

    cartDrawer.classList.remove("open");

    cartOverlay.classList.remove("open");

    cartDrawer.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}

document.getElementById("cart-toggle")
    .addEventListener("click", openCart);

document.getElementById("close-cart")
    .addEventListener("click", closeCart);

document.getElementById("continue-shopping")
    .addEventListener("click", closeCart);

cartOverlay.addEventListener("click", closeCart);

/**
 * Escape key closes cart.
 */
document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeCart();

    }

});

/**
 * Mobile navigation.
 */
document.getElementById("menu-toggle")
    .addEventListener("click", () => {

        document.getElementById("navigation")
            .classList.toggle("open");

    });

/**
 * Close mobile navigation after selecting a link.
 */
document.querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            document.getElementById("navigation")
                .classList.remove("open");

        });

    });

/**
 * Demo checkout.
 *
 * This is not a real payment integration.
 */
document.getElementById("checkout-button")
    .addEventListener("click", () => {

        if (cart.length === 0) {

            alert("Your shopping cart is empty.");

            return;

        }

        alert(
            "Thank you for exploring ShopSphere! " +
            "Checkout is currently a demonstration."
        );

    });

/**
 * Footer year.
 */
document.getElementById("current-year").textContent =
    new Date().getFullYear();

/**
 * Application initialization.
 */
renderProducts();

renderCart();

document.getElementById("price-value").textContent =
    formatCurrency(1000);
