import React from 'react';
import { BrowserRouter,Routes,Route,Link, useNavigate } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Courses from './pages/Courses';
import ActiveB from './pages/ActiveB.jsx';
import Singlecourse from './pages/Singlecourse';
import Lessonsd from './pages/Lessonsd';
import Signin from './pages/Signin';
const App = () => {
  return (
    <div className="App">
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/Courses' element={<Courses/>}/>
      <Route path='/Lessons' element={<Lessonsd/>}/>
      <Route path='/Singin' element={<Signin  />}/>
      <Route path='/Profile' element={<ActiveB />}/>
      <Route path='/Singlecourse' element={<Singlecourse/>}/>
    </Routes>
  </BrowserRouter>

    </div>
  );
};

export default App;
