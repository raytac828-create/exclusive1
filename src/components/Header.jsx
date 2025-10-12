import "./Header.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { User } from "lucide-react";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-container1">
        <h3>Exclusive</h3>
      </div>
      <div className="header-container2">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>

      <div className="header-container3">
        <input type="text" placeholder="What are you looking for?" />

        <Heart size={30} strokeWidth={1} />
        <ShoppingCart
          size={30}
          strokeWidth={1}
          
        />

        <User
          className="user"
          size={32}
          strokeWidth={1}
          onClick={() => setOpen((prev) => !prev)}
          style={{ cursor: "pointer" }}
        />
        {open && (
          <div className="dropdown-menu">
            <p>Manage My Account</p>
            <p>My Order</p>
            <p>Logout</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Header;
