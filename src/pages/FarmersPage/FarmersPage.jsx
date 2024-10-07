import React, { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

// 농부 데이터
const farmers = [
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

const FarmersPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("전체");

  const regions = [
    "전체",
    "경기도",
    "충청남도",
    "전라남도",
    "경상도",
    "강원도",
    "제주도",
  ];

  const filteredFarmers = farmers.filter((farmer) => {
    const matchesSearch =
      farmer.name.includes(searchTerm) ||
      farmer.farm.includes(searchTerm) ||
      farmer.products.some((product) => product.includes(searchTerm));
    const matchesRegion =
      selectedRegion === "전체" || farmer.location.includes(selectedRegion);
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen font-sans bg-white">
      <Header setMenuOpen={setMenuOpen} />
      <MobileMenu isOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[60vh] bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold md:text-6xl">
            우리 지역 농부를 만나보세요
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            신선한 농산물이 시작되는 곳
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-100">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="농부 또는 농산물 검색"
                className="w-full px-4 py-2 pl-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                className="absolute top-2.5 left-3 text-gray-400"
                size={20}
              />
            </div>
            <div className="flex gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 text-sm rounded-full transition duration-300 ${
                    selectedRegion === region
                      ? "bg-custom-teal text-white"
                      : "bg-white text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Farmers List Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredFarmers.map((farmer) => (
              <div
                key={farmer.id}
                className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
              >
                <img
                  src={farmer.image}
                  alt={farmer.farm}
                  className="object-cover w-full h-64"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{farmer.farm}</h3>
                    <span className="px-3 py-1 text-sm text-white rounded-full bg-custom-teal">
                      ⭐ {farmer.rating}
                    </span>
                  </div>
                  <div className="flex items-center mb-4 text-gray-600">
                    <MapPin size={16} className="mr-1" />
                    <span>{farmer.location}</span>
                  </div>
                  <p className="mb-4 text-gray-600 line-clamp-2">
                    {farmer.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="mb-2 font-semibold">주요 작물</h4>
                    <div className="flex flex-wrap gap-2">
                      {farmer.products.map((product) => (
                        <span
                          key={product}
                          className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {farmer.certification.map((cert) => (
                      <span
                        key={cert}
                        className="px-3 py-1 text-sm text-teal-700 rounded-full bg-teal-50"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/farmers/${farmer.id}`}
                    className="block w-full py-2 text-center text-white transition duration-300 rounded-full bg-custom-teal hover:bg-teal-900"
                  >
                    농장 방문하기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FarmersPage;
