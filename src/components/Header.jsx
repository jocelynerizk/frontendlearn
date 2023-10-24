import React, { useState } from 'react';
import './Header.css'; // Assurez-vous d'avoir un fichier CSS avec les styles correspondants

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="head-section-1">
    <h1 className="elearn">E-learn</h1>
    
    <div><p className="signin">Log In</p></div>
    <div><button className="signup" onClick={() => window.open('signup.html')}>Sign UP</button></div>
    </div>
  );
};

export default Header;
