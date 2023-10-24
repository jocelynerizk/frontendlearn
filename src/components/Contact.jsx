import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import locationbeirut from "../images/locationbeirut.jpeg";
import call from "../Svgs/call-white.svg";
import email from "../Svgs/email-white.svg";
import linkedin from"../Svgs/linkedin-white.svg"

import './Contact.css';

const latitude = 33.9132446;
const longitude = 35.5938398;

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

<div>
<div className="titre">
         <h1 className="title">Contact us</h1>
      <div className="line-div">
        <hr className="line" />
      </div>
 </div>


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

    <div className="contactmain1">
    <div className="google-map-container">
      <iframe
        title="Google Map"
        className="gmap_iframe"
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University%20of%20Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"

        
      />
    </div>
    <img src={locationbeirut}  className="mymap" />
    <a
      href={`https://gps-coordinates.org/my-location.php?lat=${latitude}&lng=${longitude}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      ({latitude}, {longitude})
    </a>

    </div>
    <div className="contactmain1">
          <div className="info info1">
                <img src={email} className="svgs" />
                <a href="mailto:dev.jocelyne.rizk@isae.edu.lb" className="get-in-info">
                jocelyne.rizk@isae.edu.lb
                </a>
              </div>
              <div className="info info1">
                <img src={call} className="svgs" />
                <h4 > +961 03 577 105</h4>
              </div>

            <div className="info info1">
                <img src={linkedin} className="svgs" />
                <p className="get-in-info"> linkidadre</p>
            </div>
              
    </div>
    </div>





</div>
    
  );
};

export default Contact;
