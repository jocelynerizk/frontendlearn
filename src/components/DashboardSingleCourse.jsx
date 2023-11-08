import Header from "./Header";
import Sidebar from "./Sidbar";
import { Link,useParams ,useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useAuthContext } from "../hooks/useAuthContext";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
function DashboardSingleCourse(props){
    const {user}=useAuthContext();
    const {courseId}=useParams();
    const navigate=useNavigate();
    const [Lessons,setLessons]=useState([]);
    const [doFetch,setDoFetch]=useState(false);
   const deleteCourse=async()=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async(result) => {
        if (result.isConfirmed) {
            try {
                const deleting = await axios.delete(`https://elearning-yfp2.onrender.com/courses/deleteCourseById/${courseId}`);
                if (deleting) {
                  Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Deleting one of your courses successfully',
                    showConfirmButton: false,
                    timer: 2500
                  }).then(() => {
                    navigate('/dashboard'); 
                  });
                }
              }catch(error){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                  })
              }
        }
      })
   }
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
 const [single,setSingle]=useState();
 useEffect(()=>{
  const fetchData=async()=>{
    const result= await axios.get(`https://elearning-yfp2.onrender.com/courses/singleCourseInfo/${courseId}`);
    if(result)setSingle(result.data.result[0]);
  };
  const getLessons=async()=>{
    try{
    const lessons=await axios.get(`https://elearning-yfp2.onrender.com/lessons/getLessonsByCourseId/${courseId}`);
    if(lessons)setLessons(lessons.data.result);
    }catch(error){
      console.log("failed to fetch data");
    }
  }
  fetchData();
  getLessons();
 },[doFetch]);
 
 const handleDeleteLesson = async (e) => {
  if (user.role === 'admin') {
    toast.warn('Only teachers can delete a lesson', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    const lessonId = e.target.name;
    if (!lessonId) {
      console.error("Lesson ID is missing.");
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`https://elearning-yfp2.onrender.com/lessons/deleteLessonById/${lessonId}`);
          if (response) {
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Deleting one of your lessons successfully',
              showConfirmButton: false,
              timer: 2500
            }).then(() => {
              setDoFetch(!doFetch);
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Failed to delete the lesson!'
            });
          }
        } catch (error) {
          console.error("Error deleting lesson:", error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      }
    });
  }
};
   return(
        <div className="main-d">
            <Header/>
            <Sidebar/>
            <div className="single-course-page-d">
              {single&&  <div className="course-page-header-d">
                    <h1>{single.course_name} Course</h1>
                   {user && user.role==='admin'&& <p>Instructor:{single.teacher_name}</p>}
                    <p>Start:{formatDate(single.course_start_date)}</p>
                    <p>End:{formatDate(single.course_end_date)}</p>
                    {user && user.role!=='admin'&& <p>Lessons:{single.number_of_lessons}</p>}
                 { user &&user.role === 'admin'&& <p>  <FontAwesomeIcon onClick={deleteCourse} className="trash-course" icon={faTrashCan} style={{  fontSize: "20px" }}/></p>}
                </div>}
                <hr className="course-page-header-hr-d"/>
                <div className="course-page-body1-d">
                    <h2>Description</h2>
                   {single&& <p>{single.course_description}</p>}
                </div><hr className="course-page-header-hr-d"/>
                <div className="course-page-body2-d">
                <ToastContainer />
                  <div className="toAdd"> <h2>Lessons:</h2> { single&&(compareDates(formatDate(single.course_end_date), currentDate.toLocaleDateString('en-GB')))
                  && user &&user.role==='instructor'&& <Link to ={`/newLesson/${courseId}`}><div><span>new lesson  </span><FontAwesomeIcon className="addIcon" icon={faCirclePlus} style={{color: "#ffffff",}} />
                   <FontAwesomeIcon className="Icon" icon={faCirclePlus} style={{color: "#053B50",}} /></div></Link>}</div>
                   {/* <hr className="course-page-header-hr-d"/> */}
                    {Lessons&&Lessons.map((lesson,index)=>(<div key={index} className="course-page-body2-row-d">
                        <h3>Lesson:{index+1}</h3>
                        <h4>Date:{formatDate(lesson.date)}</h4>
                        <Link to={ `/viewLesson/${lesson.id}`}>
  <button>view</button>
</Link>

                        <button name={lesson.id}onClick={handleDeleteLesson}>Delete</button>
                    </div>)) }
                    
                </div>
                <div></div>
            </div>
        </div>
    );
}
export default DashboardSingleCourse;