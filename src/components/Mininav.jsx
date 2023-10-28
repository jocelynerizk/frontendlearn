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
      <a className="header-a"  href="/Home">Home</a>
      <a className="header-a"  href="/c">Courses</a>
      <a className="header-a"  href="/#sign">Sign</a>
      <a className="header-a"  href="/#Teachers">Board</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>

   <div className="head-section-1">

    <div>
    <button className="signup" onClick={() => window.open('signup.html')}>Sign UP</button>
    </div>
    </div>

    </div>
  );
};

export default Mininav;