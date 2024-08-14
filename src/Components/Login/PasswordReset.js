// src/components/ResetPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ResetPassword = () => {
  const location = useLocation();
  const token = location.state?.token;
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [OTP, setOtp] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendEmail = async () => { 
    try {
      await axios.post('http://localhost:5000/auth/send-email', { email });
      alert('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      await axios.post('http://localhost:5000/auth/reset-password', { token, password: newPassword, OTP });
      alert('Password reset successful');
    } catch (error) {
      console.error('Error resetting password:', error);
      alert('Error resetting password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reset Password</h2>

      {/* Section 1: Input Email and Send Button */}
      <div>
        <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" required />
        <button type="button" onClick={handleSendEmail}>Send</button>
      </div>

      {/* Section 2: Input New Password and Confirm Password */}
      <div>
        <input type="password" value={newPassword} onChange={handleNewPasswordChange} placeholder="New Password" required />
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm New Password" required />
      </div>

      {/* Section 3: Input OTP and Submit Button */}
      <div>
        <input type="text" value={OTP} onChange={handleOtpChange} placeholder="OTP" required />
        <button type="submit">Reset Password</button>
      </div>
    </form>
  );
};

export default ResetPassword;
