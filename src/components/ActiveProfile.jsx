
import { Link } from 'react-router-dom';
import React from "react";

const ActiveProfile = () => {
  return (

     <div className="container">
             <h1 className="title">Edit Profile</h1>
           <hr className="line" />
            <div  className="contata">
            <input type="text" className="line-input" placeholder="Name" required />
            <input type="text" className="line-input" placeholder="Phone" required />
            <input type="text" className="line-input" placeholder="Email" required />
            
      <Link to="/Singlecourse">
      <button className="command-button" >
      submit
      </button>
    </Link>
            </div>

</div>
  );
};

export default ActiveProfile;
