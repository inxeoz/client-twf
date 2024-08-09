import React from 'react';
import  './index.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';


const Main = () => {
  return (
    <div className="main">

      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/DonationForm">Donation</Link></li>
          <li><Link to="/LoginForm">Login</Link></li>
          <li><Link to="/SignupForm">Join</Link></li>
        </ul>
      </nav>
      <header className="header">
        <div className="header-content">
          <h1>TWKSAA WELFARE FOUNDATION</h1>
        </div>
      </header>

      <section className="intro">
        <h2>Welcome to TWKSAA Welfare Foundation</h2>
        <p>Welcome to the TWKSAA Welfare Foundation, dedicated to uplifting communities through education and support services. Our mission is to create a positive impact by providing essential resources and fostering partnerships. Join us in making a difference and building a brighter future for all.</p>
      </section>

      <section className="mission">
        <h2>Mission of TWF</h2>
        <p>TWF TWKSAA Welfare Foundation is an organization dedicated to ensuring that future discoveries, publications, and uses of new concepts and technologies on IR4.0, RMS & TLI originate from Indian culture, civilization, and language. Our mission is to lead these advancements from the sacred land of India.</p>
      </section>

      <section className="founder">
        <h2>Founder's Vision</h2>
        <img src="founder.jpg" alt="Founder Er Rajesh Prasad" />
        <p><q>I, Rajesh Prasad, founded TWF to address the challenges faced by our country, society, and people through the innovative application of IR4.0, RMS & TLI.</q></p>
        <p><strong>Founder: Er Rajesh Prasad</strong></p>
        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </section>

      <section className="call-to-action">
        <h2>Call to Action</h2>
        <p>I invite all students, teachers, and intellectuals passionate about research, innovation, and discovery to join TWF. Together, we can solve societal problems by leveraging our intellect, wisdom, and talents to create and adopt new solutions (IR4.0, RMS & TLI).</p>
      </section>

      <footer className="footer">
        <h2>Contact Us</h2>
        <p><FaMapMarkerAlt /> C/o Mr. Rajesh Prasad, Madan Tole, Kareli, Narsinghpur, Madhya Pradesh, India 487221</p>
        <p><FaEnvelope /> twf@twf.org</p>
        <p><FaPhone /> +91-9876543210</p>
      </footer>
      <Outlet />
    </div>
  );
};

export default Main;
