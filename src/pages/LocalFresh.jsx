import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LocalFresh.css';

const products = [
  {
    id: 1,
    name: '유기농 아보카도',
    price: 3900,
    image: '/api/placeholder/400/300',
    category: '과일',
  },
  {
    id: 2,
    name: '무농약 방울토마토',
    price: 4500,
    image: '/api/placeholder/400/300',
    category: '채소',
  },
  {
    id: 3,
    name: '제철 블루베리',
    price: 12000,
    image: '/api/placeholder/400/300',
    category: '과일',
  },
  {
    id: 4,
    name: '유기농 루꼴라',
    price: 3000,
    image: '/api/placeholder/400/300',
    category: '채소',
  },
  {
    id: 5,
    name: '신선한 딸기',
    price: 8000,
    image: '/api/placeholder/400/300',
    category: '과일',
  },
  {
    id: 6,
    name: '유기농 시금치',
    price: 3500,
    image: '/api/placeholder/400/300',
    category: '채소',
  },
];

const LocalFresh = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuAnimation = useSpring({
    transform: menuOpen ? 'translateX(0%)' : 'translateX(-100%)',
  });

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

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header */}
      <header className="fixed w-full bg-white z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">LocalFresh</h1>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              스토리
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              상품
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              농부들
            </a>
            <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
            <ShoppingBag className="w-5 h-5 text-gray-600 cursor-pointer" />
          </div>
          <div className="md:hidden">
            <Menu
              onClick={() => setMenuOpen(true)}
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <animated.div
        style={menuAnimation}
        className="fixed top-0 left-0 h-full w-full bg-white z-50 md:hidden"
      >
        <div className="p-4 flex justify-end">
          <X
            onClick={() => setMenuOpen(false)}
            className="w-6 h-6 cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center space-y-6 mt-20">
          <a href="#" className="text-2xl text-gray-800">
            스토리
          </a>
          <a href="#" className="text-2xl text-gray-800">
            상품
          </a>
          <a href="#" className="text-2xl text-gray-800">
            농부들
          </a>
        </div>
      </animated.div>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/api/placeholder/1600/900')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h2 className="text-5xl md:text-7xl font-bold mb-4">
              신선한 로컬 푸드
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              당신의 식탁에 건강을 전합니다
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
              지금 쇼핑하기
            </button>
          </div>
        </section>
        {/* Featured Products */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              이 주의 제철 상품
            </h2>
            <Slider {...settings} className="product-carousel">
              {products.map((product) => (
                <div key={product.id} className="px-2">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {product.price.toLocaleString()}원
                      </p>
                      <button className="w-full bg-gray-900 text-white py-2 rounded-full hover:bg-gray-800 transition duration-300">
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
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">우리의 이야기</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LocalFresh는 지역 농부들과 소비자를 직접 연결합니다. 우리는
              신선하고 건강한 먹거리를 통해 지역 경제를 활성화하고 환경을
              보호하는 데 기여하고 있습니다.
            </p>
            <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
              더 알아보기
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">LocalFresh</h3>
              <p>신선한 로컬 농산물을 당신의 식탁으로</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    스토리
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    상품
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    농부들
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">고객 지원</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    배송 정보
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    반품 정책
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">뉴스레터 구독</h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="px-4 py-2 w-full rounded-l-full focus:outline-none text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-white text-gray-900 px-4 py-2 rounded-r-full hover:bg-gray-200 transition duration-300"
                >
                  구독
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LocalFresh;
