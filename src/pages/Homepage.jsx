import React from 'react';
import NavBar from '../components/NavBar.jsx';
import About from '../components/About.jsx';
import Herosection from '../components/Herosection.jsx';
import Courses1 from '../components/Courses1.jsx';
import Teacher from '../components/Teacher.jsx';
import Footer from '../components/Footer.jsx';
import Contact from '../components/Contact.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import Lessons  from '../components/Lessons.jsx';


const App = () => {
  return (
    <div className="App">

      <NavBar />
      <Herosection />
      <div className="grandtitre">
          <h1 className="title">About Us</h1>
           <hr className="line" />
       </div>
      <About />
      <div className="grandtitre">
          <h1 className="title">Courses</h1>
           <hr className="line" />
       </div>
      <Courses1 />
      <div className="grandtitre">
          <h1 className="title">Instructors</h1>
           <hr className="line" />
       </div>
      <Teacher />
      <div className="grandtitre">
          <h1 className="title">Contact Us</h1>
           <hr className="line" />
       </div>
      <Contact />
      <div className="grandtitre">
          <h1 className="title">Testimonials</h1>
           <hr className="line" />
       </div>
       <TestimonialCard />
      <Footer />

   

    </div>
  );
};

export default App;
