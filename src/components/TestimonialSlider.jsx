import React from 'react';
import Slider from 'react-slick';
import './TestimonialSlider.css'; // Assurez-vous que le chemin du fichier est correct
const testimonials = [
  {
    name: 'John Doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'url_de_l_image_1.jpg',
  },
  {
    name: 'Jane Smith',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'url_de_l_image_2.jpg',
  },
  {
    name: 'Alice Johnson',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: 'url_de_l_image_3.jpg',
  },
];

const TestimonialSlider = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  
  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-content">{testimonial.content}</p>
            <h3 className="testimonial-author">{testimonial.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
