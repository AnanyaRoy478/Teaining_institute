import React, { useState, useEffect } from 'react';
import "../style/table.css"

const AllCoursesTable = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('http://localhost:8000/allcourses')
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <h2>All Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Courses Name</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Duration</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.desc}</td>
              <td>{course.amount}</td>
              <td>{course.duration}</td>
              <td><img
                  src={course.image}
                  alt={course.name}
                  style={{ width: '100px' }}
                /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCoursesTable;
