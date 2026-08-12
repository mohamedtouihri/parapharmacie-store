import CartShopping from "./CartShopping";
import { useCart } from "./Hooks/useCart";

export default function Cart() {
  const { cart, total } = useCart();
  return (
    <>
      <div className="Cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            
            {cart.map((item) => (
              <CartShopping
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
            <h2>Grand Total: {total.toFixed(2)} DT</h2>
          </>
        )}
      </div>
    </>
  );
}
