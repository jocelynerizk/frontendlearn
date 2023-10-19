import React from 'react';
import NavBar from './components/NavBar.jsx';
import About from './components/About.jsx';
import Courses from './components/Courses.jsx';
import Teacher from './components/Teacher.jsx';
import Footer from './components/Footer.jsx';
import ImageSlider from './components/ImageSlider.jsx';



const App = () => {
  return (
    <div className="App">

      <NavBar />
      <ImageSlider />
      <About />
      <Courses />
      <Teacher />


      <Footer />

   

    </div>
  );
};

export default App;
