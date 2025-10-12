import React from "react";
import products from "../data/MockData.jsx"; // mock data import
import "./MensFashion.css"; // istəsən eyni css faylı istifadə et

function Grocery() {
  // "Men's Fashion" kateqoriyasını tapırıq
  const petCategory = products.find(
    (category) => category.name === "Groceries & Pets"
  );

  return (
    <div className="pets-page">
      <h1>{petCategory.name}</h1>
      <div className="product-grid">
        {petCategory.products.map((item) => (
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

export default Grocery;
