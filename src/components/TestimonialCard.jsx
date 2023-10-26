import React from 'react';
import './TestimonialCard.css';

const testimonials = [
  {
    id: 1,
    name: 'Alice Johnson',
    message: 'Votre service est incroyable ! Je le recommande à tous mes amis.',
    comment: 'Merci pour votre soutien continu. Nous sommes ravis d\'avoir pu vous aider !',
  },
  {
    id: 2,
    name: 'Bob Smith',
    message: 'J\'ai été impressionné par la qualité de votre service. Merci pour l\'excellent travail !',
    comment: 'Votre équipe est vraiment professionnelle. Je suis reconnaissant pour votre aide précieuse.',
  },
  {
    id: 3,
    name: 'Eva Martin',
    message: 'Le meilleur service que j\'ai jamais utilisé. Merci pour votre efficacité et votre gentillesse.',
    comment: 'Je suis très satisfait des résultats. Je vais certainement recommander vos services à d\'autres.',
  },
  {
    id: 4,
    name: 'David Brown',
    message: 'Un grand merci à toute l\'équipe. Vous avez rendu ce processus facile et sans stress.',
    comment: 'Votre expertise a été inestimable. Je suis extrêmement content des résultats obtenus.',
  },
];

const TestimonialCard = () => {
  return (

    <div className="testimonial-container">
      {testimonials.map((testimonial, index) => (
  <div className={`flip-card ${index === testimonials.length - 1 ? 'last-card' : ''}`} key={testimonial.id}>
    {/* ... contenu de la carte ... 
      {testimonials.map(testimonial => (
        <div className="flip-card" key={testimonial.id}>*/}
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h2>{testimonial.name}</h2>
              <p className="quote-icon">❝</p>
              <p className="message">{testimonial.message}</p>
            </div>
            <div className="flip-card-back">
              <p>{testimonial.comment}</p>
            </div>
          </div>
        </div>
      ))}

    </div>

  );
}

export default TestimonialCard;
