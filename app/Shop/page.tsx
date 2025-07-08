"use client";

import React, { useState } from "react";
import ImageSlider from "../components/imageSlider";
import {
  MdOutlineShoppingCart,
  MdFavorite,
  MdShare,
  MdLocalShipping,
} from "react-icons/md";
import {
  FaWhatsapp,
  FaMusic,
  FaUsers,
  FaHeart,
  FaYoutube,
  FaInternetExplorer,
} from "react-icons/fa";
import { product, albums } from "../assets/data";
import Image from "next/image";

export default function Shop() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Products", icon: "🛍️" },
    { id: "t-shirts", name: "T-Shirts", icon: "👕" },
    { id: "hoodies", name: "Hoodies", icon: "🧥" },
    { id: "accessories", name: "Accessories", icon: "🎒" },
    { id: "notebooks", name: "Notebooks", icon: "📓" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? product
      : product.filter((item) => item.categories === selectedCategory);

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-[url(`data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`)] opacity-30"></div>

        <div className="relative z-10 flex flex-col justify-center items-center p-8 md:p-12">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Buffalo Family
              <span className="block text-2xl md:text-3xl font-normal text-amber-200 mt-2">
                Kambinare Music Group 🎵
              </span>
            </h1>

            <div className="flex justify-center space-x-6 mb-6">
              <div className="flex items-center text-white">
                <FaMusic className="mr-2 text-amber-200" />
                <span className="text-lg">Music</span>
              </div>
              <div className="flex items-center text-white">
                <FaUsers className="mr-2 text-amber-200" />
                <span className="text-lg">Community</span>
              </div>
              <div className="flex items-center text-white">
                <FaHeart className="mr-2 text-amber-200" />
                <span className="text-lg">Unity</span>
              </div>
            </div>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              From Uthiru 22, we&apos;re nick-de-brick, mr lazy, and machwani -
              bringing people together through music and creating entertainment
              for a better tomorrow.
            </p>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold">
              <span className="mr-2">🌍</span>
              BUFFA TO THE WORLD #nolimits
            </div>
          </div>

          <div className="mt-8 w-full max-w-5xl">
            <ImageSlider />
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="w-full bg-white shadow-lg sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-orange-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-full py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Official Buffalo Merch
              <MdOutlineShoppingCart className="inline-block ml-3 text-orange-600" />
            </h2>
            <p className="text-gray-600 text-lg">
              Show your support with our exclusive merchandise collection
            </p>
            <div className="flex justify-center items-center mt-4 space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <MdLocalShipping className="mr-1" />
                Free Delivery in Nairobi
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="mr-1 text-green-600" />
                WhatsApp Support
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onMouseEnter={() => setHoveredProduct(item.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay Buttons */}
                  <div
                    className={`absolute top-4 right-4 space-y-2 transition-all duration-300 ${
                      hoveredProduct === item.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                    }`}
                  >
                    <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 transition-colors">
                      <MdFavorite className="text-gray-400 hover:text-red-500" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors">
                      <MdShare className="text-gray-400 hover:text-blue-500" />
                    </button>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      KSH {item.price.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-orange-600">
                      KSH {item.price.toLocaleString()}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      In Stock
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/+254701592565?text=Hello,%20I%20would%20like%20to%20inquire%20about%20the%20${encodeURIComponent(
                      item.name
                    )}%20(KSH%20${item.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2 group transform hover:scale-105"
                  >
                    <FaWhatsapp className="text-lg group-hover:animate-pulse" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No products found in this category
              </h3>
              <p className="text-gray-500">
                Try selecting a different category or view all products
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Album Catalog Section */}
      <div className="w-full py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              🎧 Buffalo Family Albums
            </h2>
            <p className="text-gray-600 text-lg">
              Listen online or download for offline vibes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <div
                key={album.id}
                className="bg-orange-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
              >
                <Image
                  src={album.cover}
                  alt={album.title}
                  width={300}
                  height={300}
                  className="rounded-xl mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-orange-800 mb-2">
                  {album.title}
                </h3>

                <div className="flex flex-col space-y-2 w-full">
                  <a
                    href={album.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition-all"
                  >
                    🔗 Listen on YouTube
                  </a>

                  <a
                    href={album.file}
                    download
                    className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-all"
                  >
                    ⬇️ Download Album
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer CTA */}
      <div className="w-full bg-gradient-to-r from-orange-600 to-amber-600 py-8">
        <div className="max-w-4xl mx-auto text-center px-4 grid grid-cols-1 md:grid-cols-2">
          <h3 className="text-2xl font-bold text-white mb-4">
            Join the Buffalo Family! 🎵
          </h3>
          <p className="text-white/90 mb-6">
            Follow us on social media and be part of our musical journey
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://wa.me/+254701592565"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors flex items-center space-x-2 mb-3"
            >
              <FaWhatsapp />
              <span>Contact Us</span>
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="https://youtube.com/@BuffaloFamily"
              className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors flex items-center space-x-2"
            >
              <FaYoutube />
              <span>Youtube</span>
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <p className="font-bold">
            Website made by{" "}
            <a
              href="https://stephen-karani.0xzile.sbs"
              className="text-blue-800 hover:text-white"
            >
              <FaInternetExplorer className="inli" />
              zileZarach
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
