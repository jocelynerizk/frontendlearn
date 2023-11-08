import Swal from "sweetalert2";
import Header from "./Header";
import Sidebar from "./Sidbar";
import axios from "axios";
import { useState,useEffect } from "react";

function DashboardStudents(){
    const [data, setData] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [studentName, setStudentName] = useState(null);
  const [studentEmail, setStudentEmail] = useState(null);
  const [studentID, setStudentID] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Added isLoading state

  const deleteStudentByID = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/users/deleteUserById/${id}`
      );
      if(response){
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'A student deleted successfully',
            showConfirmButton: false,
            timer: 2500
          }).then(() => {
                setIsPopupVisible(false);
          });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = (student) => {
    setStudentID(student.student_id);
    setStudentName(student.student_name);
    setStudentEmail(student.student_email);
    setIsPopupVisible(true);
    // console.log(student ,student.student_id,student.student_name,student.student_email);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
         const response=await axios.get("http://localhost:5000/users/studentsForSuper")
        if (response) {
          setData(response.data.result);
          console.log(response.data.result);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

    return(
        <div className="main-d">
            <Header/>
            <Sidebar/>
            <div className="body-student">
      <h1 className="Student-title">Students</h1>
        <div className="grid-container-student">
          <div className="grid-item-student">Student Name</div>
          <div className="grid-item-student">Number of courses</div>
          <div className="grid-item-student">Actions</div>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data.map((student, index) => (
            <div className="grid-container-student" key={index}>
              <div className="grid-item-student">{student.student_name}</div>
              <div className="grid-item-student">{student.course_count}</div>
              <div className="grid-item-student">
                <div className="box">
                  <a
                    className="button"
                    href="#popup1"
                    onClick={() => handleDeleteClick(student)}
                  >
                    Delete Student
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
        <div
          id="popup1"
          className={`overlay ${isPopupVisible ? "active" : ""}`}
        >
          <div className="popup">
            <h2 className="title">Delete confirmation</h2>
            <a className="close" href="" onClick={closePopup}>
              &times;
            </a>
            {data  && (
              <div className="content1">
                <p className="confirmation-deletion">
Are you sure you want to remove the student?
                </p>
               <p>Are you sure do you want to delete this student</p>
                <div className="Con1">
                <button className="c1" onClick={() => deleteStudentByID(studentID)}>
                  Confirm
                </button>
                
                <button className="c1" onClick={closePopup}>Cancel</button>
                
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
        </div>
    );
}
export default DashboardStudents;
