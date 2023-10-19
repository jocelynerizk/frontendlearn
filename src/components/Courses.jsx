import React from 'react';
import './style.css';
import './Courses.css'; 

import css1 from "../Svgs/css1.svg";
import database from "../Svgs/database.svg";
import figma from "../Svgs/figma.svg";
import javascript from"../Svgs/javascript.svg"

const Courses = () => {
    return (
    <div>

   
<div className="topcard"> 

        <div className="card">

            <div className="coursetit">  
                <h4><b>CSS</b></h4>
                <  img src={css1} className="svgs" />
            </div>
            <div className="line-div">
              <hr className="linevert" />
             </div>
                <div className="container">
                <p className="des">Description :</p>
                <p className="des">datedebut :</p>
                <p className="des">datefin :</p>
                </div>
        </div>



        <div className="card">

            <div className="coursetit">  
                <h4><b>Javascript</b></h4>
                <  img src={javascript} className="svgs" />
            </div>
            <div className="line-div">
              <hr className="linevert" />
             </div>
                <div className="container">
                <p className="des">Description :</p>
                <p className="des">datedebut :</p>
                <p className="des">datefin :</p>
                </div>
        </div>
        
        <div className="card">

            <div className="coursetit">  
                <h4><b>figma</b></h4>
                <  img src={figma} className="svgs" />
            </div>
            <div className="line-div">
              <hr className="linevert" />
             </div>
                <div className="container">
                <p className="des">Description :</p>
                <p className="des">datedebut :</p>
                <p className="des">datefin :</p>
                </div>
        </div>
        <div className="card">

        <div className="coursetit">  
            <h4><b>database</b></h4>
            <  img src={database} className="svgs" />
        </div>
        <div className="line-div">
        <hr className="linevert" />
        </div>
            <div className="container">
            <p className="des">Description :</p>
            <p className="des">datedebut :</p>
            <p className="des">datefin :</p>
            </div>
        </div>   
        </div>

    );
};

export default Courses;
