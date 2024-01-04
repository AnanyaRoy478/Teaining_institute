import React from 'react';
import '../style/home.css';
import Navbar from './Navbar';
import AllCoursesTable from '../Table/CourseTable';
import { Button } from 'react-bootstrap';
import Logo from "../Logo/tech_image.webp"
import StudentHome from './StudentHome';

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

const token = localStorage.getItem("token")

const CommonHome = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Logo})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: "45vh", 
    position: 'relative', 
  };

  return (
    <>
    { !token ?
    <div 
      style={backgroundImageStyle}
     ><Navbar/>
       <div className="animated-text">
         <span style={{color: 'white',textShadow: '0 0 10px rgba(0, 255, 0, 0.8)'}}>Explore growth at <b>ProLearn Nexus</b> : Enhance skills, excel professionally with us !</span>
       </div> 
       <br /> 
       <AllCoursesTable/>
       <footer style={{backgroundColor:"#5083be",textAlign:'center'}}>
        <Button onClick={moveToTop}>Move to Top</Button>
      </footer>
      </div>
      : 
      <StudentHome/>
    }
    </>
  );
};

export default CommonHome;

