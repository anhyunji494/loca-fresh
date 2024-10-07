import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocalFresh from "./pages/LocalFresh/LocalFresh";
import Products from "./pages/Products/Products";
import Story from "./pages/Story/Story";
import Cart from "./pages/Cart/Cart";
import { CartProvider } from "./contexts/CartContext";
import Checkout from "./pages/Checkout/Checkout";
import FarmersPage from "./pages/FarmersPage/FarmersPage";
import FarmerDetailPage from "./pages/FarmerDetailPage/FarmerDetailPage";
import CheckoutConfirmation from "./pages/CheckoutConfirmation/CheckoutConfirmation";
import { FAQ, ReturnPolicy, ShippingInfo } from "./pages/FooterComponents";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LocalFresh />} />
          <Route path="/products" element={<Products />} />
          <Route path="/story" element={<Story />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/farmers" element={<FarmersPage />} />
          <Route path="/farmers/:id" element={<FarmerDetailPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-complete" element={<CheckoutConfirmation />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping-info" element={<ShippingInfo />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
