import React, { useState } from "react";
import { useCart } from "../../hooks/useCart"; // 이 줄을 추가합니다
import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import Footer from "../../components/Footer/Footer";

const products = [
  {
    id: 1,
    name: "유기농 아보카도",
    price: 3900,
    image:
      "https://images.unsplash.com/photo-1704960961383-67dd63756199?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "과일",
  },
  {
    id: 2,
    name: "무농약 방울토마토",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1570543375343-63fe3d67761b?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "채소",
  },
  {
    id: 3,
    name: "제철 블루베리",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "과일",
  },
  {
    id: 4,
    name: "유기농 루꼴라",
    price: 3000,
    image:
      "https://plus.unsplash.com/premium_photo-1673469223112-235e51d1dfb0?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "채소",
  },
  {
    id: 5,
    name: "신선한 딸기",
    price: 8000,
    image:
      "https://plus.unsplash.com/premium_photo-1689344314069-b60bf06d564c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "과일",
  },
  {
    id: 6,
    name: "유기농 시금치",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1515363578674-99f41329ab4c?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "채소",
  },
];

const categories = ["전체", "과일", "채소"];

const Products = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const { dispatch } = useCart(); // useCart 훅을 사용합니다

  const filteredProducts =
    selectedCategory === "전체"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // 장바구니에 추가하는 함수를 정의합니다
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="min-h-screen font-sans bg-white">
      <Header setMenuOpen={setMenuOpen} />
      <MobileMenu isOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="container px-4 pt-24 pb-12 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center">모든 상품</h1>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`mx-2 px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-custom-teal text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden bg-white rounded-lg shadow-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-64"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
                <p className="mb-4 text-gray-600">
                  {product.price.toLocaleString()}원
                </p>
                <button
                  className="w-full py-2 text-white transition duration-300 rounded-full bg-custom-teal hover:bg-teal-900"
                  onClick={() => addToCart(product)} // 여기를 수정합니다
                >
                  장바구니에 담기
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
