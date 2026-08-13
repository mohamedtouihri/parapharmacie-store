import { fetchProducts } from "../data/products";
import ProductCard from "./ProductCard";
import { useCart } from "./Hooks/useCart";
import { useEffect, useState } from "react";

function Home() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const result = await fetchProducts();

        setProducts(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);
  if (loading) {
    return <p>Loading.....</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
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
