import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

const farmers = [
  // 기존 농부 데이터 재사용
  {
    id: 1,
    name: "김지훈",
    farm: "행복한 농장",
    location: "경기도 양평",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1471&auto=format&fit=crop",
    description:
      "20년째 유기농 농사를 이어오고 있는 김지훈입니다. 안전하고 건강한 먹거리를 위해 최선을 다하고 있습니다.",
    products: ["방울토마토", "오이", "상추"],
    rating: 4.8,
    certification: ["유기농", "무농약"],
  },
  {
    id: 2,
    name: "이미영",
    farm: "산들농원",
    location: "충청남도 공주",
    image:
      "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=1470&auto=format&fit=crop",
    description:
      "친환경 과수원을 운영하고 있습니다. 제철 과일을 자연 그대로 키우고 있어요.",
    products: ["사과", "배", "복숭아"],
    rating: 4.9,
    certification: ["GAP인증"],
  },
  {
    id: 3,
    name: "박성호",
    farm: "푸른들 농장",
    location: "전라남도 나주",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1470&auto=format&fit=crop",
    description:
      "3대째 이어오는 가업을 이어받아 친환경 농사를 짓고 있습니다. 특히 배추와 무가 일품입니다.",
    products: ["배추", "무", "열무"],
    rating: 4.7,
    certification: ["무농약", "전통식품인증"],
  },
];

const FarmerDetailPage = () => {
  const { id } = useParams();
  const farmer = farmers.find((farmer) => farmer.id === parseInt(id));

  if (!farmer) {
    return <div>농부 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="min-h-screen font-sans bg-white ">
      <Header />
      <MobileMenu />
      <main className="container px-4 py-16 mx-auto ">
        <div className="flex flex-col items-center gap-12 mt-20 md:flex-row">
          <img
            src={farmer.image}
            alt={farmer.name}
            className="object-cover w-full max-w-md rounded-lg shadow-lg"
          />
          <div className="flex-1 p-6 rounded-lg shadow-md bg-gray-50">
            <h1 className="text-4xl font-bold text-custom-teal">
              {farmer.farm}
            </h1>
            <h2 className="mt-2 text-2xl text-gray-700">
              농장주: {farmer.name}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {farmer.description}
            </p>
            <div className="mt-8">
              <h3 className="mb-4 text-2xl font-semibold text-custom-teal">
                주요 작물
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                {farmer.products.map((product) => (
                  <li key={product} className="text-lg text-gray-800">
                    <span className="inline-block px-3 py-1 text-teal-700 rounded-full bg-teal-50">
                      {product}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="mb-4 text-2xl font-semibold text-custom-teal">
                인증 정보
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                {farmer.certification.map((cert) => (
                  <li key={cert} className="text-lg text-gray-800">
                    <span className="inline-block px-3 py-1 text-teal-700 rounded-full bg-teal-50">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FarmerDetailPage;
