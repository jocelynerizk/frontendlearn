import React, { useState } from 'react';
import Footer1 from '../components/Footer1.jsx';

import { Link } from 'react-router-dom';

const ActiveEnrollmentForm = () => {
  
  return (
    <div className="container">


        <Link to="/Singlecourse">
        <button className="command-button" >
        Launch
        </button>
      </Link>


    </div>
  );
};

export default ActiveEnrollmentForm;
