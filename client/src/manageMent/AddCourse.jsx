import React, { useState } from 'react';
import axios from 'axios';
import '../style/courseManagement.css'
import { Link ,useNavigate} from 'react-router-dom';
import Logo from "../Logo/Creative Color Brushstroke Lettering Logo.png"
import API from '../Services/API';

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    image: '',
    name: '',
    desc: '',
    amount: '',
    duration: '',
  });

  const navigate = useNavigate()
   //getting role
   const getUserRole = () => {
    return localStorage.getItem('role');
};

const isAdmin = () => {
    return getUserRole() === 'admin';
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the server with the course data
      const response = await API.post('/postCourse', courseData);
      // Handle the response as needed
      window.alert('Course added successfully!');
      window.location.href ="/editOrDelete"
    } catch (error) {
      // Handle errors
      console.error('Error adding course:', error.message);
    }
  };

  return (
    isAdmin() &&
    <>
    {localStorage.getItem('token') && 
    <div>
    <nav className="navbar">
                      <ul className="nav-list">
                        <li >
                          <Link className="nav-link active" aria-current="page" to="/adminHome">Admin Panel</Link>
                        </li>
                        <li >
                          <Link className="nav-link" to="/addCourse">Add Course</Link>
                        </li>
                        <li>
                        <Link className="nav-link" to="/editOrDelete">Edit or Delete course</Link>
                        </li>
                        <li >
                          <Link className="nav-link" to="/studentData">Student Data</Link>
                        </li>
                        <li>
                        <Link className="nav-link" onClick={() => { window.localStorage.clear();window.location.href ="/"}}>Log Out
                        </Link>
                        </li>
                      </ul>
                      <div class="logo"><img src={Logo}
         alt='ProLearn Nexus' style={{ width: '50px', height:'50px',borderRadius: '2rem', border: '2px solid black'}}/></div>       
          </nav> 
    <div >
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit}>
        {/* Image URL */}
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={courseData.image}
          onChange={handleChange}
          placeholder='Enter imange URL'
        />

        {/* Course Name */}
        <label htmlFor="name"><span style={{color:'red'}}>*</span>Course Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={courseData.name}
          onChange={handleChange}
          placeholder='Enter name of course'
          required
        />

        {/* Description */}
        <label htmlFor="desc"><span style={{color:'red'}}>*</span>Description:</label>
        <textarea
          id="desc"
          name="desc"
          rows="4"
          value={courseData.desc}
          onChange={handleChange}
          placeholder='Enter description'
          required
        ></textarea>

        {/* Amount */}
        <label htmlFor="amount"><span style={{color:'red'}}>*</span>Amount:</label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={courseData.amount}
          onChange={handleChange}
          placeholder='Enter amount'
          required
        />

        {/* Duration */}
        <label htmlFor="duration"><span style={{color:'red'}}>*</span>Duration:</label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={courseData.duration}
          onChange={handleChange}
          placeholder='Enter duration'
          required
        />

        {/* Submit Button */}
        <button type="submit">Add Course</button>
      </form>
    </div>
    <footer style={{backgroundColor:'#a2c9c9' , textAlign:'center'}}>
    <p><span style={{color:'red'}}>*</span>Fildes are mandetory</p>
    </footer>
    </div>}
    </>
  );
};

export default AddCourse;
