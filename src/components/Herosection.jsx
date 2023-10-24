// HeroSection.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Herosection.css'; // Assurez-vous d'avoir votre fichier CSS pour le style

const images = [
  require('../images/hero1.jpg'),
  require('../images/hero2.jpg'),
  require('../images/hero3.jpg'),
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mycarobig">
    <div className="mycaro">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className="monim" src={image} alt={`slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      </div>
      </div>

  );
};

export default HeroSection;
