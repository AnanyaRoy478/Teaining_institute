import React, { useState, useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../style/navbar.css'
import Logo from "../Logo/Creative Color Brushstroke Lettering Logo.png"
import API from "../Services/API"

const EditDelete = () => {
  const navigate = useNavigate()
  const [courses, setCourses] = useState([]);

   //getting role
   const getUserRole = () => {
    return localStorage.getItem('role');
};

const isAdmin = () => {
    return getUserRole() === 'admin';
};

  useEffect(() => {
    // Fetch data from the API using Axios
    API.get("/allcourses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleEdit = (courseId) => {
    navigate(`/course/${courseId}`);   
  };

  const handleDelete = async (courseId) => {
    const confirmDelete = window.confirm('Do you really want to delete?');
    
    if (confirmDelete) {
      try {
        const res = await API.delete(`/deleteCourse/${courseId}`);
        
        if (res.status === 200) {
          window.alert('Course deleted successfully');
        }
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    }
  };  

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
                      <div className="logo"><img src={Logo}
         alt='ProLearn Nexus' style={{ width: '50px', height:'50px',borderRadius: '2rem', border: '2px solid black'}}/></div>       
          </nav> 
    <div>
      <h2>All Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course._id}>
              <td><img
                  src={course.image}
                  alt={course.name}
                  style={{ width: '150px' }}
                /></td>
              <td>{course.name}</td>
              <td>{course.desc}</td>
              <td>{course.amount}</td>
              <td>{course.duration}</td>
              <td>
                <button onClick={() => handleEdit(course._id)} className="btn btn-primary mb-1">Edit</button>
                <button onClick={() => handleDelete(course._id)}className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <footer style={{backgroundColor:"#5083be",textAlign:'center'}}>
        <Button onClick={moveToTop} style={{margin:'3px'}} >Move to Top</Button>
      </footer>
      </div> 
      }
    </>
  );
};

export default EditDelete;
