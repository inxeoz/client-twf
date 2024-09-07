import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/Login/LoginForm';
import Main from './Components/Home/Main';
import SignupForm from './Components/Login/SignupForm';
import DonationForm from './Components/Donation/DonationForm';
import ForgotPassword from './Components/Login/ForgotPassword';
import PasswordReset from './Components/Login/PasswordReset';
import { CourseProvider } from './Components/Context/CreateContext';
import AdminDashboard from './Components/AdminPortal/AdminDashboard';
import TeacherDashboard from './Components/TeacherPortal/TeacherCompo';
import TeacherDashboard2 from './Components/TeacherPortal2/TeacherCompo';

const App = () => {
  return (
    <BrowserRouter>
      <CourseProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/LoginForm/*" element={<TeacherDashboard />} />
          <Route path="/SignupForm" element={<SignupForm />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/DonationForm" element={<DonationForm />} />
          <Route path="/PasswordReset" element={<PasswordReset />} />
        </Routes>
      </CourseProvider>
    </BrowserRouter>
  );
};

export default App;
