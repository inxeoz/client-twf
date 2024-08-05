import React from 'react';
import './index.css';
import { PiStudent } from 'react-icons/pi';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-card">
      <PiStudent/>  
        <h3>Raj Kumar</h3>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>Profile</li>
          <li>Courses</li>
          <li>Live Classes and Videos</li>
          <li>Class Schedule</li>
          <li>Grades and Progress</li>
          <li>Resources and Support</li>
        </ul>
      </nav>
      <button className="logout-btn">Log Out</button>
    </div>
  );
}

export default Sidebar;
