import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const FAQ = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container flex-grow px-4 py-8 mx-auto mt-20">
        <h1 className="mb-6 text-4xl font-bold text-custom-teal">
          자주 묻는 질문
        </h1>
        <div className="space-y-4 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold">
              Q: 배송 기간은 얼마나 걸리나요?
            </h2>
            <p>A: 주문하신 상품은 보통 2-3일 내에 배송됩니다.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">
              Q: 결제 방법은 어떤 것이 있나요?
            </h2>
            <p>A: 신용카드, 체크카드, 및 온라인 송금이 가능합니다.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">
              Q: 주문 취소는 어떻게 하나요?
            </h2>
            <p>
              A: 주문 내역에서 취소 버튼을 클릭하시거나 고객센터로 연락해
              주세요.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const ShippingInfo = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container flex-grow px-4 py-8 mx-auto mt-20">
        <h1 className="mb-6 text-4xl font-bold text-custom-teal">배송 정보</h1>
        <p className="text-lg text-gray-700">
          저희는 고객님께 신선한 로컬 푸드를 신속하게 배송하기 위해 최선을
          다하고 있습니다. <br />
          일반적으로 주문 후 2-3일 내에 배송이 완료됩니다. <br />
          배송 추적은 마이페이지에서 확인하실 수 있습니다.
        </p>
      </main>
      <Footer />
    </div>
  );
};

const ReturnPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container flex-grow px-4 py-8 mx-auto mt-20">
        <h1 className="mb-6 text-4xl font-bold text-custom-teal">반품 정책</h1>
        <p className="text-lg text-gray-700">
          저희는 고객님의 만족을 위해 반품 서비스를 제공하고 있습니다. <br />
          상품 수령 후 7일 이내에 반품 신청이 가능하며, 상품 상태가 손상되지
          않은 경우에만 반품이 가능합니다. <br />
          자세한 사항은 고객센터로 문의해 주세요.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export { FAQ, ShippingInfo, ReturnPolicy };
