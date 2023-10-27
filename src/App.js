import React from 'react';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Mininav from './components/Mininav.jsx';
import Framebox from './components/Framebox.jsx';
import Footer from './components/Footer.jsx';
import Homepage from './components/Homepage.jsx';
import Courses from './pages/Courses';
const App = () => {
  return (
    <div className="App">
<BrowserRouter>
    <Routes>
     <Route path="/" element={<Homepage/>} />
      <Route path='/Courses' element={<Courses/>}/>
    </Routes>
  </BrowserRouter>

    </div>
  );
};

export default App;
