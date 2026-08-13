import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Components/Home";
import Cart from "../Components/Cart";
import ProductDetails from "../Components/ProductDetails";
import Checkout from "../Components/Checkout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "checkout", element: <Checkout /> }
    ],
  },
]);

export default router;