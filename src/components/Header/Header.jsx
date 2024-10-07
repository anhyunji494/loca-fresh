import React from "react";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../hooks/useCart"; // 경로 수정

const Header = ({ setMenuOpen, setSearchOpen = () => {} }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // 장바구니
  const { cart } = useCart();
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed z-50 w-full bg-white shadow-md">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link to="/" className="text-2xl font-bold text-custom-teal">
          LocalFresh
        </Link>
        <div className="items-center hidden space-x-6 md:flex">
          <Link
            to="/"
            className={`${
              isActive("/") ? "text-custom-teal font-semibold" : "text-gray-600"
            } hover:text-gray-900`}
          >
            홈
          </Link>
          <Link
            to="/story"
            className={`${
              isActive("/story")
                ? "text-custom-teal font-semibold"
                : "text-gray-600"
            } hover:text-gray-900`}
          >
            스토리
          </Link>
          <Link
            to="/products"
            className={`${
              isActive("/products")
                ? "text-custom-teal font-semibold"
                : "text-gray-600"
            } hover:text-gray-900`}
          >
            상품
          </Link>
          <Link
            to="/farmers"
            className={`${
              isActive("/farmers")
                ? "text-custom-teal font-semibold"
                : "text-gray-600"
            } hover:text-gray-900`}
          >
            농부들
          </Link>
          <Search
            className="w-5 h-5 text-gray-600 cursor-pointer"
            onClick={() =>
              typeof setSearchOpen === "function" && setSearchOpen(true)
            }
          />

          <Link to="/cart" className="relative">
            <ShoppingBag className="w-5 h-5 text-gray-600 cursor-pointer" />
            {cartItemsCount > 0 && (
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </div>
        <div className="md:hidden">
          <Menu
            onClick={() => setMenuOpen(true)}
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
