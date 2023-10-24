import { useRef} from "react";
import { Link } from "react-router-dom";
import { FaBars ,FaTimes } from "react-icons/fa";
import './NavBar.css';

const NavBar = () => {
  const navRef = useRef();
  const showNavBar=() => {
    navRef.current.classList.toggle("responsive_nav");
  }
  
  return (
    <div className="header1">
   
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars className="Fabars" />
      </button>
      <nav  className="header-nav"ref={navRef}>
      <a className="header-a"  href="/#About">About </a>
      <a className="header-a"  href="/#Courses">Courses</a>
      <a className="header-a"  href="/#Teachers">Teachers</a>
      <a className="header-a" href="/#TestimonialSection">Testimonials</a>
      <a className="header-a"  href="/#Contactus">Contact Us</a>
        <button className="nav-btn1 nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>

   <div className="head-section-1">
      <div>
      <h3 className="signin">Log In</h3>
      </div>
    <div>
    <button className="signup" onClick={() => window.open('signup.html')}>Sign UP</button>
    </div>
    </div>

    </div>
  );
};

export default NavBar;