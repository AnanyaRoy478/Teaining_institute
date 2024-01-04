import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../HomePage/Navbar';
import { Button } from 'react-bootstrap';

const AboutUs = () => {
  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };
  return (
    <><Navbar/>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h2 className="mb-4">About Our Training Institution</h2>
          <p>
            Welcome to <b>ProLearn Nexus</b>, where we are committed to providing top-notch education
            and training to help individuals succeed in their careers. Our institution
            focuses on delivering high-quality courses in IT Proffesional Skills to equip
            our students with the skills and knowledge needed to thrive in today's
            competitive world.
          </p>
          <p>
            At <b>ProLearn Nexus</b>, we believe in a hands-on and practical approach
            to learning. Our experienced instructors are dedicated to fostering a
            positive and engaging learning environment, ensuring that every student
            receives personalized attention and support.
          </p>
          <p>
            Whether you are a beginner looking to start your journey in IT Proffesional Skills
            or a professional seeking to enhance your skills, our diverse range of
            courses caters to all levels of expertise. We are passionate about empowering
            individuals to reach their full potential and achieve success in their careers.
          </p>
        </div>
        <div className="col-md-4">
          {/* You can add an image or additional information about the institution */}
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <h2 className="mb-4">Our Mission</h2>
          <p>
            Our mission at <b>ProLearn Nexus</b> is to provide accessible and
            high-quality education, empowering individuals to excel in IT Proffesional Skills.
            We strive to create a learning environment that fosters innovation, critical
            thinking, and continuous growth. Through our courses and programs, we aim
            to make a positive impact on the lives and careers of our students.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <h2 className="mb-4">Why Choose Us?</h2>
          <ul>
            <li>Experienced and knowledgeable instructors</li>
            <li>Hands-on and practical learning approach</li>
            <li>Comprehensive and industry-relevant curriculum</li>
            <li>State-of-the-art facilities and resources</li>
            <li>Supportive and inclusive learning community</li>
          </ul>
        </div>
      </div>
      <footer style={{backgroundColor:"#5083be",textAlign:'center'}}>
        <Button onClick={moveToTop}>Move to Top</Button>
      </footer>
    </div>
    </>
  );
};

export default AboutUs;

