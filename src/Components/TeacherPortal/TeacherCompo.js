// src/TeacherDashboardEmbed.tsx
import React from 'react';
import Sidebar from './src/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Profile from './src/Profile/Profile';
import Course from './src/Content/Course';
import Student from './src/Student';
import Course_Material from './src/Course_Material';
import './TeacherCompo.css';

const TeacherApp = () => {
  return (
    <div className="app-container">
      <div id='sidebar'>
        <Sidebar /> 
      </div>
      <div id='content'>
        <Routes>
          <Route path="Profile" element={<Profile />} />
          <Route path="Course" element={<Course />} />
          <Route path="Student" element={<Student />} />
          <Route path="Course_Material" element={<Course_Material />} />
        </Routes>
      </div>
    </div>
  );
};

export default TeacherApp;
