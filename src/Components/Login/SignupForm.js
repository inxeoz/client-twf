import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../Home/index.css'
import { FaGoogle, FaApple, FaRocket } from 'react-icons/fa';
import axios from 'axios'; // Added axios import

const SignupForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userType: 'Student',
    date: Date.now(),
    country: 'India',
    gender: 'Male',
    name: '',
    email: '',
    password: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    console.error('Handle button');
    try {
      const res = await axios.post(`http://${process.env.REACT_APP_SERVER_IP}/user/signup`, formData);
      setResponseMessage(res.data); // Store the response message
      navigate('/LoginForm');
    } catch (err) {
      if (err.response) {
        console.error('Error response:', err.response.data);
      } else if (err.request) {
        console.error('Error request:', err.request);
      } else {
        console.error('Error', err.message);
      }
      console.error('Error config:', err.config);
    }
  };

  return (
    <div className="body">
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/DonationForm">Donation</Link></li>
          <li><Link to="/LoginForm">Login</Link></li>
          <li><Link to="/SignupForm">Join</Link></li>
        </ul>
      </nav>
      <div className="signup-form">
        <h2>Join TWKSAA <FaRocket /></h2>
        <p>For a Brighter Future!</p>
        <form onSubmit={handleSubmit}>
          <div>
            {responseMessage}
          </div>
          <div className="form-group">
            <div className="form-select">
              <div className="form-one">
                <select name="userType" value={formData.userType} onChange={handleChange}>
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  {/* Add more options as needed */}
                </select>
                <input type="date" name="date" value={formData.date} onChange={handleChange} />
              </div>
              <div className="form-one">
                <select name="country" value={formData.country} onChange={handleChange}>
                  <option value="India">India</option>
                  {/* Add more options as needed */}
                </select>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
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
        {responseMessage && <p>{responseMessage}</p>}
      </div>
      <Outlet />
    </div>
  );
};

export default SignupForm;