import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaBars ,FaTimes,FaRegIdCard } from "react-icons/fa";
import panaya from "../images/panaya.jpeg";
import fss from "../images/fss.jpeg";
import iso9001 from "../images/iso9001.jpeg";
import cisco from "../images/cisco.jpeg";
import python from "../images/python.jpeg";
import { Link } from 'react-router-dom';

const data = [
    {
        id: 1,
        imageSrc: panaya,
        text: 'Panaya',
        buttonText1: 'Enroll',
        buttonText2: 'Details'
    },
    {
        id: 2,
        imageSrc: fss,
        text: 'Food Security',
        buttonText1: 'Enroll',
        buttonText2: 'Details'
    },
    {
        id: 3,
        imageSrc: iso9001,
        text: 'ISO 9001',
        buttonText1: 'Enroll',
        buttonText2: 'Details'
    },
    {
        id: 4,
        imageSrc: cisco,
        text: 'CISCO',
        buttonText1: 'Enroll',
        buttonText2: 'Details'
    },
    {
        id: 5,
        imageSrc: python,
        text: 'Python',
        buttonText1: 'Enroll',
        buttonText2: 'Details'
    }
  
];

const Courses1 = () => {

    return (

            <div className="topcard" id = "coursess">
                {data.map((item) => (
                    <div key={item.id} className="card">
                    <img  src={item.imageSrc} alt={`Image ${item.id}`} />    
                     <p>{item.text}</p>
                     <Link to="/Courses">
                     <button >{item.buttonText1}</button>
                    </Link>
                    </div>

                ))}
         
   
        </div>
    );
};

export default Courses1;
