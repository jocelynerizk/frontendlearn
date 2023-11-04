import React, { useState } from 'react';
import Footer1 from '../components/Footer1.jsx';

import { Link } from 'react-router-dom';

const ActiveEnrollmentForm = () => {
  
  return (
    <div className="container">
             <h1 className="title">IN PROGRESS</h1>
           <hr className="line" />
       <div  className="contata">

          <p className="activetext">Enrolled AT COURSE TITLE + Course CODE</p>
          <p className="activetext">Enrolled at Date</p>


              <Link to="/Singlecourse">
              <button className="command-button" >
              Launch
              </button>
            </Link>
           <Link to="/Singlecourse">
            <button className="command-button" >
            Drop
            </button>
           </Link>

           </div>
    </div>
  );
};

export default ActiveEnrollmentForm;
