"use client";
import React from "react";
import Slider from "react-slick";

const images = [{ src: "/204.jpg" }, { src: "/203.jpg" }, { src: "/group home 2.jpg" }, { src: "/group home.jpg" }];

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
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-4">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="border-4 border-amber-700 rounded-xl overflow-hidden shadow-md">
              <img src={image.src} alt="slide" width={150} height={100} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
