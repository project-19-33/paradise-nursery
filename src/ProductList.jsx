import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "./redux/CartSlice";

const plants = [
  // ==================== INDOOR PLANTS ====================
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
    description: "A low-maintenance indoor plant that improves indoor air quality.",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
    description: "A beautiful flowering plant perfect for indoor spaces.",
  },
  {
    id: 3,
    name: "Spider Plant",
    category: "Indoor Plants",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
    description: "An easy-to-grow plant with attractive green and white leaves.",
  },
  {
    id: 4,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1632207691144-80e4c7c9e7a3?auto=format&fit=crop&w=600&q=80",
    description: "A hardy plant that can thrive with minimal care.",
  },
  {
    id: 5,
    name: "Monstera",
    category: "Indoor Plants",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
    description: "A popular tropical plant with large decorative leaves.",
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80",
    description: "A stylish indoor plant with large glossy leaves.",
  },

  // ==================== OUTDOOR PLANTS ====================
  {
    id: 7,
    name: "Rose",
    category: "Outdoor Plants",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80",
    description: "A classic flowering plant that adds beauty to gardens.",
  },
  {
    id: 8,
    name: "Hibiscus",
    category: "Outdoor Plants",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1597848212624-e19e7e7e8a7f?auto=format&fit=crop&w=600&q=80",
    description: "A vibrant flowering plant ideal for sunny outdoor spaces.",
  },
  {
    id: 9,
    name: "Jasmine",
    category: "Outdoor Plants",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1597848212624-e19e7e7e8a7f?auto=format&fit=crop&w=600&q=80",
    description: "A fragrant flowering plant perfect for gardens.",
  },
  {
    id: 10,
    name: "Lavender",
    category: "Outdoor Plants",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=600&q=80",
    description: "A fragrant plant known for its beautiful purple flowers.",
  },
  {
    id: 11,
    name: "Bougainvillea",
    category: "Outdoor Plants",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=600&q=80",
    description: "A colorful flowering plant that brightens outdoor areas.",
  },
  {
    id: 12,
    name: "Marigold",
    category: "Outdoor Plants",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=600&q=80",
    description: "A cheerful flowering plant suitable for gardens and balconies.",
  },

  // ==================== SUCCULENTS ====================
  {
    id: 13,
    name: "Aloe Vera",
    category: "Succulents",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "A useful succulent that is easy to grow indoors or outdoors.",
  },
  {
    id: 14,
    name: "Echeveria",
    category: "Succulents",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=600&q=80",
    description: "A beautiful rosette-shaped succulent with colorful leaves.",
  },
  {
    id: 15,
    name: "Jade Plant",
    category: "Succulents",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=600&q=80",
    description: "A popular succulent with thick green leaves.",
  },
  {
    id: 16,
    name: "Haworthia",
    category: "Succulents",
    price: 17,
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80",
    description: "A small and attractive succulent that requires little care.",
  },
  {
    id: 17,
    name: "Sedum",
    category: "Succulents",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
    description: "A hardy succulent with attractive small leaves.",
  },
  {
    id: 18,
    name: "Zebra Haworthia",
    category: "Succulents",
    price: 19,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
    description: "A compact succulent with distinctive striped leaves.",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart?.items || []);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Indoor Plants",
    "Outdoor Plants",
    "Succulents",
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  return (
    <div className="product-page">

      {/* ==================== NAVBAR ==================== */}
      <nav className="navbar">

        <div className="navbar-brand">
          🌿 Paradise Nursery
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>

          <Link to="/cart" className="cart-link">
            🛒 Cart
            <span className="cart-count">
              {cartCount}
            </span>
          </Link>
        </div>

      </nav>

      {/* ==================== PAGE HEADER ==================== */}
      <header className="product-header">
        <h1>Paradise Nursery Plants</h1>

        <p>
          Explore our beautiful collection of indoor plants,
          outdoor plants, and succulents.
        </p>
      </header>

      {/* ==================== PRODUCT CATEGORIES ==================== */}
      <main className="product-container">

        {categories.map((category) => {

          const categoryPlants = plants.filter(
            (plant) => plant.category === category
          );

          return (
            <section
              className="plant-category"
              key={category}
            >

              <h2>{category}</h2>

              <div className="plant-grid">

                {categoryPlants.map((plant) => (

                  <div
                    className="plant-card"
                    key={plant.id}
                  >

                    {/* Plant Thumbnail */}
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    <div className="plant-info">

                      {/* Plant Name */}
                      <h3>{plant.name}</h3>

                      {/* Description */}
                      <p className="plant-description">
                        {plant.description}
                      </p>

                      {/* Price */}
                      <p className="plant-price">
                        ${plant.price}
                      </p>

                      {/* Add To Cart */}
                      <button
                        className="add-cart-btn"
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart(plant.id)}
                      >
                        {isInCart(plant.id)
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            </section>

          );

        })}

      </main>

    </div>
  );
}

export default ProductList;
