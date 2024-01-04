import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../style/courses.css"
// import { Link } from 'react-router-dom';
import Navbar from '../HomePage/Navbar';
import { Button } from 'react-bootstrap';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const colors = [
    "#dbcba2",
    "#C38154",
    "#FFC26F",
    "#4F709C",
    "#eb7b73",
    '#87a19c',
    '#b99dc2',
    '#917a82'
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/allcourses');
        // console.log('API Response:', response.data);

        // Check if the response data is an object
        if (typeof response.data === 'object' && !Array.isArray(response.data)) {
          // Convert the object to an array
          const coursesArray = Object.keys(response.data).map(key => response.data[key]);
          setCourses(coursesArray);
        } else {
          // Use the response data directly if it's already an array
          setCourses(response.data);
        }

      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };
  return (
    
    <>
      <Navbar/>
      <div className="animated-text">
        <span>
        Explore passion, choose courses, seize opportunities for perfect professional growth!</span>
      </div>
      <div className="card-container">
        {loading ? (
          <p>Loading courses...</p>
        ) : Array.isArray(courses) && courses.length > 0 ? (
          courses.map((course, index) => (
            <div key={course._id} className="card" style={{ width: '15rem', backgroundColor: colors[index % colors.length] }}>
              <img className="card-img-top" src={course.image} alt={course.name} />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">{course.desc}</p>
                <p className="btn btn-primary">Amount: {course.amount}</p>
                <p className="btn btn-primary">Duration: {course.duration}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No courses available or an error occurred.</p>
        )}
      </div>
      <footer style={{backgroundColor:"#5083be",textAlign:'center'}}>
        <Button onClick={moveToTop} style={{margin:'3px'}} >Move to Top</Button>
      </footer>
    </>
  );
};

export default Courses;
