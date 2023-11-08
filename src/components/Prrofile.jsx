import React, { useState } from 'react';
const Profile = () => {
  const [activeTab, setActiveTab] = useState('signup');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handleBoardSubmit = (event) => {
    event.preventDefault();
    // Logique pour gérer la soumission du formulaire d'inscription
  };
  const handleProfileSubmit = (event) => {
    event.preventDefault();
    // Logique pour gérer la soumission du formulaire de connexion
  };

  return (
    <div className="form-wrap">
      <div className="tabs">
        <h3 className={`signup-tab ${activeTab === 'signup' ? 'active' : ''}`} onClick={() => handleTabChange('signup')}>
Board        </h3>
        <h3 className={`login-tab ${activeTab === 'login' ? 'active' : ''}`} onClick={() => handleTabChange('login')}>
          Profile
        </h3>
      </div>

      <div className="tabs-content">
        <div id="signup-tab-content" className={`tab-content ${activeTab === 'signup' ? 'active' : ''}`}>
          <form className="signup-form" onSubmit={handleBoardSubmit}>
            <input type="email" className="input" placeholder="Email" required />
            <input type="text" className="input" placeholder="Username" required />
            <input type="password" className="input" placeholder="Password" required />
            <input type="submit" className="button" value="Sign Up" />
          </form>

        </div>

        <div id="login-tab-content" className={`tab-content ${activeTab === 'login' ? 'active' : ''}`}>
          <form className="login-form" onSubmit={handleProfileSubmit}>
            <input type="text" className="input" placeholder="Email or Username" required />
            <input type="password" className="input" placeholder="Password" required />
            <input type="checkbox" className="checkbox" id="remember_me" />
            <label htmlFor="remember_me">Remember me</label>
            <input type="submit" className="button" value="Login" />
          </form>

        </div>
      </div>
    </div>
  );
};

export default Profile;
