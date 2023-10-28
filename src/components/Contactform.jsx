import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez envoyer les données du formulaire par e-mail ou via une API
    console.log('Données du formulaire :', formData);
    // Réinitialise le formulaire après l'envoi
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="subc">
 
    <div className="contactmain">
  
      <form onSubmit={handleSubmit} className="contactmain1">

      <div>
      
        <input
          type="text"
          id="name"
          name="name"
          className="line-input"
          placeholder="Your Name"
          value={formData.name}
          style={{ color: "#369", fontSize: 18 }}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
 
        <input
          type="email"
          id="email"
          name="email"
          className="line-input"
          placeholder="Your Email"
          style={{ color: "#369", fontSize: 18 }}
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
     
        <input
        type="text"
        className="line-input"
          id="message"
          name="message"
          placeholder="Your Message"
          style={{ color: "#369", fontSize: 18 }}
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="send1" style={{ color: "aliceblue" }}>Envoyer le message</button>
    </form>
    </div>

<div className="contactmain">
  <div className="info info1">
  <h4 > Location</h4>
  </div>

  <iframe
    title="Google Map"
    className="gmap_iframe"
    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University%20of%20Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
  />

</div>

</div>


  );
};

export default ContactForm;
