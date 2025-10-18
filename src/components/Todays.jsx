import React from "react";
import categories from "../data/MockData.jsx"; // məhsul məlumatların yeri
import "./Todays.css";
import { useNavigate } from "react-router-dom";

function Todays() {
  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate("/womensfashion"); // 👈 yönləndirmək istədiyin səhifənin path-i
  };

  // 🔹 bütün məhsulları bir massivdə birləşdiririk
  const allProducts = categories.flatMap((category) => category.products);

  // 🔹 onlardan 4 təsadüfi məhsul seçirik
  const randomFour = allProducts.sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <div className="todays1">
      <div className="todays2">
        <h2>Today's</h2>
      </div>
      <div className="todays3">
        {randomFour.map((product) => (
          <div key={product.id} className="todays4">
            <img src={product.images[0]} alt={product.name} />
            <h3>{product.name || "No Name"}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      <button onClick={handleViewAll} className="todays5">
        View All Products
      </button>
    </div>
  );
}

export default Todays;
