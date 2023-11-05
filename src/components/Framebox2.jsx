import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaBars ,FaTimes,FaRegIdCard } from "react-icons/fa";
import panaya from "../images/panaya.jpeg";
import fss from "../images/fss.jpeg";
import iso9001 from "../images/iso9001.jpeg";
import cisco from "../images/cisco.jpeg";
import python from "../images/python.jpeg";
import { Link } from "react-router-dom";
import juste from "../images/juste.jpeg";
const data = [

    {
        id: 3,
        imageSrc: iso9001,
        text: 'ISO 9001 est un standard international de gestion de la qualité qui établit les critères pour un système de management de la qualité efficace, ',
        buttonText1: 'Enroll',
        imageSrc1: juste
    },
    {
        id: 4,
        imageSrc: cisco,
        text: ' leader dans le domaine des réseaux informatiques, offrant des solutions et des services innovants pour la communication et la connectivité,',
        buttonText1: 'Enroll',
        imageSrc1: juste

    },
    {
        id: 5,
        imageSrc: python,
        text: 'Python est un langage de programmation polyvalent et convivial',
        buttonText1: 'Enroll',
        imageSrc1: juste
    }
  
];

const Framebox2 = () => {


    return (

            <div className="frameBoxpp">
                {data.map((item) => (
                    <div key={item.id} className="box">
                        <img className="cimg" src={item.imageSrc} alt={`Image ${item.id}`} />
                        <div className="box-content">
                            <p>{item.text}</p>
                            <img  className="cimg" src={item.imageSrc1}></img>
                        </div>
    
                    </div>
                    
                ))}
         

        </div>
    );
};

export default Framebox2;
