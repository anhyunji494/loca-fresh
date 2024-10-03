import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LocalFresh from "./pages/LocalFresh/LocalFresh";
import Products from "./pages/Products/Products";
import Story from "./pages/Story/Story";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LocalFresh />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/story",
    element: <Story />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
