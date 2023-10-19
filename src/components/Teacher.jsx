import React from 'react';
import './style.css';
import './Teacher.css';

import teacher1 from "../images/teacher1.jpeg";
import teacher2 from "../images/teacher2.jpeg";
import teacher3 from "../images/teacher3.jpeg";
import teacher4 from "../images/teacher4.jpeg";

const coursesData = [
  {
    title: 'Teacher1Name',
    image: teacher1,
  },
  {
    title: 'Teacher2Name',
    image: teacher2,
  },
  {
    title: 'Teacher3Name',
    image: teacher3,
  },
  {
    title: 'Teacher4Name',
    image: teacher4,
  },
];

const Teacher = () => {
  return (
    <div>
      <h1 className="title">Teachers</h1>
      <div className="line-div">
        <hr className="line" />
      </div>
      <div className="topcard">
        {coursesData.map((course, index) => (
          <div className="card1" key={index}>
            <div className="coursetit">
              <img src={course.image} alt={course.title} className="imgs" />
            </div>
            <div className="line-div">
              <hr className="linevert" />
            </div>
            <div className="container">
            <h4><b>{course.title}</b></h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacher;
