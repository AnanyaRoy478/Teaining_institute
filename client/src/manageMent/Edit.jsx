
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Logo from "../Logo/Creative Color Brushstroke Lettering Logo.png"
import '../style/navbar.css'
import '../style/courseManagement.css'
import API from "../Services/API";


const UpdateUser = () => {
  const [inputUser, setInputUser] = useState({
    image:'',
    name:'',
    desc:'',
    amount:'',
    duration:''
  });
  // const history = useHistory();
  const { id } = useParams();
  // data fetching single
  const fetchSingleUser = async () => {
    const res = await API.get(`/course/${id}`);
    console.log(res.message);
    setInputUser({
        image:res.data.image,
        name: res.data.name,
        desc: res.data.desc,
        amount : res.data.amount,
        duration : res.data.duration
    });
  };
  useEffect(() => {
    fetchSingleUser();
  }, []);

   //getting role
   const getUserRole = () => {
    return localStorage.getItem('role');
};

const isAdmin = () => {
    return getUserRole() === 'admin';
};
  const handleChnage = (event) => {
    setInputUser({
      ...inputUser,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputUser);
    const res = await API.put(
      `/editCourse/${id}`,
      inputUser
    );
      
    console.log(res);
    if (res.status === 200) {
      window.alert('Course updated successfully!');
      window.location.href ="/editOrDelete"
    }
    // fetchAllUser();
  };
  return (
    isAdmin() &&
    <>
    <nav className="navbar">
                      <ul className="nav-list">
                        <li >
                          <Link className="nav-link active" aria-current="page" to="/adminHome">Admin Panel</Link>
                        </li>
                        <li >
                          <Link className="nav-link " to="/addCourse">Add Course</Link>
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
    <div >
      <form onSubmit={handleSubmit}>
        <h2>Update Course</h2>
       
          <label >Image</label>
            <textarea
            type= 'text'
            name="image"
            rows="2"
            placeholder="Enter image URL"
            value={inputUser.image}
            onChange={handleChnage}
          />
      
        
        <label >Name</label>
          <input
            type="text"
            name="name"
            
            placeholder="Enter name"
            value={inputUser.name}
            onChange={handleChnage}
          />
       
        
        <label >Description</label>
          <textarea
            type="text"
            name="desc"
            rows="4"
            placeholder="Enter description"
            value={inputUser.desc}
            onChange={handleChnage}
          />
        
        <label >Amount</label>
          <input
            type="text"
            name="amount"
            
            placeholder="Enter amount"
            value={inputUser.amount}
            onChange={handleChnage}
          />
          <label >Duration</label>
          <input
            type="text"
            name="duration"
            
            placeholder="Enter amount"
            value={inputUser.duration}
            onChange={handleChnage}
          />
        
          <button type="submit"  >
            Update Course
          </button>
        
      </form>
    </div>
    </>
  );
};

export default UpdateUser;