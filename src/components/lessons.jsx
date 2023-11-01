import React, { useState } from 'react';

import verrou from "../images/verrou.jpeg";
import unver from "../images/unver.png";
const data = [
  { id: 1, label: 'Lesson 1', date: '01/10/2023',imageSrc: verrou },
  { id: 2, label: 'Lesson 2', date: '02/10/2023', imageSrc: verrou },
  { id: 3, label: 'Lesson 3', date: '03/10/2023',imageSrc: verrou },
  { id: 4, label: 'Lesson 4', date: '04/10/2023', imageSrc: verrou },
  { id: 5, label: 'Lesson 5', date: '05/10/2023', imageSrc: unver }
];

const Lessons = () => {
  const [activeDescription, setActiveDescription] = useState('');

  const handleLabelClick = (description) => {
    setActiveDescription(description);
  };

  return (
    <div className="container">

        {data.map(item => (
          <div key={item.id} className="item">
            <div className="label" >
              {item.label}
            </div>
            <div className="date">{item.date}</div>
            <img  className="img1" src={item.imageSrc}></img>
            <div>
            <button className="command-button"onClick={() => handleLabelClick(item.description)}>Commande</button>
            </div>
          </div>
        ))}


    </div>
  );
};

export default Lessons;
