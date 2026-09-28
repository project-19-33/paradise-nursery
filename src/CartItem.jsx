import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  updateQuantity,
} from "./redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Increase quantity
  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrease quantity
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  };

  // Delete item
  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  // Checkout
  const handleCheckout = () => {
    alert("Checkout is Coming Soon!");
  };

  return (
    <div className="cart-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="navbar-brand">
          🌿 Paradise Nursery
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>

          <Link to="/plants">
            Plants
          </Link>

          <Link to="/cart">
            🛒 Cart
          </Link>
        </div>

      </nav>

      {/* ================= CART HEADER ================= */}

      <div className="cart-header">

        <h1>Shopping Cart</h1>

        <p>
          Review and manage the plants you have selected.
        </p>

      </div>

      {/* ================= EMPTY CART ================= */}

      {cartItems.length === 0 ? (

        <div className="empty-cart">

          <h2>Your cart is empty 🌱</h2>

          <p>
            Add some beautiful plants to your shopping cart.
          </p>

          <Link
            to="/plants"
            className="continue-shopping-btn"
          >
            Continue Shopping
          </Link>

        </div>

      ) : (

        <div className="cart-container">

          {/* ================= CART ITEMS ================= */}

          <div className="cart-items">

            {cartItems.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                {/* Plant Thumbnail */}

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                {/* Plant Details */}

                <div className="cart-item-details">

                  <h2>{item.name}</h2>

                  <p>
                    Unit Price: ${item.price}
                  </p>

                  {/* Quantity Controls */}

                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        decreaseQuantity(item)
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item)
                      }
                    >
                      +
                    </button>

                  </div>

                  {/* Individual Total */}

                  <p className="item-total">
                    Total: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Delete */}

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteItem(item.id)
                    }
                  >
                    🗑️ Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* ================= CART SUMMARY ================= */}

          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">

              <span>
                Total Items
              </span>

              <span>
                {cartItems.reduce(
                  (total, item) =>
                    total + item.quantity,
                  0
                )}
              </span>

            </div>

            <div className="summary-row">

              <span>
                Total Amount
              </span>

              <strong>
                ${totalAmount.toFixed(2)}
              </strong>

            </div>

            {/* Checkout */}

            <button
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Checkout
            </button>

            {/* Continue Shopping */}

            <Link
              to="/plants"
              className="continue-shopping-btn"
            >
              Continue Shopping
            </Link>

          </div>

        </div>

      )}

    </div>
  );
}

export default CartItem;
