import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import Swal from 'sweetalert2';
import { useAuthContext } from "../hooks/useAuthContext";
function Sidebar(){
    const { logout } =useLogout();
    const { user}=useAuthContext();
    const handleLogOut=()=>{
        Swal.fire({
            title: 'Are you sure?',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Log out'
          }).then((result) => {
            if (result.isConfirmed) {
                logout();
            }
          })
    }
    return (
            <div className="sidebar">
                <Link to ='/dashboard'><button>Courses</button></Link> 
               { (user&&user.role!=='admin')? <Link to ='/teacher/students'><button>Students</button></Link> 
               :<Link to ='/admin/students'><button>Students</button></Link>}
                
                {(user&&user.role==='admin')?<Link to ='/teachers'><button>Teachers</button></Link>:<></>} 
                <Link to ='/profile'><button>Settings</button></Link> 
                <button onClick={handleLogOut}>Log out</button>
            </div>
    );
}
export default Sidebar;