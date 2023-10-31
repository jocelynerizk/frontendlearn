import React, { useState } from 'react';


const data = [
  { id: 1, label: 'Lesson 1', date: '01/10/2023', description: 'Content 1' },
  { id: 2, label: 'Lesson 2', date: '02/10/2023', description: 'Content 2' },
  { id: 3, label: 'Lesson 3', date: '03/10/2023', description: 'Content 3' },
  { id: 4, label: 'Lesson 4', date: '04/10/2023', description: 'Content 4' },
  { id: 5, label: 'Lesson 5', date: '05/10/2023', description: 'Content 5' }
];

const Lessons = () => {
  const [activeDescription, setActiveDescription] = useState('');

  const handleLabelClick = (description) => {
    setActiveDescription(description);
  };

  return (
    <div className="container">
      <div className="left-container">
        {data.map(item => (
          <div key={item.id} className="item">
            <div className="label" onClick={() => handleLabelClick(item.description)}>
              {item.label}
            </div>
            <div className="date">{item.date}</div>
            <button className="command-button">Commande</button>
          </div>
        ))}
      </div>
      <div className="right-container">
        <div className="description">
          {activeDescription && <p>{activeDescription}</p>}
        </div>
      </div>
    </div>
  );
};

export default Lessons;
