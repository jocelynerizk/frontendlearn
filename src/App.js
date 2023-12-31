import React from 'react';
import NavBar from './components/NavBar.jsx';
import About from './components/About.jsx';
import Herosection from './components/Herosection.jsx';
import Courses from './components/Courses.jsx';
import Teacher from './components/Teacher.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import TestimonialSlider from './components/TestimonialSlider.jsx';

const App = () => {
  return (
    <div className="App">

      <NavBar />
      <Herosection />
      <About />
      <Courses />
      <Teacher />
      <Contact />

      <Footer />

   

    </div>
  );
};

export default App;
