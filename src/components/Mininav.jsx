import { useRef} from "react";
import { Link } from "react-router-dom";
import { FaBars ,FaTimes ,FaStepForward } from "react-icons/fa";


const Mininav = () => {
  const navRef = useRef();
  const showNavBar=() => {
    navRef.current.classList.toggle("responsive_nav");
  }
  
  return (
    <div className="minihead">
   
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars className="Fabars" />
      </button>
      <nav  className="header-nav"ref={navRef}>
      <a className="header-a"  href="/">Home</a>
      <a className="header-a"  href="/Singin">Sign In</a>
      <a className="header-a"  href="/Profile">Board</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>

   <div className="head-section-1">

    <div>
    <Link to="/Singin">
    <button className="signup" >Sign UP</button>
      </Link>
    </div>
    </div>

    </div>
  );
};

export default Mininav;