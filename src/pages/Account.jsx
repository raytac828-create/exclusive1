import "./Account.css";
import { Link } from "react-router-dom";

function Account() {
  return (
    <div>
      <div className="account1">
        <h4>Manage My Account</h4>
        <ul>
            <li><Link to="/myprofile">My Profile</Link></li>
            <li><Link to="/addressbook">Address Book</Link></li>
            <li><Link to="/mypaymentoptions">My Payment Options</Link></li>
        </ul>
        
        <h4>My Orders</h4>
        <p>My Returns</p>
        <p>My Cancellations</p>
        <h4>My Wishlist</h4>
      </div>
    </div>
  );
}
export default Account;
