import { useRef} from "react";
import { BrowserRouter,Routes,Route,Link, useNavigate } from 'react-router-dom';
import { FaBars ,FaTimes } from "react-icons/fa";
import logo from "../images/logo.png";

const NavBar = () => {
  const navRef = useRef();
  const showNavBar=() => {
    navRef.current.classList.toggle("responsive_nav");
  }

  const navigate = useNavigate();
  
  return (

    <div className="minihead">
<div>
<img className="mylogo" src={logo}  />
</div>

      <button className="nav-btn" onClick={showNavBar}>
        <FaBars className="Fabars" />
      </button>
 
      <nav  className="header-nav"ref={navRef}>
      <a href="/" className="nav-link">Home</a>
 
        <a href="/Courses" className="nav-link">Courses</a>
        <a href="#instructors" className="nav-link">Instructors</a>
        <a href="#contact" className="nav-link">Contact Us</a>
        <a href="#testimonials" className="nav-link">Testimonials</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>

   <div className="head-section-1">

      <Link to="/Singin">
      <h3 className="signin">Log In</h3>
      </Link>
    <div>
    <Link to="/Singin">
    <button className="signup" >Sign UP</button>
      </Link>

    </div>
    </div>

    </div>
  );
};

export default NavBar;