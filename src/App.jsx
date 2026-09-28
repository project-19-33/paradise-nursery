import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    alert("Welcome to Paradise Nursery!");
  };

  return (
    <div className="landing-page">
      <div className="landing-content">

        <h1>Paradise Nursery</h1>

        <p>
          Bring the beauty of nature into your home with our collection
          of beautiful and healthy plants.
        </p>

        <button
          className="get-started-btn"
          onClick={handleGetStarted}
        >
          Get Started
        </button>

      </div>
    </div>
  );
}

export default App;
