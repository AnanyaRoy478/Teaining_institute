import React from 'react'
import { Link } from 'react-router-dom';
import '../style/navbar.css'
import Logo from "../Logo/Creative Color Brushstroke Lettering Logo.png"

const token = localStorage.getItem('token')

const Navbar = () => {


  return (
    <>
        <nav className="navbar">
        <div class="logo"><img src={Logo}
         alt='ProLearn Nexus' style={{ width: '50px', height:'50px',borderRadius: '2rem', border: '2px solid black'}}/></div>
                      <ul className="nav-list">
                        <li>
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/courses">Courses</Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/studentlogin">Login</Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/signUp">Register</Link>
                        </li>
                      </ul>
          </nav> 
    </>
  )
}

export default Navbar
