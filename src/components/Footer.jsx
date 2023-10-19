import location from "../Svgs/location-white.svg";
import call from "../Svgs/call-white.svg";
import email from "../Svgs/email-white.svg";
import linkedin from"../Svgs/linkedin-white.svg"

import './Footer.css';
const Footer = () => {
    return (
        <footer>
          
            <div className="footer-container">
                <p className="footer-titles"> About</p>
                <div className="big-div-info">
                <div className="info info1">
                <img src={location} className="svgs" />
                <p className="get-in-info">Beirut, Lebanon </p>
              </div>
              <div className="info info1">
                <img src={email} className="svgs" />
                <a href="mailto:dev.jocelyne.rizk@isae.edu.lb" className="get-in-info">
                jocelyne.rizk@isae.edu.lb
                </a>
              </div>
              <div className="info info1">
                <img src={call} className="svgs" />
                <p className="get-in-info"> +961 03 577 105</p>
              </div>
            </div>
            </div>
          
            <div className="footer-container">
            <p className="footer-titles">Information</p>
                <ul className="information-ul">
                    <li className="information-li"><a href="#Home">Home </a></li>
                    <li className="information-li"><a href="#About">About</a></li>
                    <li className="information-li"><a href="#Contact">Contact Us</a></li>
                </ul>
            </div>
            
            
            <div className="footer-container f1">
            <p className="footer-titles"> Social Links</p>
            <div className="social-container">
            <img src={email} className="svgs s1 " />
            <img src={linkedin} className="svgs foot-svg" />
            </div>
            

            </div>
            
        </footer>
    )
}

export default Footer;
