import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import { FaBars ,FaTimes,FaRegIdCard } from "react-icons/fa";
import panaya from "../images/panaya.jpeg";
import fss from "../images/fss.jpeg";
import iso9001 from "../images/iso9001.jpeg";
import cisco from "../images/cisco.jpeg";
import python from "../images/python.jpeg";
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import axios from 'axios';
const Courses1 = () => {
    
        const [courses, setCourses] = useState([]);
        const { user } = useAuthContext();
        useEffect(() => {
            const fetchData = async () => {
                try {
                    
                        const response = await axios.get('https://elearning-yfp2.onrender.com/courses/AllCoursesForIndex');
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
    return (

            <div className="topcard" id = "coursess">
                {/* {Courses1.map((item) => (
                    <div key={item.id} className="card">
                    <img className="myimg"  src={item.imageSrc} alt={`Image ${item.id}`} />    
                     <p>{item.text}</p>
                     <Link to="/Courses">
                     <button >{item.buttonText1}</button>
                    </Link>
                    </div>

                ))}
          */}
   
        </div>
    );
};

export default Courses1;
