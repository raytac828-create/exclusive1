import React from "react";
import products from "../data/MockData.jsx"; // mock data import
import "./MensFashion.css";


function HomeLife() {
    const homeCategory = products.find(
    (category) => category.name === "Home & Lifestyle"
  );

  return (
    <div className="mens-page">
      <h1>{homeCategory.name}</h1>
      <div className="product-grid">
        {homeCategory.products.map((item) => (
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
export default HomeLife;