import './ProductCard.css'

function ProductCard({ name, price, image, onClick }) {
  
  return (
    <>
    <div className='ProductCard'>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <img src={image} alt={name} className="imgProduct" />
      <button onClick={onClick}>Add To Cart</button>
      </div>
    </>
  );
}

export default ProductCard;
