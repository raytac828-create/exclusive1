import { useParams } from "react-router-dom";
import products from "../data/MockData.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { toggleWishlist } from "../redux/WishListSlice";
import { ShoppingCart, Heart,  HeartCrack } from "lucide-react";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const allProducts = products.flatMap((cat) => cat.products);
  const product = allProducts.find((p) => p.id.toString() === id);

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "100px" }}>Product not found ❌</h2>;
  }

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  return (
    <div className="product-detail">
      <img src={product.images[0]} alt={product.name} className="detail-image" />
      <div className="detail-info">
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        
        <button
          onClick={() => dispatch(addToCart(product))}
          className="add-to-cart-btn"
        >
          Add to Cart <ShoppingCart size={30} strokeWidth={1} />
        </button>

        <button
          className="wishlist-btn"
          onClick={() => dispatch(toggleWishlist(product))}
        >
          {isInWishlist(product.id) ? <HeartCrack color="red" /> : <Heart />}
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
