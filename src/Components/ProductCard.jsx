import { useNavigate } from "react-router-dom";
import { useCart } from "./Hooks/useCart";
import "../Components/ProductCard.css";


function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>

      <p>{product.price}</p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;