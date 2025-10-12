import "./Cart.css";
import { useEffect, useState } from "react";



function Cart() {
  return (
    <div className="cart">
     

      <div className="cart-table">
        <div className="cart-header">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        <div className="cart-item">
          <div className="cart-product">
            <img alt="LCD Monitor" />
            <p>LCD Monitor</p>
          </div>
          <p>$650</p>
          <select className="cart-qty">
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
          <p>$650</p>
        </div>

        <div className="cart-item">
          <div className="cart-product">
            <img alt="Gamepad" />
            <p>H1 Gamepad</p>
          </div>
          <p>$550</p>
          <select className="cart-qty">
            <option>01</option>
            <option selected>02</option>
            <option>03</option>
          </select>
          <p>$1100</p>
        </div>

        <div className="cart-buttons">
          <button className="btn-light">Return To Shop</button>
          <button className="btn-light">Update Cart</button>
        </div>
      </div>

      <div className="cart-bottom">
        <div className="coupon">
          <input type="text" placeholder="Coupon Code" />
          <button className="btn-red">Apply Coupon</button>
        </div>

        <div className="cart-total">
          <h4>Cart Total</h4>
          <div className="total-row">
            <p>Subtotal:</p>
            <span>$1750</span>
          </div>
          <div className="total-row">
            <p>Shipping:</p>
            <span>Free</span>
          </div>
          <div className="total-row total-bold">
            <p>Total:</p>
            <span>$1750</span>
          </div>
          <button className="btn-red checkout">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
