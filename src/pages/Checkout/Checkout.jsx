import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 주문 처리 로직을 추가합니다.
    // 예: API 호출, 주문 확인 등
    console.log("주문 정보:", formData);
    console.log("주문 상품:", cart);

    // 주문 완료 후 장바구니 비우기
    dispatch({ type: "CLEAR_CART" });

    // 주문 완료 페이지로 이동
    navigate("/order-complete");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container flex-grow px-4 py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold">주문하기</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">배송 정보</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block mb-2">
                  주소
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2">
                  전화번호
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 text-white transition duration-300 rounded-full bg-custom-teal hover:bg-teal-700"
              >
                주문 확정
              </button>
            </form>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold">주문 요약</h2>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-2"
              >
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>{(item.price * item.quantity).toLocaleString()}원</span>
              </div>
            ))}
            <div className="pt-4 mt-4 border-t">
              <div className="flex items-center justify-between">
                <span className="font-semibold">총 금액:</span>
                <span className="font-semibold">
                  {totalPrice.toLocaleString()}원
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
