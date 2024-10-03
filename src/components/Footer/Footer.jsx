import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-custom-teal">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">LocalFresh</h3>
            <p>신선한 로컬 농산물을 당신의 식탁으로</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  홈
                </Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-gray-300">
                  스토리
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gray-300">
                  상품
                </Link>
              </li>
              <li>
                <Link to="/farmers" className="hover:text-gray-300">
                  농부들
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">고객 지원</h3>
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
            <h3 className="mb-4 text-lg font-semibold">뉴스레터 구독</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="이메일 주소"
                className="w-full px-4 py-2 text-gray-900 rounded-l-full focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 text-gray-900 transition duration-300 bg-white rounded-r-full hover:bg-gray-200"
              >
                구독
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
