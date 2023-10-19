import React from "react";
import "./SliderComponent"; // Import Swiper styles
import Swiper from "react-id-swiper";


import teacher1 from "../images/teacher1.jpeg";
import teacher2 from "../images/teacher2.jpeg";
import teacher3 from "../images/teacher3.jpeg";
import teacher4 from "../images/teacher4.jpeg";

const SliderComponent = () => {
  const params = {
    // Swiper parameters
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };

  const images = [
    teacher1,
    teacher2,
    teacher3,
    teacher4
  ];

  return (
    <div className="swiper-container">
      <Swiper {...params}>
        {images.map((image, index) => (
          <div key={index} className="swiper-slide">
            <img src={image} alt={`slide ${index + 1}`} />
          </div>
        ))}
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default SliderComponent;