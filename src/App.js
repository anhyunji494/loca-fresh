import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocalFresh from "./pages/LocalFresh/LocalFresh";
import Products from "./pages/Products/Products";
import Story from "./pages/Story/Story";
import Cart from "./pages/Cart/Cart";
import { CartProvider } from "./contexts/CartContext";
import Checkout from "./pages/Checkout/Checkout";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LocalFresh />} />
          <Route path="/products" element={<Products />} />
          <Route path="/story" element={<Story />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
