// HeroSection.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const images = [
  require('../images/hero4.jpg'),
  require('../images/hero5.jpg'),

  require('../images/hero1.jpeg'),
  require('../images/hero2.jpeg'),
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

    <div className="mycaro" id = "herosection">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className="monim" src={image} alt={`slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      </div>


  );
};

export default HeroSection;
