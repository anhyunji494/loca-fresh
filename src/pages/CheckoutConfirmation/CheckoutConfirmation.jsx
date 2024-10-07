import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const CheckoutConfirmation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container flex-grow px-4 py-8 mx-auto mt-20 text-center">
        <h1 className="mb-6 text-4xl font-bold text-custom-teal">주문 완료</h1>
        <p className="mb-8 text-lg text-gray-700">
          주문이 성공적으로 완료되었습니다. <br /> 곧 신선한 로컬 푸드를
          받아보실 수 있습니다.
        </p>
        <div className="space-y-4">
          <Link
            to="/products"
            className="block px-8 py-3 text-lg font-semibold text-white transition duration-300 rounded-full bg-custom-teal hover:bg-teal-700"
          >
            쇼핑 계속하기
          </Link>
          <Link
            to="/"
            className="block px-8 py-3 text-lg font-semibold text-custom-teal hover:underline"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutConfirmation;
