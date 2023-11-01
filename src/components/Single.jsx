import React, { useState } from 'react';

const Single = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  const popupContent = (
    <div className="popup-content">
      <h2>Question</h2>
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className="popup-row">
          <input type="radio" id={`radio${index}`} name="popup-radio" />
          <label htmlFor={`radio${index}`}>Texte de l'option {index}</label>
        </div>
      ))}
      <button>Answer</button>
      <button onClick={closePopup}>go back</button>
    </div>
  );


    return (
        <div  className="frameBoxpp" id = "single">
            <div className="grandtitre">
            <h1 className="title">Description of Content</h1>
            </div>
            <p className="grey">
            E-learn  est accessible sur appareil mobile. Les utilisateurs pourront y accéder via ordinateurs, tablettes et téléphones intelligents,       
            <br />sans nécessiter l'utilisation de modules supplémentaires. Il est accessible aux personnes ayant divers types de déficiences.
            <br />E-learn  est accessible sur appareil mobile. Les utilisateurs pourront y accéder via ordinateurs, tablettes et téléphones intelligents,       
            <br />sans nécessiter l'utilisation de modules supplémentaires. Il est accessible aux personnes ayant divers types de déficiences.            
            </p>
            <div className="box">
                            <p>URL Video:URL VideoURL VideoURL VideoURL Video</p>
                            <div className="enroll">
                             <button>Watch Video</button>
                             <button onClick={togglePopup}>Start Quiz</button>
        </div>
      </div>
      {showPopup && <div className="popup">{popupContent}</div>}
    </div>
    );
};

export default Single;