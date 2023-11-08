import Header from "./Header";
import Sidebar from "./Sidbar";

function DashboardStudents(){
    return(
        <div className="main-d">
            <Header/>
            <Sidebar/>
            <div class="profile">
                <div class="course-page-header-d">
                    <h1>Students</h1> 
                </div>
                <hr class="course-page-header-hr-d"/>
                <table>
                    <tr><th>Student Name</th><th>Course Name</th><th>Lessons attended</th><th>Passed Course</th></tr>
                    <tr><th>Jocelyne Rizk</th><th>React</th><th>10/20</th><th><button>Done</button></th></tr>
                    <tr><th>Hadi Mortada</th><th>React</th><th>10/20</th><th><button>Done</button></th></tr>
                    <tr><th>Daniel Awde</th><th>React</th><th>20/20</th><th><img class="table-img" src="circle-check-regular.svg"/></th></tr>
                    <tr><th>Zizetter Chamaa</th><th>React</th><th>10/20</th><th><button>Done</button></th></tr>
                    <tr><th>Karim Sardouk</th><th>React</th><th>10/20</th><th><button>Done</button></th></tr>
                </table>
            </div>
        </div>
    );
}
export default DashboardStudents;