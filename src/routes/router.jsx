import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Components/Home";
import Cart from "../Components/Cart";
import ProductDetails from "../Components/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "product/:id", element: <ProductDetails /> }
    ],
  },
]);

export default router;