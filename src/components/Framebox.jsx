import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import { FaBars ,FaTimes,FaRegIdCard } from "react-icons/fa";
import panaya from "../images/panaya.jpeg";
import fss from "../images/fss.jpeg";
import iso9001 from "../images/iso9001.jpeg";
import cisco from "../images/cisco.jpeg";
import python from "../images/python.jpeg";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';

import { useAuthContext } from '../hooks/useAuthContext';

const Framebox = () => {
    const [courses, setCourses] = useState([]);
    const {user}=useAuthContext();
    const navigate=useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                
                    const response = await axios.get('http://localhost:5000/courses/AllCoursesForIndex');
                    if (response) setCourses(response.data.result);
                    else console.log("failed to fetch data");
                console.log(response.data.result);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    function formatDate(inputDate) {
         const date = new Date(inputDate);
        return date.toLocaleDateString('en-GB');
    }
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
const enrollement=(e)=>{
    if(!user)navigate('/Login')
}
    return (

            <div className="frameBoxpp">
                { courses &&courses.map((item) => (
                    <div key={item.course_id} className="box">
                        <img className="cimg" src={item.course_image}  />
                        <div className="box-content">
                            <p>{item.course_description.substring(0,250)}</p>
                        </div>
                        <div className="enroll">
                            {/* <Link to="/Lessons"> */}
                            <button name={item.course_id} className="enroll" onClick={enrollement}>Enroll</button>
                            {/* </Link> */}
                                <button className="enroll" onClick={() => openModal(item)}>
                                    details
                                </button>
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
