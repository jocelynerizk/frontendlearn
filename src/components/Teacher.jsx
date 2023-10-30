import React, { useState } from 'react';
import { FaBars ,FaTimes,FaRegIdCard } from "react-icons/fa";
import teacher1 from "../images/teacher1.jpeg";
import teacher2 from "../images/teacher2.jpeg";
import teacher3 from "../images/teacher3.jpeg";
import teacher4 from "../images/teacher4.jpeg";
const data1 = [
    {
        id: 1,
        imageSrc: teacher1,
        text: 'BOB',
        buttonText1: 'Enroll',
        buttonText2: 'Teacher Contact'
    },
    {
        id: 2,
        imageSrc: teacher2,
        text: 'Maria',
        buttonText1: 'Enroll',
        buttonText2: 'Teacher Contact'
    },
    {
        id: 3,
        imageSrc: teacher3,
        text: 'FADI',
        buttonText1: 'Enroll',
        buttonText2: 'Teacher Contact'
    },
    {
        id: 4,
        imageSrc: teacher4,
        text: 'ghada',
        buttonText1: 'Enroll',
        buttonText2: 'Teacher Contact'
    },

  
];

const Teacher = () => {
    const linkedinUrl = 'https://www.linkedin.com/in/jocelyne-rizk/'; // Remplacez ceci par l'URL de votre profil LinkedIn

    return (

            <div className="topcard" id = "instructors">
                {data1.map((item) => (
                    <div key={item.id} className="card">
                    <img  src={item.imageSrc} alt={`Image ${item.id}`} onClick={() => window.open(linkedinUrl, '_blank')}></img>
                     <p>{item.text}</p>


</div>
      

                ))}
         

        </div>
    );
};

export default Teacher;
