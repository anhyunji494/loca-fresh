import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LocalFresh.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../hooks/useCart"; // components 제거
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

const LocalFresh = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuAnimation = useSpring({
    transform: menuOpen ? "translateX(0%)" : "translateX(-100%)",
  });
  const { cart, dispatch } = useCart();

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <ChevronRight size={30} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <ChevronLeft size={30} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // 장바구니
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Header */}
      <Header setMenuOpen={setMenuOpen} />

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative flex items-center justify-center h-screen bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h2 className="mb-4 text-5xl font-bold md:text-7xl">
              신선한 로컬 푸드
            </h2>
            <p className="mb-8 text-xl md:text-2xl">
              당신의 식탁에 건강을 전합니다
            </p>
            <Link
              to="/products"
              className="px-8 py-3 text-lg font-semibold text-white transition duration-300 rounded-full bg-custom-teal hover:bg-teal-900"
            >
              지금 쇼핑하기
            </Link>
          </div>
        </section>
        {/* Featured Products */}
        <section className="py-20 bg-gray-100">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center">
              이 주의 제철 상품
            </h2>
            <Slider {...settings} className="product-carousel">
              {products.map((product) => (
                <div key={product.id} className="px-2">
                  <div className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-64"
                    />
                    <div className="p-6">
                      <h3 className="mb-2 text-xl font-semibold">
                        {product.name}
                      </h3>
                      <p className="mb-4 text-gray-600">
                        {product.price.toLocaleString()}원
                      </p>
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full py-2 text-white transition duration-300 rounded-full bg-custom-teal hover:bg-teal-900"
                      >
                        장바구니에 담기
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold">우리의 이야기</h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              LocalFresh는 지역 농부들과 소비자를 직접 연결합니다. <br />
              우리는 신선하고 건강한 먹거리를 통해 지역 경제를 활성화하고
              <br />
              환경을 보호하는 데 기여하고 있습니다.
            </p>
            <Link to="/story">
              <button className="px-8 py-3 mt-8 text-lg font-semibold text-white transition duration-300 rounded-full bg-custom-teal hover:bg-teal-900">
                더 알아보기
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LocalFresh;
