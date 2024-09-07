import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentAssignments from './src/Assignments/StudentAssignments';
import StudentCourses from './src/Courses/StudentCourses';
import StudentDashboard2  from './src/Dashboard/StudentDashboard';
import StudentClasses from './src/LiveClasses/StudentClasses';
import StudenProfile from './src/Profile/StudentProfile';
import Sidebar from './StudentSidebar';

function StudentDashboard() {
    return (
        <div>
            <div id='sidebar'>
            <Sidebar />
            </div>
            <div id='content'>
                <Routes>
                    <Route path="studentassignments" element={<StudentAssignments />} />
                    <Route path="StudentCourses" element={<StudentCourses />} />
                    <Route path="StudentDashboard" element={<StudentDashboard2 />} />
                    <Route path="StudentClasses" element={<StudentClasses />} />
                    <Route path="StudenProfile" element={<StudenProfile />} />
                </Routes>
            </div>
        </div>

    );
}

export default StudentDashboard;