import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="container flex-grow px-4 py-8 mx-auto mt-20">
        <h1 className="mb-8 text-3xl font-bold text-custom-teal">장바구니</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600">장바구니가 비어있습니다.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center p-4 bg-white rounded-lg shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-20 h-20 mr-4 rounded-md"
                  />
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">
                      {item.price.toLocaleString()}원
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="px-2 py-1 bg-gray-200 rounded-l"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded-r"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    삭제
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-8">
              <p className="text-xl font-semibold">
                총 금액: {total.toLocaleString()}원
              </p>
              <button
                onClick={() => navigate("/checkout")}
                className="px-6 py-2 text-white transition duration-300 rounded-full bg-custom-teal hover:bg-teal-700"
              >
                주문하기
              </button>
            </div>
          </>
        )}
        <Link
          to="/products"
          className="inline-block mt-8 text-custom-teal hover:underline"
        >
          쇼핑 계속하기
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
