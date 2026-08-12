import { useReducer } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  function addToCart(product) {
    dispatch({ type: "addToCart", product });
  }
  function removeFromCart(id) {
    dispatch({ type: "removeFromCart", id });
  }
  function updateQuantity(id, amount) {
    dispatch({ type: "updateQuantity", id, amount });
  }
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
function cartReducer(state, action) {
    switch (action.type) {
      case "addToCart": {
        const foundItem = state.find((item) => item.id === action.product.id);

        if (foundItem) {
          return state.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        }

        return [...state, { ...action.product, quantity: 1 }];
      }

      case "removeFromCart":
        return state.filter((item) => item.id !== action.id);

      case "updateQuantity":
        return state.map((item) => {
          if (item.id !== action.id) {
            return item;
          }

          const newQuantity = item.quantity + action.amount;

          return {
            ...item,
            quantity: newQuantity < 1 ? 1 : newQuantity,
          };
        });

      default:
        return state;
    }
  }
