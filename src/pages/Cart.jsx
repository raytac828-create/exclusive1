// src/pages/Cart.jsx
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/CartSlice";
import "./Cart.css";
import { ShoppingCart } from "lucide-react";
function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "100px" }}>Your cart is empty <ShoppingCart size={25}/></h2>;
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-list">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.images[0]} alt={item.name} />
            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>${item.price} × {item.quantity}</p>
            </div>
            <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-btn">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        <div className="cart-buttons">
          <button className="clear-btn" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
