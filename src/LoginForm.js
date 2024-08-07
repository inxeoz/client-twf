// src/LoginForm.js
import React, { useState } from 'react';
import './index.css';
import { FaGoogle, FaApple } from 'react-icons/fa'; // Importing Google and Apple icons
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // Store the token in localStorage
        localStorage.setItem('authToken', data.token);

        // Redirect to the dashboard
        navigate('/dashboard');
      } else {
        console.log("login error");
        setErrorMessage(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const handleRegisterClick = () => {
    navigate('/SignupForm');
  };

  return (
    <>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/DonationForm">Donation</Link></li>
          <li><Link to="/LoginForm">Login</Link></li>
          <li><Link to="/SignupForm">Join</Link></li>
        </ul>
      </nav>
      <div className="login-form">

        <h2>Welcome TWKSAA WELFARE FOUNDATION!</h2>
        <form onSubmit={handleSubmit}>
          <div>
            {errorMessage}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="social-login">
            <button type="button" className="google-login">
              <FaGoogle /> Login with Google
            </button>
            <button type="button" className="apple-login">
              <FaApple /> Login with Apple
            </button>
          </div>
        </form>

        <div>
          <p>
            Don't have a registration yet?
            <div className='Register-Link' onClick={handleRegisterClick}>
              <a href='#' style={{ color: 'blue' }}>Register here</a>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
