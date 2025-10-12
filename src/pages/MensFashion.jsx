import React from "react";
import products from "../data/MockData.jsx";
import "./MensFashion.css";

function MensFashion() {
  const mensCategory = products.find(
    (category) => category.name === "Men's Fashion"
  );

  return (
    <div className="mens-page">
      <h1>{mensCategory.name}</h1>
      <div className="product-grid">
        {mensCategory.products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.images[0]} alt={item.name} className="product-img" />
            <p className="product-name">{item.name || "Product"}</p>
            <p className="product-price">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MensFashion;
