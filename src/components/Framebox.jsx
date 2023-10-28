import React, { useState } from 'react';
import Modal from 'react-modal';
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

const Framebox = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedItem(null);
        setModalIsOpen(false);
    };

    return (

            <div className="frameBoxpp">
                {data.map((item) => (
                    <div key={item.id} className="box">
                        <img className="cimg" src={item.imageSrc} alt={`Image ${item.id}`} />
                        <div className="box-content">
                            <p>{item.text}</p>
                            <div className="enroll">
                                <button className="enroll">{item.buttonText1}</button>
                                <button className="enroll" onClick={() => openModal(item)}>
                                    {item.buttonText2}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
         
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal-overlay">
                    {selectedItem && (
                        <div className="modal-content">
                            <h2 className="modal-title">Vous etes en cours de vous informer sur</h2>
                            <p className="modal-text">{selectedItem.text}</p>
                            <button className="modal-close-btn" onClick={closeModal}>
                                Fermer
                            </button>
                        </div>
                    )}
                </Modal>
        </div>
    );
};

export default Framebox;
