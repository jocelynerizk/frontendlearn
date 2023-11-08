import Header from "./Header";
import Sidebar from "./Sidbar";
import { Link ,useParams ,useNavigate} from "react-router-dom"
import { useState ,useEffect} from 'react';
import axios from "axios";
import Swal from "sweetalert2";

function DashboardNewLesson() {
    const [documentation, setDacumentation] = useState('');
    const navigate=useNavigate()
    const [videoLink, setVideoLink] = useState('');
    const [question, setQuestion] = useState('');
    const [choice1, setChoice1] = useState('');
    const [choice2, setChoice2] = useState('');
    const [choice3, setChoice3] = useState('');
    const [correct, setCorrect] = useState('');
    const [date, setDate] = useState(null);
    const [error, setError] = useState(null);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const {courseId}=useParams();
    const openPopup = (e) => {
        e.preventDefault();
        setPopupVisible(true);
    };
    const closePopup = () => {
        setPopupVisible(false);
    };
    const handleConfirm = async () => {
        if (documentation.trim().length === 0 || videoLink.trim().length === 0 || question.trim().length === 0 || choice1.trim().length === 0 || choice2.trim().length === 0 || choice3.trim().length === 0 || correct.trim().length === 0 || !date) {
            setError("All fields must be filled");
            setPopupVisible(false);
        } else {
            console.log("All is good ");
            const data = {
                text: documentation,
                video_link: videoLink,
                date: date,
                course_id: courseId
            }; setError(null);
            try {
                const response = await axios.post('http://localhost:5000/lessons/add', data, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response) {
                    console.log('response is ok', response.data.result.insertId);
                    const quizData = {
                        question: question,
                        answer1: choice1,
                        answer2: choice2,
                        answer3: choice3,
                        correct_answer: correct,
                        lesson_id: response.data.result.insertId
                    }
                    const addingQuiz = await axios.post('http://localhost:5000/quizzes/add', quizData, {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    if (addingQuiz) {
                        console.log(addingQuiz.data.message);
                        setPopupVisible(false);
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Deleting one of your courses successfully',
                            showConfirmButton: false,
                            timer: 2500
                          }).then(() => {
                            navigate('/'); 
                          });   Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Adding a lesson successfully',
                            showConfirmButton: false,
                            timer: 2500
                          }).then(() => {
                            navigate(`/SingleCourse/${courseId}`); 
                          });
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
    };
    const [single,setSingle]=useState();
    useEffect(()=>{
     const fetchData=async()=>{
       const result= await axios.get(`http://localhost:5000/courses/singleCourseInfo/${courseId}`);
       if(result)setSingle(result.data.result[0]);
     };
     
     fetchData();
    },[]);
    function formatDate(inputDate) {
        const date = new Date(inputDate);
       return date.toLocaleDateString('en-GB');
    }
    return (
        <div className="main-d">
            <Header />
            <Sidebar />
            <div className="new-lesson">
            {single&&  <div className="course-page-header-d">
                    <h1>{single.course_name} Course</h1>
                    <p>Start:{formatDate(single.course_start_date)}</p>
                    <p>End:{formatDate(single.course_end_date)}</p>
                    <p>Lessons:{single.number_of_lessons}</p>
                  
                </div>}
                <hr className="course-page-header-hr-d" />
                <div>
                    <form>
                        <h2>Documentation:</h2>
                        <textarea onChange={(e) => setDacumentation(e.target.value)}></textarea>
                        <h2>Video Link:</h2>
                        <input className="new-lesson-input" onChange={(e) => setVideoLink(e.target.value)} type="text" required />
                        <h2>Quiz:</h2>
                        <hr className="course-page-header-hr-d" />
                        <h2>Question:</h2>
                        <input className="new-lesson-input" onChange={(e) => setQuestion(e.target.value)} type="text" required />
                        <h2>Choice 1:</h2>
                        <input className="new-lesson-input" onChange={(e) => setChoice1(e.target.value)} type="text" required />
                        <h2>Choice 2:</h2>
                        <input className="new-lesson-input" onChange={(e) => setChoice2(e.target.value)} type="text" required />
                        <h2>Choice 3:</h2>
                        <input className="new-lesson-input" onChange={(e) => setChoice3(e.target.value)} type="text" required />
                        <h2>Correct answer:</h2>
                        <input className="new-lesson-input" onChange={(e) => setCorrect(e.target.value)} type="text" required />
                        <h2>Date:</h2>
                        <input className="new-lesson-input" type="date" onChange={(e) => setDate(e.target.value)} required />
                        <hr className="course-page-header-hr-d" />
                        {error && <div className="error">{error}</div>}
                        <Link to="/SingleCourse"> <button className="new-lesson-button">Cancel</button></Link>
                        <button onClick={openPopup} className="new-lesson-button">Add</button>
                    </form>
                    <div id="popup1" className={`${isPopupVisible ? "Overlay2" : 'Overlay1'}`}>
                        <div className="popup">
                            <h2>Adding confirmation</h2>
                            <a className="close" href="#" onClick={closePopup}>
                                &times;
                            </a>
                            <div className="content">
                                <p>Check your inputs carefully before adding this lesson</p>
                                <button onClick={handleConfirm}>Confirm</button>
                                <button onClick={closePopup}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DashboardNewLesson;