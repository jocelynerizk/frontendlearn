import React from 'react';
import { BrowserRouter,Routes,Route,Link, useNavigate } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Courses from './pages/Courses';
const App = () => {
  return (
    <div className="App">
<BrowserRouter>
    <Routes>
      <Route path='/Home' element={<Homepage/>}/>
      <Route path='/Courses' element={<Courses/>}/>
    </Routes>
  </BrowserRouter>

    </div>
  );
};

export default App;
