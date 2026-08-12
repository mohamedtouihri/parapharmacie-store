import products from "../data/products"
import ProductCard from "./ProductCard";
import { useCart } from "./Hooks/useCart";

function Home() {
  const { addToCart } = useCart();
  return (
    <>
      <h1>Parapharmacie Store</h1>
      <div className="Product">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onClick={() => addToCart(product)}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
