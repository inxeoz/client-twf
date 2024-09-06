import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/Login/LoginForm';
import Main from './Components/Home/Main';
import SignupForm from './Components/Login/SignupForm';
import DonationForm from './Components/Donation/DonationForm';
import ForgotPassword from './Components/Login/ForgotPassword';
import PasswordReset from './Components/Login/PasswordReset';
import TeacherDashboardEmbed from './Components/TeacherPortal/TeacherCompo'; // Assuming this is the component to render teacher portal routes
import { CourseProvider } from './Components/Context/CreateContext';

const App = () => {
  return (
    <BrowserRouter>
      <CourseProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/LoginForm/*" element={<TeacherDashboardEmbed />} />
          <Route path="/SignupForm" element={<SignupForm />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/DonationForm" element={<DonationForm />} />
          <Route path="/PasswordReset" element={<PasswordReset />} />
          <Route path="/TeacherPortal/*" element={<TeacherDashboardEmbed />} />
        </Routes>
      </CourseProvider>
    </BrowserRouter>
  );
};

export default App;
