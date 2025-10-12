import React from "react";
import products from "../data/MockData.jsx"; // mock data import
import "./MensFashion.css";

function Electronics() {
  // "Men's Fashion" kateqoriyasını tapırıq
  const electronicsCategory = products.find(
    (category) => category.name === "Electronics"
  );

  return (
    <div className="electronics">
      <h1>{electronicsCategory.name}</h1>
      <div className="product-grid">
        {electronicsCategory.products.map((item) => (
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

export default Electronics;
