import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";
import "./WishList.css";
import { Heart } from "lucide-react";
function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  if (wishlist.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "100px" }}>Wishlist is empty <Heart size={25} /></h2>;
  }

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>
      <div className="wishlist-grid">
        {wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.images[0]} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => dispatch(removeFromWishlist(item.id))}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
