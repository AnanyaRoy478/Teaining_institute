import React, { useState, useEffect } from 'react';
import '../style/table.css'; 
import { Link } from 'react-router-dom';
import '../style/navbar.css'
import Logo from "../Logo/Creative Color Brushstroke Lettering Logo.png"
import { Button } from 'react-bootstrap';
import API from '../Services/API';


 //getting role
 const getUserRole = () => {
  return localStorage.getItem('role');
};

const isAdmin = () => {
  return getUserRole() === 'admin';
};

const StudentTable = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    API.get('/allStudentData')
      .then(response => {
        setStudentData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
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
    <div className="student-table-container">
        <h2>Student Data</h2>
      <table className="student-table">
      
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            
          </tr>
        </thead>
        <tbody>
          {studentData.map(student => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.country}</td>
              <td>{student.state}</td>
              <td>{student.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <footer style={{backgroundColor:"#5083be",textAlign:'center'}}>
        <Button onClick={moveToTop} style={{margin:'3px'}} >Move to Top</Button>
      </footer>
      </div>}
    </>
  );
};

export default StudentTable;
