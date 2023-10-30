import React, { useState } from 'react';
import Modal from 'react-modal';
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

            <div className="topcard" id = "instructors">
                {data1.map((item) => (
                    <div key={item.id} className="card">
                    <img  src={item.imageSrc} alt={`Image ${item.id}`} />
                    
                     <p>{item.text}</p>
                        <button  onClick={() => openModal(item)}>
                          {item.buttonText2}
                      </button>
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

export default Teacher;
