"use client";
import React from "react";
import ImageSlider from "../components/imageSlider";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Shop() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="w-full bg-white rounded-lg shadow-lg flex flex-col justify-center items-center p-5">
        <h2 className="text-center text-amber-700 mt-8 underline">Welcome to Buffalo Family Page 🎵</h2>
        <p className="text-center border-amber-50 rounded-md text-black font-bold mt-6 mb-6">
          Buffalo Family Kambinare is a music group from Uthiru 22 consisting of three members, nick-de-brick, mr lazy
          and machwani,...Main aim is to bring people together and create entertainment through our craft for a better
          tommorrow .BUFFA TO THE WORLD #nolimits
        </p>
        <ImageSlider />
      </div>
      <div className=" h-1/2 bg-orange-700 flex items-center justify-center">
        <h2 className="text-white text-center font-bold flex items-center">
          Shop Our Merch !!
          <MdOutlineShoppingCart className="inline-block" />
        </h2>
      </div>
    </div>
  );
}
