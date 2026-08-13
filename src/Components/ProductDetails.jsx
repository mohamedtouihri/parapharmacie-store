import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProduct() {
      try {
        const products = await fetchProducts();

        const foundProduct = products.find(
          (product) => product.id.toString() === id,
        );

        setProduct(foundProduct);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getProduct();
  }, [id]);

  if (loading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.price}</p>
    </div>
  );
}

export default ProductDetails;
