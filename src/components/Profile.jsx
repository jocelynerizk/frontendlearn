import React from "react";
import Sidebar from "./Sidbar";
import Header from "./Header";
import lasUser from '../images/lastUser.png'
import { useState, useRef, useEffect } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import validator from "validator";
import { ToastContainer, toast } from 'react-toastify';
const Profile = () => {
    const { user } = useAuthContext();
    const phoneRef = useRef(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const npassRef = useRef(null);
    const passRef=useRef(null);
    const [data, setData] = useState();
    const [fetchData, setDoFetch] = useState();
    const [isEditProfilePopupVisible, setIsEditProfilePopupVisible] = useState(false);
    const [isEditPasswordPopupVisible, setIsEditPasswordPopupVisible] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [showInput, setShowInput] = useState(false);
    const { dispatch } = useAuthContext();

    useEffect(() => {
        const getUser = async () => {
            try {
                const result = await axios.get(`https://elearning-yfp2.onrender.com/users/getUserById/${user.id}`);
                if (result.data) {

                    setData(result.data.result[0][0]);
                }
            } catch (error) {
                console.error(error);
            }
        };
        if (user)
            getUser();
        else setDoFetch(!fetchData)
    }, [fetchData]);
    const setFile = (e) => {
        setSelectedFile(e.target.files[0]);
    }
    const handleSave = async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You need  to log in again after that!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Log out'
          }).then(async(result) => {
            if (result.isConfirmed) {
                if (selectedFile) {
                    const formData = new FormData();
                    formData.append('image', selectedFile);
                    try {
                        const response = await axios.post('https://api.imgbb.com/1/upload?key=91d27c7f35f4cd3885f4ada2ac3d2c1c', formData);
                        const imageUrl = response.data.data.url;
                        console.log('Image uploaded successfully:', imageUrl);
                        if (response) {
                            const newData = {
                                name: nameRef.current.value,
                                email: emailRef.current.value,
                                phone: phoneRef.current.value,
                                photo: imageUrl
                            }; console.log(newData);
                            const updateProfile = await axios.put(`https://elearning-yfp2.onrender.com/users/updateProfile/${user.id}`, newData, {
                                headers: {
                                    'Content-Type': 'application/json',
                                }
                            });
                            if (updateProfile) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Your profile updated successfully',
                                    showConfirmButton: false,
                                    timer: 2500
                                }).then(() => {
                                    localStorage.removeItem('user');
                                    dispatch({ type: 'LOGOUT' });
                                });
        
                            }
                        }
                    } catch (error) { console.log(error) }
                } else {
                    try {
                        const newData = {
                            name: nameRef.current.value,
                            email: emailRef.current.value,
                            phone: phoneRef.current.value,
                            photo: ""
                        }; console.log(newData);
                        const updateProfile = await axios.put(`https://elearning-yfp2.onrender.com/users/updateProfile/${user.id}`, newData, {
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        });
                        if (updateProfile) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Your profile updated successfully',
                                showConfirmButton: false,
                                timer: 2500
                            }).then(() => {
                                localStorage.removeItem('user');
                                dispatch({ type: 'LOGOUT' });
                            });
        
                        }
                    }
                    catch (error) { console.log(error) }
                    
            }
            }
          })
}
const checkPassword=async()=>{
    
    try{const d={password:passRef.current.value};
    const check=await axios.post(`https://elearning-yfp2.onrender.com/users/checkPassword/${user.id}`,d, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if(check.data.match){
        Swal.fire({
            icon: 'success',
            title: 'Your are able to change your password',
            showConfirmButton: false,
            timer: 2500
        }).then(() => {
                setShowInput(true);
        });
    }
}catch(error){
        console.log(error)
    }
}
const editPassword=async()=>{
    if(validator.isStrongPassword(npassRef.current.value)){
        Swal.fire({
            title: 'Are you sure?',
            text: "You need  to log in again after that!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Log out'
          }).then(async(result) => {
            if (result.isConfirmed) {
        try{
            const data={
                password:npassRef.current.value
            }
            const updatePassword=await axios.put(`https://elearning-yfp2.onrender.com/users/updatePassword/${user.id}`,data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if(updatePassword){
                Swal.fire({
                    icon: 'success',
                    title: 'Your password updated successfully',
                    showConfirmButton: false,
                    timer: 2500
                }).then(() => {
                    localStorage.removeItem('user');
                    dispatch({ type: 'LOGOUT' });
                });
            }
        }catch(error){
            console.log(error);
        }
            }});

    }else{
        toast.warn('Your password must be strong', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    }
}
return (
    <div>
        <Header />
        <Sidebar />
        <div className="profile-section">
            <div className="profile-image">
            <ToastContainer />
                {data && <img
                    src={data.photo || lasUser}
                    alt=""
                    className="image"
                />}
            </div>
            {data && <div className="profile-information">
                <h1 className="person-name">{data.name}</h1>
                <p className="role">{data.role}</p>
                <div className="credentials">
                    <div className="profile-fields">
                        <p className="Email-address">Email address</p>
                        <p className="Phone-number">Phone number</p>
                    </div>
                    <div className="profile-details">
                        <p className="Mail">{data.email}</p>
                        <p className="Number">{data.phone || "empty"}</p>
                    </div>
                </div>
            </div>}
        </div>
        <div className="buttons-edit">
            <div className="button1">
                <button className="b1" onClick={() => setIsEditProfilePopupVisible(true)}>Edit Profile</button>
            </div>
            <div className="button2">
                <button className="b2"onClick={() => setIsEditPasswordPopupVisible(true)}>Edit Password</button>
            </div>
            <div id="popup1" className={`${isEditProfilePopupVisible ? "Overlay2" : 'Overlay1'}`}>
                <div className="popup-V">
                    <h2>Adding confirmation</h2>
                    <a className="close" href="#" onClick={() => setIsEditProfilePopupVisible(false)}>
                        &times;
                    </a>
                    {data && <div className="content">
                        <div>Name:<input type="text" defaultValue={data.name} ref={nameRef} /></div>
                        <div>Email:<input type="text" defaultValue={data.email} ref={emailRef} /></div>
                        <div>Phone:<input type="text" defaultValue={data.phone || ""} ref={phoneRef} /></div>
                        <div>../images/user.png:<input type="file" onChange={setFile} /> </div>
                    </div>}
                    <div> <button onClick={handleSave}>Save</button>
                        <button onClick={() => setIsEditProfilePopupVisible(false)}>Cancel</button></div>
                </div>
            </div>
            <div id="popup1" className={`${isEditPasswordPopupVisible ? "Overlay2" : 'Overlay1'}`}>
                <div className="popup-V">
                    <h2>Adding confirmation</h2>
                    <a className="close" href="#" onClick={() => setIsEditPasswordPopupVisible(false)}>
                        &times;
                    </a>
                    {data && <div className="content">
                        <div>Old Password:<input type="password"  ref={passRef} /></div>
                        {showInput&&<div>New Password:<input type="password"  ref={npassRef} /></div>}
                    </div>}
                    <div> {!showInput?<button onClick={checkPassword}>confirm</button>:<button onClick={editPassword}>save</button>}
                        <button onClick={() => setIsEditPasswordPopupVisible(false)}>Cancel</button></div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Profile;