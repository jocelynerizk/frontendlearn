import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css'; 
import '../images/image1.jpg';
import '../images/image2.jpg';
import '../images/image3.jpg';

const images = [
  '../images/image1.jpg',
  '../images/image2.jpg',
  '../images/image3.jpg',
  // Ajoutez ici les chemins de vos images
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ImageSlider = () => {
  return (
    <div className="slider-container">
      <h2>Slider d'Images</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
      <button>Cliquer</button>
    </div>
  );
}

export default ImageSlider;
