import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import Navbar from '../HomePage/Navbar';
import axios from "axios"
import Navbar from '../HomePage/Navbar';

const StudentLogin = () => {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const navigate =useNavigate()
    var role = localStorage.getItem('role');

    const HandleSubmit =(e)=>{
        e.preventDefault()
        
        axios.post('http://localhost:8000/login',{email,password})
        .then(res=>{
            localStorage.setItem('role',res.data.role)
            localStorage.setItem('token',res.data.token)
            
    
            if(res.data.token===undefined){
                setSubmissionStatus('error');
                return;
            }
            else {
                setSubmissionStatus('success');
                if(submissionStatus==='success'){
                  window.alert('Logged in successfully!');
                }
                else{
                    if (res.data.role === 'admin'){
                        navigate('/adminHome')
                    }                        
                    else {
                        navigate('/studentHome');
                }
                    }
            }
            // console.log(res.data)
        })
    }

  return (
    <>
    <Navbar/>
  {!role ? (
    <div>
      <div className='container'>
        <form onSubmit={HandleSubmit}>
          <h3 style={{textAlign:'center'}}>Login Form</h3>
          <div className="mb-3">
            <label className="form-label">
              <span style={{color:'red'}}>*</span>Email address
            </label>
            <input 
              type="email" 
              className="form-control" 
              aria-describedby="emailHelp" 
              placeholder="Enter your registered mail" 
              value={email} 
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" placeholder="Enter Password">
              <span style={{color:'red'}}>*</span>Password
            </label>
            <input 
              type="password" 
              className="form-control" 
              value={password}
              placeholder='Enter password'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary me-3">
              Login
            </button>
            <button className="btn btn-success me-3">
              <Link to="/signUp" className="text-white text-decoration-none">
                New here? Click to Register!
              </Link>
            </button>
            <button className="btn btn-success me-3">
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </button>
          </div>
        </form>
        <footer style={{backgroundColor:'#a2c9c9' , textAlign:'center'}}>
          <p><span style={{color:'red'}}>*</span>Fields are mandatory</p>
        </footer>
        {submissionStatus === 'error' && (
          <div className="alert alert-danger mt-3">
            Please try again or <Link to="/signUp">Register first</Link>
          </div>
        )}
      </div>
    </div>
  ) : (
    
    <div>
     <h1><p style={{color:'red',textAlign:'center'}}>You Have Already Logged In !</p></h1>
    </div>
  )}
</>

  )
}

export default StudentLogin 