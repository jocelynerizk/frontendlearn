import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testi.css'; // Assurez-vous que le chemin du fichier est correct
import  '../images/Testimonial 1.jpg';
const testimonials = [
  {
    id: 1,
    author: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida est eu placerat luctus.',
    image: '../images/Testimonial 1.jpg',
  },
  {
    id: 2,
    author: 'Jane Smith',
    text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    image: '../images/Testimonial 1.jpg',
  },
  // Add more testimonials as needed
];

const Testimonialnew = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="testimonial-container">

    <div className="testimonial-slider">
      <Slider {...sliderSettings}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-item">
            <img src={testimonial.image} alt="testimonial" className="testimonial-image" />
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-author">{testimonial.author}</p>
          </div>
        ))}
      </Slider>
    </div>
            
    </div>
  );
};

export default Testimonialnew;
