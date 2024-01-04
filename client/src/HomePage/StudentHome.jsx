import React from 'react'
import '../style/home.css';
import AllCoursesTable from '../Table/CourseTable';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/navbar.css'
import Logo from "../Logo/Creative Color Brushstroke Lettering Logo.png"


const StudentHome = () => {

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };
  return (
    <> 
    {
      localStorage.getItem('token') &&
       (
      <div>
      <div className="animated-text">
        <span>Welcome, bright mind! Let the learning journey begin.</span>
      </div>
      <nav className="navbar">
                      <ul className="nav-list">
                        <li >
                          <Link className="nav-link active" aria-current="page" to="/studentHome">Home</Link>
                        </li>
                        <li >
                          <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li>
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                        <li>
                        <Link className="nav-link" to="/courses">Courses</Link>
                        </li>
                        <li>
                        <Link className="nav-link" onClick={() => { window.localStorage.clear();window.location.href ="/"}}>Log Out
                        </Link>
                        </li>
                      </ul>
                      <div class="logo"><img src={Logo}
         alt='ProLearn Nexus' style={{ width: '50px', height:'50px',borderRadius: '2rem', border: '2px solid black'}}/></div>       
          </nav> 
      <AllCoursesTable/>
      <footer style={{backgroundColor:"#a2c9c9",textAlign:'center'}}>
        <Button onClick={moveToTop} style={{margin:'3px'}}>Move to Top</Button>
      </footer>
      </div>
) } 

    </>
  )
}

export default StudentHome
