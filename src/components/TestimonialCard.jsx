import React, { useState } from 'react';
import FlipCard from 'react-card-flip';
import { FaQuoteLeft } from 'react-icons/fa';
import './TestimonialCard.css';

const testimonials = [
  {
    name: 'Alice Johnson',
    message: 'Votre service est incroyable ! Je le recommande à tous mes amis.',
    comment: 'Merci pour votre soutien continu. Nous sommes ravis d\'avoir pu vous aider !',
  },
  {
    name: 'Alice Johnson',
    message: 'Votre service est incroyable ! Je le recommande à tous mes amis.',
    comment: 'Merci pour votre soutien continu. Nous sommes ravis d\'avoir pu vous aider !',
  },
  {
    name: 'Alice Johnson',
    message: 'Votre service est incroyable ! Je le recommande à tous mes amis.',
    comment: 'Merci pour votre soutien continu. Nous sommes ravis d\'avoir pu vous aider !',
  },
  // Ajoutez d'autres témoignages ici
];

const TestimonialCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="testimonial-carousel">
      {testimonials.map((testimonial, index) => (
        <FlipCard key={index} isFlipped={isFlipped} flipDirection="horizontal">
          <div className="card-front" onClick={handleCardClick}>
            <h2>{testimonial.name}</h2>
            <p className="quote-icon"><FaQuoteLeft /></p>
            <p className="message">{testimonial.message}</p>
          </div>
          <div className="card-back" onClick={handleCardClick}>
            <p>{testimonial.comment}</p>
          </div>
        </FlipCard>
      ))}
    </div>
  );
}

export default TestimonialCard;
