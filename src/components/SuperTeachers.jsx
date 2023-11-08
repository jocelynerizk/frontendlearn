import Swal from "sweetalert2";
import Header from "./Header";
import Sidebar from "./Sidbar";
import axios from "axios";
import { useState,useEffect } from "react";

function DashboardStudents(){
    const [data, setData] = useState([]);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [teacherName, setTeacherName] = useState(null);
    const [teacherEmail, setTeacherEmail] = useState(null);
    const [teacherID, setTeacherID] = useState(null);
    const [newTeacherName, setNewTeacherName] = useState("");
    const [newTeacherEmail, setNewTeacherEmail] = useState("");
    const [newTeacherPhone, setNewTeacherPhone] = useState("");
    const [newTeacherRole, setNewTeacherRole] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isDeletePopupVisible, setIsDeletePopupVisible] = useState(false);
    const handleAddTeacherClick = () => {
      const newTeacher = {
        Name: newTeacherName,
        Email: newTeacherEmail,
        Password: "", 
        Photo: "", 
        Phone: newTeacherPhone,
        Role: newTeacherRole,
      };
  
      axios
        .post("http://localhost:8001/api/users/addTeacher", newTeacher)
        .then((res) => {
          console.log(res);
          setData([...data, res.data]);
          setIsPopupVisible(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const deleteTeacherByID = async (id) => {
      try {
        const response = await axios.delete(
          `http://localhost:5000/users/deleteUserById/${id}`
        );
        console.log(response.data);
        // Handle success (e.g., show a success message, update state, etc.)
      } catch (error) {
        console.error(error);
        // Handle error (e.g., show an error message)
      }
    };
  
    const handleDeleteClick = (teacher) => {
      if (teacher.teacher_id ) {
        setTeacherID(teacher.teacher_id);
        setTeacherName(teacher.name);
        setTeacherEmail(teacher.email);
        setIsDeletePopupVisible(true); // Show the delete confirmation popup
      }
    };
    const closeDeletePopup = () => {
      setIsDeletePopupVisible(false); // Hide the delete confirmation popup
    };
  
    useEffect(() => {
        const fetchData = async () => {
            try {
               const response=await axios.get("http://localhost:5000/users/teachersForSuper")
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
            <div className="body-teacher">
        <h1 className="Teacher-Title">Teachers</h1>
        <div className="grid-container-teacher">
          <div className="grid-item-teacher">Teacher Name</div>
          <div className="grid-item-teacher">Number of courses</div>
          <div className="grid-item-teacher">Actions</div>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data.map((teacher, index) => (
            <div className="grid-container-teacher" key={index}>
              <div className="grid-item-teacher">{teacher.teacher_name}</div>
              <div className="grid-item-teacher">{teacher.count_course}</div>
              <div className="grid-item-teacher">
                <div className="box">
                  <a
                    className="button"
                    href="#deletePopup"
                    onClick={() => handleDeleteClick(teacher)}
                  >
                    Delete Teacher
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
        <div
          id="deletePopup"
          className={`overlay ${isDeletePopupVisible ? "active" : ""}`}
        >
          <div className="popup">
            <h2 className="Delete-confirmation">Delete confirmation</h2>
            <a className="close" href="#" onClick={closePopup}>
              &times;
            </a>
           
              <div className="content1">
                <p className="Delete-question">
                  Are you sure you want to delete the teacher?
                </p>
                
                <div className="C1">
                  <button
                    className="cont1"
                    onClick={() => deleteTeacherByID(teacherID)}
                  >
                    Confirm
                  </button>
                  <a className="cont1-a" href="/teachers">
                    <button className="cont1" onClick={closeDeletePopup}>
                      Cancel
                    </button>
                  </a>
                </div>
              </div>
            
          </div>
        </div>

      </div>
      <div className="grid-item-teacher-add-teacher">
          <a className="item1" href="#popup2">
            Add teacher
          </a>
        </div>
        <div
          id="popup2"
          className={`overlay ${isPopupVisible ? "active" : ""}`}
        >
          <div className="popup2">
            <h2>Add Teacher</h2>
            <a className="close" href="/teachers" onClick={closePopup}>
              &times;
            </a>
            <div className="content2">
              <input
                className="input1"
                type="text"
                placeholder="Name"
                value={newTeacherName}
                onChange={(e) => setNewTeacherName(e.target.value)}
              />
              <input
                className="input2"
                type="text"
                placeholder="Email"
                value={newTeacherEmail}
                onChange={(e) => setNewTeacherEmail(e.target.value)}
              />
              <input
                className="input3"
                type="text"
                placeholder="Phone"
                value={newTeacherPhone}
                onChange={(e) => setNewTeacherPhone(e.target.value)}
              />
              <input
                className="input4"
                type="text"
                placeholder="Role"
                value={newTeacherRole}
                onChange={(e) => setNewTeacherRole(e.target.value)}
              />
              <button className="Add-Teacher" onClick={handleAddTeacherClick}>
                Add Teacher
              </button>
            </div>
          </div>
        </div>
        </div>
    );
}
export default DashboardStudents;
