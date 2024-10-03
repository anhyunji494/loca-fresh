import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import "./Story.css";
import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import Footer from "../../components/Footer/Footer";

const Story = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* Header */}
      <Header setMenuOpen={setMenuOpen} />

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative flex items-center justify-center bg-center bg-cover h-96"
          style={{ backgroundImage: "url('/images/farm-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="mb-4 text-5xl font-bold">우리의 이야기</h1>
            <p className="text-xl">
              신선함과 정직함으로 만들어가는 LocalFresh의 여정
            </p>
          </div>
        </section>

        {/* Our Beginning */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center text-custom-teal">
              LocalFresh의 시작
            </h2>
            <div className="flex flex-col items-center md:flex-row">
              <div className="mb-8 md:w-1/2 md:mb-0 md:pr-8">
                <img
                  src="/images/founders.jpg"
                  alt="LocalFresh 창립자들"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  2018년, 신선한 로컬 농산물을 더 많은 사람들에게 쉽게
                  전달하고자 하는 목표로 LocalFresh가 시작되었습니다. 우리는
                  지역 농부들의 정성스럽게 기른 농산물이 소비자들의 식탁에
                  오르기까지의 여정을 더욱 짧고 직접적으로 만들고자 했습니다.
                </p>
                <p className="text-gray-700">
                  처음에는 작은 파머스 마켓에서 시작했지만, 점차 온라인
                  플랫폼으로 확장하여 더 많은 사람들에게 신선한 로컬 푸드를
                  제공할 수 있게 되었습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-gray-100">
          <div className="container px-4 mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center text-custom-teal">
              우리의 미션
            </h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="mb-6 text-gray-700">
                LocalFresh의 미션은 신선하고 건강한 로컬 농산물을 통해 <br />
                소비자의 건강과 지역 농업의 지속 가능성을 동시에 증진시키는
                것입니다.
              </p>
              <p className="text-gray-700">
                우리는 투명한 유통 과정과 공정한 거래를 통해
                <br /> 농부와 소비자 모두에게 이로운 생태계를 만들어가고
                있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-custom-teal">
              우리의 가치
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {["신선함", "지역성", "투명성", "지속가능성"].map(
                (value, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-custom-teal">
                      <span className="text-3xl text-white">{index + 1}</span>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{value}</h3>
                    <p className="text-gray-600">
                      농장에서 식탁까지, <br />
                      우리는 <b>{value}</b>을 최우선으로 생각합니다.
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-white bg-green-700">
          <div className="container px-4 mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold">함께 만들어가는 미래</h2>
            <p className="mb-8 text-lg">
              LocalFresh는 고객 여러분, 그리고 우리의 파트너 농부들과 함께 더
              나은 식문화와 농업의 미래를 만들어가고 있습니다.
            </p>
            <Link
              to="/products"
              className="inline-block px-8 py-3 text-lg font-semibold transition duration-300 bg-white rounded-full text-custom-teal hover:bg-gray-100"
            >
              신선한 농산물 구매하기
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Story;
