import React from 'react';
import './Courses.css';

import css1 from "../Svgs/css1.svg";
import database from "../Svgs/database.svg";
import figma from "../Svgs/figma.svg";
import javascript from "../Svgs/javascript.svg";

const coursesData = [
  {
    title: 'CSS',
    image: css1,
    description: 'Description du cours CSS',
    startDate: 'Date de début',
    endDate: 'Date de fin',
  },
  {
    title: 'Javascript',
    image: javascript,
    description: 'Description du cours Javascript',
    startDate: 'Date de début',
    endDate: 'Date de fin',
  },
  {
    title: 'Figma',
    image: figma,
    description: 'Description du cours Figma',
    startDate: 'Date de début',
    endDate: 'Date de fin',
  },
  {
    title: 'Database',
    image: database,
    description: 'Description du cours Database',
    startDate: 'Date de début',
    endDate: 'Date de fin',
  },
  {
    title: 'CSS',
    image: css1,
    description: 'Description du cours CSS',
    startDate: 'Date de début',
    endDate: 'Date de fin',
  },
];

const Courses = () => {
  return (
    <div>
         <div className="titre">
         <h1 className="title">Courses</h1>
      <div className="line-div">
        <hr className="line" />
      </div>
         </div>

      
      <div className="topcard">
        {coursesData.map((course, index) => (
          <div className="card" key={index}>
            <div className="coursetit">
              <h4><b>{course.title}</b></h4>
              <img src={course.image} alt={course.title} className="svgs" />
            </div>
            <div className="line-div">
              <hr className="linevert" />
            </div>
            <div className="container">
              <p className="des">{course.description}</p>
              <p className="des">Début : {course.startDate}</p>
              <p className="des">Fin : {course.endDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
