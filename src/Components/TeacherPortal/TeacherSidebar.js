import React from 'react';
import { Link } from 'react-router-dom';
import  './TeacherSidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzBE_P3rPclK8gJnC-y1Mq7kNOvyL8yUHlg&s" alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <h2 className="profile-name">John Doe</h2>
        </div>
      </div>
      <ul className="menu">
       <Link to="TeacherProfile"  style={{textDecoration:'none' ,color:'black'}}>
        <li className="menu-item">Profile</li>
        </Link>
        <Link to="TeacherCourses"  style={{textDecoration:'none',color:'black'}}>
        <li className="menu-item">Course Management</li>
        </Link>
        <Link to='Students' style={{textDecoration:'none' ,color:'black'}}>
        <li className="menu-item">Teacher Management</li>
        </Link>
     
        <Link to='CourseMaterial' style={{textDecoration:'none' ,color:'black'}}>
        <li className="menu-item">Teacher Course Material</li>
        </Link>
        <Link to='CreateEdit' style={{textDecoration:'none' ,color:'black'}}>
        <li className="menu-item">Create Edit</li>
        </Link>
     
        
      </ul>
      <button className="logout-button">Log Out</button>
    </div>
  );
};

export default Sidebar;