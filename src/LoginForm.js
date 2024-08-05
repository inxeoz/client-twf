// src/LoginForm.js
import React, { useState } from 'react';
import './index.css';
import { FaGoogle, FaApple } from 'react-icons/fa'; // Importing Google and Apple icons
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
    <nav className="nav">
        <ul>
        <li><Link to="/">Home</Link></li>

          <li><a href="#about">About</a></li>
          <li><a href="#solutions">Education</a></li>
          <li><Link to="/DonationForm">Donation</Link></li>
          <li><Link to="/LoginForm">Login</Link></li>
          <li><Link to="/SignupForm">Join</Link></li>
        </ul>
      </nav> 
    <div className="login-form">

      <h2>Welcome TWKSAA WELFARE FOUNDATION!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
        <Link to="/Sidebar"> <button type="submit">Login</button></Link>
        <div className="social-login">
          <button type="button" className="google-login">
            <FaGoogle /> Login with Google
          </button>
          <button type="button" className="apple-login">
            <FaApple /> Login with Apple
          </button>
        </div>
      </form>
      <div className="register-link">
        <p>Don't have a registration yet? <a href="#">Register here</a></p>
      </div>
    </div>
    </> 
  );
};

export default LoginForm;
