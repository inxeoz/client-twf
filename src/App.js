import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/Login/LoginForm';
import Home from './Components/Home/Home';
import SignupForm from './Components/Login/signup/SignupForm';
import DonationForm from './Components/Donation/DonationForm';
import ForgotPassword from './Components/Login/forgot/ForgotPassword';
import { CourseProvider } from './Components/Context/CreateContext';
import AdminDashboard from './Components/AdminPortal/AdminDashboard';
import TeacherDashboard from './Components/TeacherPortal/TeacherCompo';

const App = () => {
  return (
    <BrowserRouter>
      <CourseProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginForm/*" element={<AdminDashboard />} />
          <Route path="/SignupForm" element={<SignupForm />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/DonationForm" element={<DonationForm />} />
        </Routes>
      </CourseProvider>
    </BrowserRouter>
  );
};

export default App;
