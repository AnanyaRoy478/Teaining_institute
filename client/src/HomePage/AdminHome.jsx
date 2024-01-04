import React from 'react'
import '../style/home.css';
import { Link ,useNavigate} from 'react-router-dom';
import '../style/navbar.css'
import Logo from "../Logo/Creative Color Brushstroke Lettering Logo.png"
import { Button } from 'react-bootstrap';

const AdminHome = () => {

  const  navigate = useNavigate()
  

  //getting role
  const getUserRole = () => {
    return localStorage.getItem('role');
};

const isAdmin = () => {
    return getUserRole() === 'admin';
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
    {
      localStorage.getItem('token') && 
    <div style={{backgroundColor:'#a2c9c9'}}>
      <div className="animated-text">
        <span>Welcome, Administrator. Unleash the power at your fingertips!</span>
      </div>
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
          <body className='container' style={{padding:'1rem'}}>
            <p >
            Dear Admin,

            I hope this message finds you well and thriving in the spirit of growth and progress. As we embark on another exciting year at our esteemed training institution, I wanted to take a moment to express my heartfelt appreciation for your unwavering commitment and the incredible work you do to uplift and empower our community.

            In the fast-paced and ever-evolving landscape of education and training, your role as an administrator is nothing short of instrumental. You are the driving force behind the scenes, orchestrating the harmonious blend of innovation, dedication, and passion that defines our institution's ethos. Your tireless efforts contribute significantly to creating an environment where learning knows no bounds.

            As we reflect on the past achievements and lessons learned, it's evident that our training institution has become a beacon of excellence, a place where dreams take flight, and aspirations find their wings. Your leadership has been pivotal in shaping this success story, and it's your vision that guides us toward even greater heights.

            In the coming months, we anticipate new challenges and opportunities. Change is the only constant, and your adaptability and resilience will serve as a guiding light. It's this ability to embrace change that allows us to stay at the forefront of educational trends and provide our students with an enriching and future-ready experience.

            I want to commend you for fostering a culture of inclusivity and collaboration. Our institution is more than just a place of learning; it's a community where ideas flourish, and individuals find their voices. Your emphasis on creating an environment that values diversity and encourages open dialogue is pivotal in shaping well-rounded individuals ready to tackle the complexities of the world.

            Enthusiasm is contagious, and your infectious passion for education sets the tone for everyone in our institution. Your commitment to continuous improvement inspires us to strive for excellence in all that we do. It's this shared commitment that forms the foundation of our collective success.

            As we look ahead, I am confident that your leadership will continue to steer us toward innovation and transformative education. Let's embrace the challenges as opportunities for growth, and let's celebrate the victories, big and small, that make our institution a remarkable place to learn and thrive.

            In closing, I want to express my deepest gratitude for your dedication and hard work. Your role is not merely administrative; it's a catalyst for positive change and an investment in the future. Together, let's make this academic year a testament to the limitless possibilities that unfold when passion meets purpose.

            Thank you for your unyielding commitment to our training institution. Here's to another year of inspiration, collaboration, and success!
            </p>
          </body>
          <footer style={{backgroundColor:"#5083be",textAlign:'center'}}>
        <Button onClick={moveToTop} style={{margin:'3px'}} >Move to Top</Button>
      </footer>
          </div>
          
      }
    </>
  )
}

export default AdminHome
