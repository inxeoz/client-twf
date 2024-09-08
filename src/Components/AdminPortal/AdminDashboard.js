import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DonarRecords from './src/components/DonationManagement/DonarRecords';
import Sidebar from './Sidebar';
import Courses from './src/components/courseManagement/CourseManagement';
import Organization from './src/components/organizationmanagement/Organization';
import StudentProfile from './src/components/userManagement/studentMgm/Student';
import './AdminDashboard.css'

function AdminDashboard() {
    return (
        <div className='main'>
            <div id='sidebar'>
            <Sidebar />
            </div>
            <div id='content'>
                <Routes>
                    <Route path="user-management" element={<StudentProfile />} />
                    <Route path="course-management" element={<Courses />} />
                    <Route path="donation-management" element={<DonarRecords />} />
                    <Route path="organization-management" element={<Organization />} />
                </Routes>
            </div>
        </div>

    );
}

export default AdminDashboard;