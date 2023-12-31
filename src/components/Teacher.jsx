import React from 'react';
import './Teacher.css';

import teacher1 from "../images/teacher1.jpeg";
import teacher2 from "../images/teacher2.jpeg";
import teacher3 from "../images/teacher3.jpeg";
import teacher4 from "../images/teacher4.jpeg";
import svg1 from"../Svgs/linkedin-white.svg"
import svg2 from"../Svgs/linkedin-white.svg"
import svg3 from"../Svgs/linkedin-white.svg"
import svg4 from"../Svgs/linkedin-white.svg"

const coursesData = [
  {
    title: 'Teacher1Name',
    image: teacher1,
    svge : svg1,
  },
  {
    title: 'Teacher2Name',
    image: teacher2,
    svge : svg2,
  },
  {
    title: 'Teacher3Name',
    image: teacher3,
    svge : svg3,
  },
  {
    title: 'Teacher4Name',
    image: teacher4,
    svge : svg4,
  },
];

const Teacher = () => {
  return (
    <div>
         <div className="titre">
         <h1 className="title">Instructors</h1>
      <div className="line-div">
        <hr className="line" />
      </div>
         </div>
      <div className="topcard1">
        {coursesData.map((course, index) => (
          <div className="card1" key={index}>
            <div className="teachdet">
            <img src={course.image} alt={course.title} className="imgs1" />
            </div>
            <div className="line-div">
              <hr className="linevert" />
            </div>
            <div className="container1">
            <p clname="dess">{course.title}</p>
            <img src={course.svge} alt={course.title} className="svgs" />
            </div>

          </div>

        ))}
      </div>
 
    </div>
  );
};

export default Teacher;
