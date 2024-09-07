import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DonarRecords from './components/DonationManagement/DonarRecords';
import Sidebar from '../Sidebar';
import Organization from './components/organizationmanagement/Organization';
import Courses from './components/courseManagement/CourseManagement';
import StudentProfile from './components/userManagement/studentMgm/Student';


function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/user-management" element={<StudentProfile/>}/>
          <Route path="/course-management" element={<Courses/>}/>
          <Route path="/donation-management" element={<DonarRecords />} />
          <Route path="/organization-management"  element={<Organization/>}/>
          
          

        </Routes>
      
    </BrowserRouter>
  );
}

export default App;

