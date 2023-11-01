import React from 'react';
import { BrowserRouter,Routes,Route,Link, useNavigate } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Courses from './pages/Courses';
import Board from './pages/Board';
import Singlecourse from './pages/Singlecourse';
const App = () => {
  return (
    <div className="App">
<BrowserRouter>
    <Routes>
      <Route path='/Home' element={<Homepage/>}/>
      <Route path='/Courses' element={<Courses/>}/>
      <Route path='/Lessons' element={<Board/>}/>
      <Route path='/Singlecourse' element={<Singlecourse/>}/>
    </Routes>
  </BrowserRouter>

    </div>
  );
};

export default App;
