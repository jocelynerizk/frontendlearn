import Header from "./Header";
import SuperSidebar from "./SuperSidebar";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import Swal from "sweetalert2";
// import 'sweetalert2/src/sweetalert2.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';
function SuperAddCourse() {
  const [teachers, setTeachers] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [documentation, setDocumentation] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [teacher, setTeacher] = useState('');
  const [error, setError] = useState(null);
  const [img, setImg] = useState(null);
  const navigate = useNavigate();
  const handleAddCourse = async () => {
    setError(null);
    // console.log(teacher, courseName, documentation, startDate, endDate);
    const currentDate = new Date();
    const userStartDate = new Date(startDate);
    const userEndDate = new Date(endDate);
    if (currentDate > userStartDate) {
      setError("Course start date is in the past. Please choose a valid start date.");
    } else if (currentDate > userEndDate) {
      setError("Course end date is in the past. Please choose a valid end date.");
    } else if (userEndDate < userStartDate) {
      setError("Course end date is before course start date. Please choose a valid end date.");
    } else {
      if (teacher.trim().length === 0 || courseName.trim().length === 0 || documentation.trim().length === 0 || startDate.trim().length === 0 || endDate.trim().length === 0 || !selectedFile)
        setError("All feilds must be filled");
      else {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, add it!'
        }).then(async (result) => {
          if (result.isConfirmed) {
            const formData = new FormData();
            formData.append('image', img);
            try {
              const response = await axios.post('https://api.imgbb.com/1/upload?key=91d27c7f35f4cd3885f4ada2ac3d2c1c', formData);
              const imageUrl = response.data.data.url;
              setImg(imageUrl);
              console.log('Image uploaded successfully:', imageUrl);
              if (response) {
                try {
                  const data = {
                    name: courseName,
                    description: documentation,
                    img: imageUrl,
                    start_date: startDate,
                    end_date: endDate,
                  }; console.log(data.img);
                  const addCourse = await axios.post("https://elearning-yfp2.onrender.com/courses/add", data, {
                    headers: {
                      'Content-Type': 'application/json',
                    }
                  }); if (addCourse) {
                    try {
                      const teacherData = {
                        teacher_id: teacher,
                        course_id: addCourse.data.result.insertId
                      }
                      const addToTeachers = await axios.post("https://elearning-yfp2.onrender.com/teachers/add", teacherData, {
                        headers: {
                          'Content-Type': 'application/json',
                        }
                      }); if (addToTeachers) {
                        Swal.fire({
                          position: 'top-center',
                          icon: 'success',
                          title: 'Adding a course successfully',
                          showConfirmButton: false,
                          timer: 2500
                        }).then(() => {
                          navigate('/dashboard');
                        });
                      };
                    } catch (error) {
                      Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                  })
                    }
                  }
                  else console.log("Failed to add this course");
                } catch (error) {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                  })
                }
              }
            } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
              })
            }
          } 
        })
      }
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://elearning-yfp2.onrender.com/users/getUserByRole/instructor');
        const data = response.data;
        setTeachers(data.result[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImg(e.target.files[0]);
    setSelectedFile(URL.createObjectURL(file));
  }
  return (
    <div className="main-d">
      <Header />
      <SuperSidebar />
      <div className="root">
        <div className="course-section">
          <div className="course-information">
            <div className="flex">
              <div className="course-name">
                <h1 className="C-Name">Course name{" "}</h1>
                <input
                  className="course-input"
                  type="text"
                  onChange={(e) => setCourseName(e.target.value)}
                />
                <div className="startEnd">
                  <div className="start-date">
                    <h1>Start{" "}</h1>
                    <input
                      className="start"
                      type="date"
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div className="end-date">
                    <h1>End{" "}</h1>
                    <input
                      className="end"
                      type="date"
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="column">
                <h1 className="teacher-name">Teacher Name</h1>
                <div className="dropdown">
                  <select value={teacher} onChange={(e) => setTeacher(e.target.value)}>
                    <option value="">Select a teacher</option>
                    {teachers &&
                      teachers.map((teacher, index) => {
                        return (
                          <option key={index} value={teacher.id}>
                            {teacher.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <img src={selectedFile || ""} alt="icon" className="rounded-square" />
                <input onChange={handleFileChange} type="file" accept="image" />
              </div>
            </div>
          </div>
          <h1 className="desc">Description</h1>
          <div className="description">
            <textarea
              className="textareak"
              onChange={(e) => setDocumentation(e.target.value)} ></textarea>
          </div>
          <div className="image-file-drop">
            {error && <div className="error">{error}</div>}
            <button onClick={handleAddCourse} className="add" >
              Add course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SuperAddCourse;