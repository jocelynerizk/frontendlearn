import React, { useState } from 'react';
import './profile.css'; // Assurez-vous d'avoir le fichier App.css dans le même répertoire que ce fichier React

const Signin = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // Logique pour gérer la soumission du formulaire d'inscription
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Logique pour gérer la soumission du formulaire de connexion
  };

  return (
    <div className="form-wrap">
      <div className="tabs">
        <h3 className={`profile-tab ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => handleTabChange('profile')}>
        Prodile
        </h3>
        <h3 className={`Active-Enrollement ${activeTab === 'Active-Enrollement' ? 'active' : ''}`} onClick={() => handleTabChange('login')}>
        Active-Enrollement
        </h3>
      </div>

      <div className="tabs-content">
        <div id="profile-tab-content" className={`tab-content ${activeTab === 'profile-tab' ? 'active' : ''}`}>
          <form className="profile-form" onSubmit={handleSignupSubmit}>
            <input type="text" className="input" placeholder="Name" required />
            <input type="text" className="input" placeholder="Phone" required />
            <input type="text" className="input" placeholder="Email" required />
            <input type="submit" className="button" value="Sign Up" />
          </form>

        </div>

        <div id="login-tab-content" className={`tab-content ${activeTab === 'login' ? 'active' : ''}`}>
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <input type="text" className="input" placeholder="Email or Username" required />
            <input type="password" className="input" placeholder="Password" required />
            <input type="checkbox" className="checkbox" id="remember_me" />
            <label htmlFor="remember_me">Remember me</label>
            <input type="submit" className="button" value="Login" />
          </form>
          <div className="help-text">
            <p><a href="#">Forget your password?</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
