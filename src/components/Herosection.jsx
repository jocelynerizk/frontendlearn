// HeroSection.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSection.css'; // Assurez-vous d'avoir votre fichier CSS pour le style

const images = [
  require('./images/image1.jpg'),
  require('./images/image2.jpg'),
  require('./images/image3.jpg'),
  require('./images/image4.jpg'),
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="hero-section">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
