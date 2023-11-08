import Header from "./Header";
import Sidebar from "./Sidbar";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import Swal from "sweetalert2";

function DashboardEditLesson() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [single, setSingle] = useState();
    const [showInputs, setShowInputs] = useState(false);
    const [courseId, setCourseId] = useState();
    const [quizId, setQuizId] = useState();
    const { user } = useAuthContext();
    const documentationRef = useRef(null);
    const VideoLinkRef = useRef(null);
    const questionRef = useRef(null);
    const answer1Ref = useRef(null);
    const answer2Ref = useRef(null);
    const answer3Ref = useRef(null);
    const correctRef = useRef(null);
    const [doFetch, setDoFetch] = useState(false);
    function formatDate(inputDate) {
        const date = new Date(inputDate);
        return date.toLocaleDateString('en-GB');
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`http://localhost:5000/lessons/getLessonInfoById/${id}`);
                if (result) setSingle(result.data.result[0]);
                setCourseId(result.data.result[0].course_id);
                setQuizId(result.data.result[0].id)
            } catch (error) {
                console.log("Failed to fetch data");
            }
        };
        fetchData();
    }, [doFetch]);
    const edit = () => {
        if (user.role === 'admin') {
            toast.warn('Only teachers can edit  lessons', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (!compareDates(formatDate(single.course_end_date), currentDate.toLocaleDateString('en-GB'))) {
            toast.warn('This course is completed !!', {
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
            if (!showInputs)
                setShowInputs(true);
            else setShowInputs(false);
        }
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
    const handleSave = async (e) => {
        e.preventDefault();
        const newLesson = {
            text: documentationRef.current.value,
            video_link: VideoLinkRef.current.value,
            course_id: courseId
        }
        const newQuiz = {
            question: questionRef.current.value,
            answer1: answer1Ref.current.value,
            answer2: answer2Ref.current.value,
            answer3: answer3Ref.current.value,
            correct_answer: correctRef.current.value,
            lesson_id: id
        }
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
            customClass: {
                confirmButton: 'swal-button--confirm',
                denyButton: 'swal-button--deny',
            }
        }).then(async (result) => {
            if (result.isConfirmed) {

                try {
                    const updateLesson = await axios.put(`http://localhost:5000/lessons/updateLessonById/${id}`, newLesson, {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    if (updateLesson) {
                        const updateQuiz = await axios.put(`http://localhost:5000/quizzes/updateQuizById/${quizId}`, newQuiz, {
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        });
                        if (updateQuiz) {
                            Swal.fire({
                                // position: 'top-center',
                                icon: 'success',
                                title: 'Updating this lesson successfully',
                                showConfirmButton: false,
                                timer: 2500
                            }).then(() => {
                                setShowInputs(false)
                            })
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            } else if (result.isDenied) {
                Swal.fire({
                    showCloseButton: false,
                    title: "Changes are not saved",
                    icon: "info",
                });
            }
        });

    }
    return (
        <div className="main-d">
            <Header />
            <Sidebar />
            <div className="new-lesson">
                <ToastContainer />
                {single && <div className="course-page-header-d">
                    <h1>{single.course_name} Course</h1>
                    <p>Lesson:{single.lesson_id}</p>
                    <p>Start:{formatDate(single.course_start_date)}</p>
                    <p>End:{formatDate(single.course_end_date)}</p>
                    <p><FontAwesomeIcon onClick={edit} className="trash-course" icon={faPenToSquare} style={{ color: "#2d3d58" }} /></p>
                </div>}
                <hr className="course-page-header-hr-d" />
                <div className="edi">
                    {single && <form>
                        <h2>Documentation:</h2>
                        {!showInputs ? <p>{single.text}</p>
                            : <textarea defaultValue={single.text} ref={documentationRef}></textarea>}
                        <h2>Video Link:</h2>
                        {!showInputs ? <p>{single.video_link}</p>
                            : <input defaultValue={single.video_link} ref={VideoLinkRef} className="new-lesson-input" type="text" />}
                        <h2>Quiz:</h2>
                        <hr className="course-page-header-hr-d" />
                        <h2>Question:</h2>
                        {!showInputs ? <p>{single.question}</p>
                            : <input defaultValue={single.question} ref={questionRef} className="new-lesson-input" type="text" />}
                        <h2>Choice 1:</h2>
                        {!showInputs ? <p>{single.answer1}</p>
                            : <input defaultValue={single.answer1} ref={answer1Ref} className="new-lesson-input" type="text" />}
                        <h2>Choice 2:</h2>
                        {!showInputs ? <p>{single.answer2}</p>
                            : <input defaultValue={single.answer2} ref={answer2Ref} className="new-lesson-input" type="text" />}
                        <h2>Choice 3:</h2>
                        {!showInputs ? <p>{single.answer1}</p>
                            : <input defaultValue={single.answer3} ref={answer3Ref} className="new-lesson-input" type="text" />}
                        <h2>Correct answer:</h2>
                        {!showInputs ? <p>{single.correct_answer}</p>
                            : <input defaultValue={single.correct_answer} ref={correctRef} className="new-lesson-input" type="text" />}
                        <h2>Date:</h2>
                        <p>{formatDate(single.date)}</p>

                        {showInputs && <> <hr className="course-page-header-hr-d" />
                            <button onClick={() => setShowInputs(true)} className="new-lesson-button">Cancel</button>
                            <button onClick={handleSave} className="new-lesson-button">Save</button></>}
                    </form>}
                </div>
            </div>
        </div>
    );
}
export default DashboardEditLesson;