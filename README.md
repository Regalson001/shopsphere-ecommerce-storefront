
# ShopSphere – Interactive E-Commerce Storefront

![Project](https://img.shields.io/badge/Project-E--Commerce-blue)
![HTML5](https://img.shields.io/badge/HTML5-Structure-orange)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow)
![Status](https://img.shields.io/badge/Status-Development-green)

## Overview

ShopSphere is a modern, responsive and interactive e-commerce storefront built using HTML5, CSS3 and vanilla JavaScript.

The project demonstrates practical front-end development skills through a functional product catalogue, dynamic search, category filtering, price filtering, rating-based filtering, product sorting and interactive shopping cart management.

The application focuses on clean user interface design, modular JavaScript architecture, reusable functions and efficient client-side data processing.

It is designed as a portfolio project demonstrating the practical application of front-end development concepts in a realistic online shopping environment.

---

## Project Objectives

The primary objectives of ShopSphere are to:

- Develop a responsive e-commerce storefront.
- Implement dynamic product rendering.
- Build real-time product search functionality.
- Implement multiple filtering mechanisms.
- Demonstrate JavaScript array manipulation.
- Develop an interactive shopping cart.
- Implement quantity management and price calculations.
- Persist shopping cart data using browser Local Storage.
- Organize application code into maintainable modules.

---

## Key Features

### 1. Dynamic Product Catalogue

The application displays products using JavaScript-generated product cards.

Each product contains:

- Product name
- Product category
- Product image
- Product price
- Customer rating
- Product badge

### 2. Real-Time Product Search

Users can search for products using their names or categories.

The catalogue updates dynamically as the user types.

### 3. Advanced Product Filtering

The application supports:

- Category filtering
- Maximum price filtering
- Minimum rating filtering
- Combined filtering conditions

### 4. Product Sorting

Products can be sorted by:

- Featured order
- Lowest price
- Highest price
- Highest customer rating
- Alphabetical order

### 5. Interactive Shopping Cart

Users can:

- Add products to their cart.
- Increase product quantities.
- Decrease product quantities.
- Remove products.
- View the number of selected items.
- View the automatically calculated subtotal.

### 6. Local Storage Persistence

The application uses browser Local Storage to preserve cart information between page refreshes.

Cart contents are restored when the user returns to the storefront using the same browser.

### 7. Responsive User Interface

The interface adapts to desktop, tablet and mobile screen sizes.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Styling and responsive layouts |
| JavaScript ES6+ | Application logic and interactions |
| DOM API | Dynamic interface updates |
| Local Storage | Cart data persistence |
| Google Fonts | Typography |
| Unsplash | Demonstration product imagery |

No front-end framework or external JavaScript dependency is required.

---

## Project Architecture

```text
shopsphere-ecommerce-storefront/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── products.js
│   ├── cart.js
│   └── app.js
│
├── README.md
│
└── .gitignore
```

### File Responsibilities

**index.html**

Defines the storefront structure, navigation, product area, filter controls, cart drawer and footer.

**css/styles.css**

Contains the visual design system, product cards, responsive layouts, shopping cart styling and interactive states.

**js/products.js**

Stores the product catalogue and associated product information.

**js/cart.js**

Manages cart operations, quantity updates, subtotal calculations and Local Storage persistence.

**js/app.js**

Controls product rendering, search, filtering, sorting, category selection and user interface interactions.

---

## JavaScript Concepts Demonstrated

ShopSphere demonstrates several important JavaScript concepts.

### Array Methods

**Array.filter()**

Used to filter products according to search terms, categories, prices and customer ratings.

**Array.map()**

Used to generate product cards and shopping cart elements dynamically.

**Array.reduce()**

Used to calculate the total number of cart items and the shopping cart subtotal.

**Array.find()**

Used to retrieve individual products and cart entries.

**Array.sort()**

Used to implement product sorting.

**Array.some()**

Used to validate stored cart product references.

### DOM Manipulation

The project uses JavaScript DOM methods to:

- Generate product cards.
- Update shopping cart contents.
- Change interface states.
- Handle user interactions.
- Synchronize category controls.

### Browser Storage

Local Storage is used to save and restore cart data.

---

## Installation and Setup

### Prerequisites

You need:

- Visual Studio Code
- A modern web browser
- Git
- Internet connection for external fonts and product images

### Step 1: Clone the Repository

```bash
git clone https://github.com/Regalson001/shopsphere-ecommerce-storefront.git
```

### Step 2: Open the Project

```bash
cd shopsphere-ecommerce-storefront
```

Open the folder in Visual Studio Code.

```bash
code .
```

### Step 3: Run the Application

Open `index.html` in your browser.

For a better development experience, install the Live Server extension in VS Code.

Right-click `index.html` and select:

**Open with Live Server**

---

## How to Use

1. Open the ShopSphere storefront.
2. Browse the available products.
3. Search for a specific product.
4. Select a category.
5. Adjust the maximum price.
6. Select a minimum customer rating.
7. Sort products using the sorting dropdown.
8. Add products to your shopping cart.
9. Adjust product quantities.
10. Review the automatically calculated subtotal.

---

## Current Limitations

This project is a front-end demonstration and does not currently provide a production e-commerce backend.

The following capabilities are not implemented:

- User registration and authentication.
- Backend database integration.
- Real payment processing.
- Live inventory management.
- Order management.
- Shipping and delivery integration.
- Administrative product management.

The checkout button is a demonstration interaction, not a real payment gateway.

Product images and Google Fonts are loaded from external services and require internet connectivity.

---

## Potential Future Improvements

Future development could include:

- Backend integration using Node.js and Express.
- Database integration using PostgreSQL or MongoDB.
- Secure user authentication.
- Payment integration using Stripe or another supported gateway.
- Product inventory management.
- Order tracking and management.
- Product detail pages.
- Wishlist functionality.
- Admin dashboard.
- Automated testing.
- API-driven product management.

---

## Skills Demonstrated

This project demonstrates practical experience with:

- Semantic HTML5.
- Modern CSS3.
- Responsive web design.
- JavaScript ES6+.
- Modular JavaScript architecture.
- Array manipulation.
- DOM manipulation.
- Event-driven programming.
- State management.
- Local Storage.
- Search and filtering algorithms.
- Sorting logic.
- Shopping cart calculations.
- Front-end application development.

---

## Author

**Stephen Oyugi Nyarangi**

AI Automation Engineer | Aspiring Software Developer

GitHub: https://github.com/Regalson001

LinkedIn: https://linkedin.com/in/stephenoyugi001

---

## License

This project is available under the MIT License.

You may use, modify and distribute the project in accordance with the license terms.
