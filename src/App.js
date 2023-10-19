import React from 'react';
import NavBar from './components/NavBar.jsx';
import About from './components/About.jsx';
import Courses from './components/Courses.jsx';
import Teacher from './components/Teacher.jsx';
import Footer from './components/Footer.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import Contact from './components/Contact.jsx';
import MyLocationLink from './components/mylocation.jsx';
import TestimonialSlider from './components/TestimonialSlider.jsx';

const App = () => {
  return (
    <div className="App">

      <NavBar />
      <ImageSlider />
      <About />
      <Courses />
  

      <Teacher />
      <Contact />
 <MyLocationLink />
      <Footer />

   

    </div>
  );
};

export default App;
