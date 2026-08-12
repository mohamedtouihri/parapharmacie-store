import { useCart } from "./Hooks/useCart";

export default function CartShopping({ id, name, quantity, price }) {
  const { removeFromCart, updateQuantity } = useCart();
  return (
    <div>
      <h3>{name}</h3>
      <p>Quantity: {quantity}</p>
      <p>Price: {price} DT</p>
      <p>Line Total: {(price * quantity).toFixed(2)} DT</p>
      <button onClick={() => removeFromCart(id)}>Remove</button>
      <button onClick={() => updateQuantity(id, 1)}>+</button>
      <button onClick={() => updateQuantity(id, -1)}>-</button>
      <hr />
    </div>
  );
}
