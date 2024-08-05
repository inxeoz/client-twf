import React, { useState } from 'react';
import { Link,Outlet } from 'react-router-dom';
import './index.css';
import { FaGoogle, FaApple, FaRocket } from 'react-icons/fa'; // Importing Google and Apple icons


const SignupForm = () => {
  const [formData, setFormData] = useState({
    role: 'Student',
    date: '',
    country: 'India',
    gender: 'Male',
    name: '',
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
    
    <div className="body">
      <nav className="nav">
        <ul>
        <li><Link to="/">Home</Link></li>

          <li><a href="#about">About</a></li>
          <li><a href="#solutions">Education</a></li>
          <li><Link to="#donation">Donation</Link></li>
          <li><Link to="/LoginForm">Login</Link></li>
          <li><Link to="SignupForm">Join</Link></li>
        </ul>
      </nav>
    <div className="signup-form">
      <h2>Join TWKSAA <FaRocket/></h2>
      <p>For a Brighter Future!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <div className="form-select">
                <div className="form-one">
                    <select name="role" value={formData.role} onChange={handleChange}>
                        <option value="Student">Student</option>
                        {/* Add more options as needed */}
                    </select>
                    <input type="date" name="date" value={formData.date} onChange={handleChange}/>
                </div>
                <div className="form-one">
                <select name="country" value={formData.country} onChange={handleChange}>
                    <option value="India">India</option>
                    {/* Add more options as needed */}
                </select>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="Male">Male</option>
                    {/* Add more options as needed */}
                </select>
                </div>
          </div>
        </div>
        <div className="form-group">
          <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Sign Up</button>
        <div className="social-signup">
          <button type="button">
            <FaGoogle /> Sign Up with Google
          </button>
          <button type="button">
            <FaApple /> Sign Up with Apple
          </button>
        </div>
      </form>
    </div>
    <Outlet/>
    </div>
  );
};

export default SignupForm;
