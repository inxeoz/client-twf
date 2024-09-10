import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './TeacherSidebar.js';

import TeacherProfile from './src/Profile/Profile.jsx'
import TeacherCourses from './src/Content/Course.jsx';
import Students from './src/Student.jsx';
import CourseMaterial from './src/Course_Material.jsx';
import CreateEdit from './src/Create_Edit.jsx';
// import Project from './src/Profile/AcademiCon/Project.js';
import Profile from './src/Profile/Profile.jsx';
import CourseManagement from './src/Course/CourseManagement.jsx';

import './TeacherCompo.css'

function TeacherDashboard() {
    return (
        <div className='main'>
            <div id='sidebar'>
                <Sidebar />
            </div>
            <div id='content'>
                <Routes>
                    <Route path="TeacherProfile" element={<Profile />} />
                    <Route path="TeacherCourses" element={<CourseManagement />} />
                    <Route path="Students" element={<Students />} />
                    <Route path="CourseMaterial" element={<CourseMaterial />} />
                    <Route path="CreateEdit" element={<CreateEdit />} />
                </Routes>
            </div>
        </div>

    );
}

export default TeacherDashboard;
