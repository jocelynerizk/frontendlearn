import Header from "./Header";
import Sidebar from "./Sidbar";
import { useParams } from "react-router-dom";
function DashboardEditLesson(){
    const {id}=useParams();
    console.log(id);
    return(
        <div className="main-d">
            <Header/>
            <Sidebar/>
            <div className="new-lesson">
                <div className="course-page-header-d">
                    <h1>React Course</h1>
                    <p>Teacher:<span>Omar Banat</span></p>
                    <p>Start:13/10/2023</p>
                    <p>End:13/11/2023</p>
                    <div className="image-container">
                        <a href="single-course.html"><img className="x-image" src="png-clipart-computer-icons-x-mark-old-letters-angle-logo.png" /></a>
                      </div>
                      
                </div>
                <hr className="course-page-header-hr-d"/>
                <div>
                    <form>
                        <h2>Documentation:</h2>
                        <textarea></textarea>
                        <h2>Video Link:</h2>
                        <input className="new-lesson-input" type="text"/>
                        <h2>Quiz:</h2>
                        <hr className="course-page-header-hr-d"/>
                        <h2>Question:</h2>
                        <input className="new-lesson-input" type="text"/>
                        <h2>Choice 1:</h2>
                        <input className="new-lesson-input" type="text"/>
                        <h2>Choice 2:</h2>
                        <input className="new-lesson-input" type="text"/>
                        <h2>Choice 3:</h2>
                        <input className="new-lesson-input" type="text"/>
                        <h2>Correct answer:</h2>
                        <input className="new-lesson-input" type="text"/>
                        <h2>Date:</h2>
                        <input className="new-lesson-input" type="date"/>
                        <hr className="course-page-header-hr-d"/>
                        <button className="new-lesson-button">Clear</button>
                        <button className="new-lesson-button">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default DashboardEditLesson;