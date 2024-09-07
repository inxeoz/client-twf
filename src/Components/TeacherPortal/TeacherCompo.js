import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './TeacherSidebar.js';

import TeacherProfile from './src/Profile/Profile.jsx'
import TeacherCourses from './src/Content/Course.jsx';
import Students from './src/Student.jsx';
import CourseMaterial from './src/Course_Material.jsx';
import CreateEdit from './src/Create_Edit.jsx';
import Project from './src/Profile/AcademiCon/Project.js';

import './TeacherCompo.css'

function TeacherDashboard() {
    return (
        <div className='container'>
            <div id='sidebar'>
                <Sidebar />
            </div>
            <div className='content'>
                <Routes>
                    <Route path="TeacherProfile" element={<Project />} />
                    <Route path="TeacherCourses" element={<TeacherCourses />} />
                    <Route path="Students" element={<Students />} />
                    <Route path="CourseMaterial" element={<CourseMaterial />} />
                    <Route path="CreateEdit" element={<CreateEdit />} />
                </Routes>
            </div>
        </div>

    );
}

export default TeacherDashboard;
