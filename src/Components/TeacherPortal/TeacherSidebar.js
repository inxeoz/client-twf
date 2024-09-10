import React from 'react';
import { Link } from 'react-router-dom';
import  './TeacherSidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="profile-section">
        <div className="profile-icon">
          {/* Add an icon or placeholder image */}
          <img src="path/to/profile-icon.png" alt="Profile Icon" />
        </div>
        <h3>Dr. Rahima</h3>
      </div>

      <nav className="nav-links">
        <ul>
        <Link to="TeacherProfile"  style={{textDecoration:'none' ,color:'black'}}>
          <li>
            <button className="nav-link active">Profile</button>
          </li>
          </Link>
          <Link to="TeacherCourses"  style={{textDecoration:'none',color:'black'}}>
          <li>
            <button className="nav-link">Course Management</button>
          </li>
          </Link>
          <Link to='Students' style={{textDecoration:'none' ,color:'black'}}>
          <li>
            <button className="nav-link">Student Management</button>
          </li>
          </Link>

          <Link to='CourseMaterial' style={{textDecoration:'none' ,color:'black'}}>
          <li>
            <button className="nav-link">Assignments and Exams</button>
          </li>

          </Link>

        </ul>
      </nav>

      <div className="logout-section">
        <button className="logout-button">LOG-OUT</button>
      </div>
    </div>
  );
};

export default Sidebar;
