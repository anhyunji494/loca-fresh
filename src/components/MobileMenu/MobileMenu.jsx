import React from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

const MobileMenu = ({ isOpen, setMenuOpen }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white md:hidden">
      <div className="flex justify-end p-4">
        <X
          onClick={() => setMenuOpen(false)}
          className="w-6 h-6 cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center mt-20 space-y-6">
        <Link
          to="/"
          className={`text-2xl ${
            isActive("/") ? "font-semibold text-custom-teal" : "text-gray-800"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          홈
        </Link>
        <Link
          to="/story"
          className={`text-2xl ${
            isActive("/story")
              ? "font-semibold text-custom-teal"
              : "text-gray-800"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          스토리
        </Link>
        <Link
          to="/products"
          className={`text-2xl ${
            isActive("/products")
              ? "font-semibold text-custom-teal"
              : "text-gray-800"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          상품
        </Link>
        <Link
          to="/farmers"
          className={`text-2xl ${
            isActive("/farmers")
              ? "font-semibold text-custom-teal"
              : "text-gray-800"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          농부들
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
