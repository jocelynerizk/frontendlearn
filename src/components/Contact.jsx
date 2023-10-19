import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import gmail from "../Svgs/mail1.svg";


import './Contact.css';
const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_o57z4mm', 'template_ht1z0cl', form.current, 'Lvk1L6c9LoarSAiee')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (

  <div className="contactmain" id="contact">
 
  <div className="subc">
    <div className="contactmain1">
    <form ref={form} onSubmit={sendEmail} className="contactmain1">
      <input
        type="text"
        className="line-input"
        placeholder="Your Name"
        span=""      name="from_name" 

        style={{ color: "white", fontSize: 18 }}
      />

      <input
        type="text"
        className="line-input"
        placeholder="Your Email"
        span="" name="user_email" 
        style={{ color: "#ffffff", fontSize: 18 }}
      />

      <input
        type="text"
        className="line-input"
        placeholder="Your Message"
        span="" name="message"
        style={{ color: "#ffffff", fontSize: 18 }}
      />

      <input type="submit" value="Send message" className="send1" style={{ color: "aliceblue" }}/>
      </form>
    </div>

  </div>

</div>


    
  );
};

export default Contact;
