import Header from "./Header";
import Sidebar from "./Sidbar";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
function DashboardIndex() {
    const [courses, setCourses] = useState([]);
    const { user } = useAuthContext();
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user.role === 'admin') {
                    const response = await axios.get('http://localhost:5000/courses/AllCoursesForIndex');
                    if (response) setCourses(response.data.result);
                    else console.log("failed to fetch data");
                } else {
                    const response = await axios.get(`http://localhost:5000/courses/AllCoursesForOneTeacher/${user.id}`);
                    if (response) setCourses(response.data.result);
                    else console.log("failed to fetch data");
                }
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
    const currentDate = new Date();
    function compareDates(date1, date2) {
        const parts1 = date1.split('/');
        const parts2 = date2.split('/');
      
        const day1 = parseInt(parts1[0], 10);
        const month1 = parseInt(parts1[1], 10) - 1;
        const year1 = parseInt(parts1[2], 10);
      
        const day2 = parseInt(parts2[0], 10);
        const month2 = parseInt(parts2[1], 10) - 1;
        const year2 = parseInt(parts2[2], 10);
      
        const dateObject1 = new Date(year1, month1, day1);
        const dateObject2 = new Date(year2, month2, day2);
      
        if (dateObject1.getTime() === dateObject2.getTime() || dateObject1 >= dateObject2) {
          return true;
        } else {
          return false;
        }
      }  
    return (
        <div className="main-d">
            <Header />
            <Sidebar />
            <div className="courses-d-container">
            <div className="course-page-header-d">
            <h1>All Courses</h1>
         {user.role==='admin'&&   <Link to ='/addCourse' className="new-c"><div><span>new course  </span><FontAwesomeIcon className="addIcon" icon={faCirclePlus} style={{color: "#ffffff",}} />
                   <FontAwesomeIcon className="Icon" icon={faCirclePlus} style={{color: "#053B50",}} /></div></Link>}
                </div>
                <hr className="course-page-header-hr-d"/>
            <div className="courses-d">
                {courses && courses.map((course, index) => (
                    <Link to={`/SingleCourse/${course.course_id}`}><div className="single-course-d" key={index}>
                        <div className="single-course-head-d">
                            <p>{course.course_name}</p>
                            <img src={course.course_image} alt="logo" />
                        </div>
                        <div className="single-course-body-d">
                            <p>Lessons:{course.number_of_lessons}</p>
                            <p>Start:{formatDate(course.course_start_date)}</p>
                            <p>End:{formatDate(course.course_end_date)}</p>
                        </div>
                        <div className="single-course-footer-d">
                            {(compareDates(formatDate(course.course_end_date), currentDate.toLocaleDateString('en-GB'))) ?
                               ( <>
                                    <FontAwesomeIcon className="single-course-footer-d-img" icon={faSpinner} style={{ color: "#ffffff", fontSize: "35px" }} />
                                    <span>in progress....</span>
                                    
                                    </>
                               ) : (<><FontAwesomeIcon className="done" icon={faCircleCheck} style={{ color: "#e6ebf4", }} />
                                    <span>completed</span></>)}
                        </div>
                    </div></Link>
                ))}

</div></div>
        </div>
    );
}
export default DashboardIndex;