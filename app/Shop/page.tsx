"use client";
import React from "react";
import ImageSlider from "../components/imageSlider";
import { MdOutlineShoppingCart } from "react-icons/md";
import product from "../assets/data";
import Image from "next/image";

export default function Shop() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Welcome Section */}
      <div className="w-full bg-white rounded-lg shadow-lg flex flex-col justify-center items-center p-5">
        <h2 className="text-center text-amber-700 mt-8 underline font-bold text-2xl">
          Welcome to Buffalo Family Page 🎵
        </h2>
        <p className="text-center text-black font-bold mt-6 mb-6">
          Buffalo Family Kambinare is a music group from Uthiru 22 consisting of three members, nick-de-brick, mr lazy,
          and machwani. Our main aim is to bring people together and create entertainment through our craft for a better
          tomorrow. BUFFA TO THE WORLD #nolimits
        </p>
        <ImageSlider />
      </div>

      {/* Merchandise Section */}
      <div className="w-full bg-orange-700 py-10">
        <h2 className="text-white text-center text-2xl font-bold mb-6 flex items-center justify-center">
          Shop Our Merch!
          <MdOutlineShoppingCart className="inline-block ml-2" />
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-4xl px-4">
          {product.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden p-4 flex flex-col items-center">
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="rounded-md object-cover w-full h-auto"
              />
              <h3 className="text-lg font-bold text-orange-700 mt-4">{product.name}</h3>
              <p className="text-gray-700 mt-2">KSHS:{product.price}</p>
              <a
                href={`https://wa.me/+254701592565?text=Hello,%20I%20would%20like%20to%20inquire%20about%20the%20${encodeURIComponent(
                  product.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 text-white px-4 py-2 rounded-md mt-4 hover:bg-amber-600 transition">
                Contact on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
