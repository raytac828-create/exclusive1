import React from "react";
import products from "../data/MockData.jsx"; // mock data import
import "./MensFashion.css"; // istəsən eyni css faylı istifadə et

function Baby() {
  // "Men's Fashion" kateqoriyasını tapırıq
  const babyCategory = products.find(
    (category) => category.name === "Baby's & Toys"
  );

  return (
    <div className="baby-page">
      <h1>{babyCategory.name}</h1>
      <div className="product-grid">
        {babyCategory.products.map((item) => (
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

export default Baby;
