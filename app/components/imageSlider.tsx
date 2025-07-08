"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
const images = [
  { src: "/204.jpg" },
  { src: "/GroupImg2.jpeg" },
  { src: "/GroupImg.jpeg" },
  { src: "/modelBlack.jpg" },
  { src: "/modelWhite.jpg" },
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    mobileFirst: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-6">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="relative w-full h-[28rem] border-4 border-amber-700 rounded-xl overflow-hidden shadow-md">
              <Image
                src={image.src}
                alt={`Slide ${index}`}
                fill
                priority
                className="object-contain bg-black"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
