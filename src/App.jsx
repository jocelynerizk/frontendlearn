import React from 'react';
import './App.css';
import DashboardIndex from './components/DashboardIndex';
import DashboardSingleCourse from './components/DashboardSingleCourse';
import DashboardStudents from './components/DashboardStudents';
import DashboardNewLesson from './components/DashboardNewLesson';
import DashboardEditLesson from './components/DashboardEditLesson';
import SuperViewLesson from './components/SuperViewLesson';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import SignInUpForm from './components/Login';
import { useAuthContext } from './hooks/useAuthContext';
import SuperAddCourse from './components/SuperAddCourse';
 import SuperStudent from './components/SuperStudent';
import Profile from './components/Profile';
import SuperTeachers from './components/SuperTeachers'
import Homepage from './pages/Homepage';
import Courses from './pages/Courses';
import ActiveB from './pages/ActiveB.jsx';
import Singlecourse from './pages/Singlecourse';
import Lessonsd from './pages/Lessonsd';
import Signin from './components/Signin.jsx';
//abcABC1234$
//adminADMIN1234#
function App() {
  const { user } =useAuthContext();
  return (
    <div className="App">
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/Courses' element={<Courses/>}/>
      <Route path='/Lessons' element={<Lessonsd/>}/>
      <Route path='/Singin' element={<Signin  />}/>
      <Route path='/Board' element={<ActiveB />}/>
      <Route path='/Singlecourse' element={<Singlecourse/>}/>
      <Route path="/dashboard" element={user?<DashboardIndex/>:<Navigate to="/Login"/>} />
      <Route path='/Login' element={!user?<SignInUpForm/>:<Navigate to="/"/>}/>
      <Route path="/teachers" element={<SuperTeachers/>} /> 
      <Route path="/SingleCourse/:courseId" Component={ DashboardSingleCourse } />
      <Route path="/teacher/students" element={<DashboardStudents/>} />
      <Route path="/admin/students" element={<SuperStudent/>} />
      <Route path="/newLesson/:courseId" Component={DashboardNewLesson} />
      <Route path="/viewLesson/:id" Component={SuperViewLesson} />
      <Route path='/addCourse' element={<SuperAddCourse/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  </BrowserRouter>

    </div>
  );
};

export default App;
