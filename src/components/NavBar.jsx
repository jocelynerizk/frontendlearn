import { useRef} from "react";
import { BrowserRouter,Routes,Route,Link, useNavigate } from 'react-router-dom';
import { FaBars ,FaTimes } from "react-icons/fa";


const NavBar = () => {
  const navRef = useRef();
  const showNavBar=() => {
    navRef.current.classList.toggle("responsive_nav");
  }

  const navigate = useNavigate();
  
  return (
    <div className="minihead">
   
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars className="Fabars" />
      </button>
      <nav  className="header-nav"ref={navRef}>
      <a className="header-a"  href="#bout">About </a>
      <a className="header-a"  href="/Courses">Courses</a>
      <a className="header-a"  href="#Teachers">Teachers</a>
      <a className="header-a" href="#TestimonialSection">Testimonials</a>
      <a className="header-a"  href="#Contactus">Contact Us</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
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