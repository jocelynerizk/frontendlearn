import { useRef} from "react";
import { Link } from "react-router-dom";
import { FaBars ,FaTimes ,FaStepForward } from "react-icons/fa";
import logo from "../images/logo.png";

const Mininav = () => {
  const navRef = useRef();
  const showNavBar=() => {
    navRef.current.classList.toggle("responsive_nav");
  }
  
  return (
    <div className="minihead">
       <img className="mylogo" src={logo}  />
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars className="Fabars" />
      </button>
      <nav  className="header-nav"ref={navRef}>
      <a className="header-a"  href="/">Home</a>
      <a className="header-a"  href="/Board">Board</a>
      <a className="header-a"  href="/Profile">Profile</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>



      
    <Link to="/Singin">
    <button className="signup" >Logout</button>
    </Link>
 


    </div>
  );
};

export default Mininav;