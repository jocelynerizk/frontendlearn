import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import locationbeirut from "../images/locationbeirut.jpeg";
import call from "../Svgs/call-white.svg";
import email from "../Svgs/email-white.svg";
import linkedin from"../Svgs/linkedin-white.svg"




const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_q0vtit5', 'template_427q15q', form.current, 'Rw_8cWcs2_T5iKK2x')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
  return (

  <div className="subc" id = "contact">
 
  <div className="contactmain">

    <form ref={form} onSubmit={sendEmail} className="contactmain1">
      <input
        type="text"
        className="line-input"
        placeholder="Your Name"
        span=""      name="from_name"  required

        style={{ color: "white", fontSize: 18 }}
      />

      <input
        type="text"
        className="line-input"
        placeholder="Your Email"
        span="" name="user_email" required
        style={{ color: "#ffffff", fontSize: 18 }}
      />
      <input
        type="text"
        className="line-input"
        placeholder="Subject" required
        span="" name="subject"
        style={{ color: "#ffffff", fontSize: 18 }}
      />
      <input
        type="text"
        className="line-input"
        placeholder="Your Message" required
        span="" name="message"
        style={{ color: "#ffffff", fontSize: 18 }}
      />
      <input type="submit" value="Send message" className="send1" style={{ color: "aliceblue" }}/>
      <div className="info info1">
                <img src={email} className="svgs" alt="logo" />
                <a href="mailto:dev.jocelyne.rizk@isae.edu.lb" className="get-in-info">
                jocelyne.rizk@isae.edu.lb
                </a>
              </div>
    
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
           <div className="info info1">
                <img src={call} className="svgs"  alt="logo" />
                <p className="get-in-info"> +961 03 577 105</p>
              </div>
    </div>

    </div>

  
  );
};

export default Contact;
