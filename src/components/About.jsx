import React from 'react';
import './style.css';
import './About.css'; // Assurez-vous d'importer votre fichier CSS s'il contient des styles spécifiques

const About = () => {
    return (
        <div className="myabout">
         <div className="grandtitre">
            <h1 className="title">About Us</h1>
            <div className="line-div">
            <hr className="line" />
           </div>
        </div>


            <p className="grey">
            E-learn  est accessible sur appareil mobile. Les utilisateurs pourront y accéder via ordinateurs, tablettes et téléphones intelligents,       
            <br />sans nécessiter l'utilisation de modules supplémentaires. Il est accessible aux personnes ayant divers types de déficiences.
            <br />E-learn  est accessible sur appareil mobile. Les utilisateurs pourront y accéder via ordinateurs, tablettes et téléphones intelligents,       
            <br />sans nécessiter l'utilisation de modules supplémentaires. Il est accessible aux personnes ayant divers types de déficiences.            
            </p>

        </div>
    );
};

export default About;