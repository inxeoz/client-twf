import './Sidebar.css';
import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebaar">

      <div className="profile">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzBE_P3rPclK8gJnC-y1Mq7kNOvyL8yUHlg&s" alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <h2 className="profile-name">John Doe</h2>
        </div>
      </div>
      <ul className="menu">
        <Link to="Profile" style={{ textDecoration: 'none', color: 'black' }}>
          <li className="menu-item">Profile</li>
        </Link>
        <Link to="Course" style={{ textDecoration: 'none', color: 'black' }}>
          <li className="menu-item">Course Management</li>
        </Link>
        <Link to='Student' style={{ textDecoration: 'none', color: 'black' }}>
          <li className="menu-item">Student Management</li>
        </Link>

           <Link to='Course_Materialdent' style={{ textDecoration: 'none', color: 'black' }}>
          <li className="menu-item">Course_Material</li>
        </Link>

      </ul>
      <button className="logout-button">Log Out</button>
    </div>
  );
};

export default Sidebar;

