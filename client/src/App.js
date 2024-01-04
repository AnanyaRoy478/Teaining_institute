import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import CommonHome from './HomePage/CommonHome.jsx';
import About from './Components/About.jsx';
import Courses from './Components/Courses.jsx';
import Contact from './Components/Contact.jsx';
import Signup from './SignupAndLogin/Signup.jsx';
import StudentLogin from './SignupAndLogin/StudentLogin.jsx';
import AdminHome from './HomePage/AdminHome.jsx';
import StudentTable from './Table/StudentTable.jsx';
import StudentHome from './HomePage/StudentHome.jsx';
import AddCourse from './manageMent/AddCourse.jsx';
import EditDelete from './manageMent/EditDelete.jsx';
import Edit from "./manageMent/Edit.jsx"

const token = localStorage.getItem("token")

const App = () => {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path= "/" element={(!token)&&<CommonHome/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signUp" element={<Signup/>}/>
        <Route path="/studentlogin" element={<StudentLogin/>}/>
        <Route path="/adminHome" element={<AdminHome/>}/>
        <Route path="/studentData" element={<StudentTable />}/>
        <Route path="/studentHome" element={<StudentHome/>}/>
        <Route path="/addCourse" element={<AddCourse />}/>
        <Route path="/course/:id" element={<Edit />}/>
        <Route path="/editOrDelete" element={<EditDelete />}/>
      </Routes>    
    </BrowserRouter>
    </>
  );
}

export default App;
