# 🌿 Paradise Nursery

## 🪴 Online Plant Shopping Application

Paradise Nursery is a dynamic e-commerce web application for an online plant shop. The application allows users to browse different categories of houseplants, view plant information, add plants to a shopping cart, and manage their cart items.

The project is developed using **React.js** and **Redux** to create an interactive and user-friendly shopping experience.

---

## 📌 Project Overview

The Paradise Nursery application provides users with an easy way to explore and purchase plants online.

Users can:

* 🌱 Browse different categories of plants
* 🪴 View plant images, names, descriptions, and prices
* 🛒 Add plants to the shopping cart
* ➕ Increase the quantity of plants
* ➖ Decrease the quantity of plants
* 🗑️ Remove plants from the cart
* 💰 View the total cost of the cart
* 🔢 View the total number of items in the cart
* 🏠 Navigate between Home, Plants, and Cart pages
* 🔙 Continue shopping from the cart page
* 💳 View a checkout option

---

## ✨ Features

### 🏠 Landing Page

The landing page introduces the Paradise Nursery brand and includes:

* Company name
* Background image
* Short introduction
* **Get Started** button

The Get Started button takes the user to the plant listing page.

### 🌿 Product Listing

The plant listing page contains multiple plant categories.

Each plant displays:

* Plant thumbnail
* Plant name
* Plant description
* Plant price
* **Add to Cart** button

When a plant is added to the cart:

* The product is added to the Redux shopping cart.
* The Add to Cart button becomes disabled.
* The cart item count is updated dynamically.

### 🛒 Shopping Cart

The shopping cart allows users to:

* View selected plants
* View plant thumbnails
* View plant names
* View unit prices
* Increase quantity
* Decrease quantity
* Delete plants
* View individual item totals
* View the total cart amount

A **Checkout** button is also provided and displays a "Coming Soon" message.

---

## 📂 Plant Categories

The application contains at least three plant categories:

### 🌱 Indoor Plants

* Snake Plant
* Peace Lily
* Spider Plant
* ZZ Plant
* Monstera
* Rubber Plant

### 🌺 Outdoor Plants

* Rose
* Hibiscus
* Jasmine
* Lavender
* Bougainvillea
* Marigold

### 🌵 Succulents

* Aloe Vera
* Echeveria
* Jade Plant
* Haworthia
* Sedum
* Zebra Haworthia

---

## 🛠️ Technologies Used

* **React.js**
* **Redux Toolkit**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Vite**
* **React Router**

---

## 📁 Project Structure

```text
paradise-nursery/
│
├── public/
│
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── redux/
│   │   ├── store.js
│   │   └── CartSlice.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── AboutUs.jsx
│   ├── ProductList.jsx
│   ├── CartItem.jsx
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/paradise-nursery.git
```

### 2. Navigate to the project folder

```bash
cd paradise-nursery
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run on the local development server provided by Vite.

---

## 🛒 Shopping Cart Management

Redux Toolkit is used to manage the shopping cart state.

The cart supports:

```text
Add Product
     ↓
Increase Quantity
     ↓
Decrease Quantity
     ↓
Remove Product
     ↓
Calculate Total
```

The cart icon dynamically displays the total number of items currently in the shopping cart.

---

## 🎯 Project Objective

The main objective of the Paradise Nursery project is to apply React and Redux concepts to develop a functional e-commerce application.

The project demonstrates practical knowledge of:

* React components
* Props and state
* Event handling
* React Router
* Redux Toolkit
* Redux slices
* Global state management
* Dynamic rendering
* Conditional rendering
* Shopping cart functionality
* Responsive user interface design

---

## 👨‍💻 Author

**Your Name**

Paradise Nursery – Online Plant Shopping Application

---

## 📄 License

This project was created for educational and academic purposes.
