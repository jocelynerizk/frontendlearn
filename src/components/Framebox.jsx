import { FaBars ,FaTimes,FaRegIdCard } from "react-icons/fa";
import panaya from "../images/panaya.jpeg";
import fss from "../images/fss.jpeg";
import iso9001 from "../images/iso9001.jpeg";
import cisco from "../images/cisco.jpeg";
import python from "../images/python.jpeg";
const data = [
    {
        id: 1,
        imageSrc: panaya,
        text: 'Panaya est une plateforme cloud de gestion du changement et d assurance qualité logicielle',
        buttonText1: 'Enroll',
        buttonText2: 'Details'
    },
    {
        id: 2,
        imageSrc: fss,
        text: 'Le standard de sécurité alimentaire est un ensemble de normes et de pratiques établies pour garantir la qualité, la sécurité et la disponibilité des denrées alimentaires',
        buttonText1: 'Enroll',
        buttonText2: 'Details'
    },
    {
        id: 3,
        imageSrc: iso9001,
        text: 'ISO 9001 est un standard international de gestion de la qualité qui établit les critères pour un système de management de la qualité efficace, ',
        buttonText1: 'Enroll',
        buttonText2: 'Details'
    },
    {
        id: 4,
        imageSrc: cisco,
        text: ' leader dans le domaine des réseaux informatiques, offrant des solutions et des services innovants pour la communication et la connectivité,',
        buttonText1: 'Enroll',
        buttonText2: 'Details'
    },
    {
        id: 5,
        imageSrc: python,
        text: 'Python est un langage de programmation polyvalent et convivial',
        buttonText1: 'Enroll',
        buttonText2: 'Details'
    }
  
];

const Framebox  = () => {
    return (

        <div className="frameBoxpp">
            {data.map(item => (
                <div key={item.id} className="box">
                    <img className="cimg" src={item.imageSrc} alt={`Image ${item.id}`} />
                    <div className="box-content">
                        <p>{item.text}</p>
                    
                        <button className="enroll">{item.buttonText1}</button> 
                        <button className="enroll">{item.buttonText2}</button>
                       
                        
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Framebox;
