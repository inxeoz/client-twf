import React from 'react';
import './Profile.css'; // Import the CSS file for styles

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="header">
        <div className="user-details">
          <div className="user-icon">
            {/* Add a user icon or placeholder image */}
            <img src="path/to/icon.png" alt="User Icon" />
          </div>
          <div className="user-info">
            <h2>Raj Kumar</h2>
            <p>Email Address: example@mail.com</p>
            <p>Phone Number: 1234567890</p>
          </div>
        </div>
        <div className="dob-section">
          <p>DOB: 17 Jul</p>
          <button>Edit details</button>
        </div>
      </div>

      <div className="professional-info">
        <h3>Professional Information</h3>
        <div className="info-row">
          <span>Teacher ID:</span>
          <span className="teacher-id">UT101302002</span>
        </div>
        <div className="info-row">
          <span>Specialization:</span>
          <div className="tags">
            <span className="tag">Game Theory</span>
            <span className="tag">Machine Learning</span>
          </div>
        </div>
      </div>

      <div className="academic-contributions">
        <h3>Academic Contributions</h3>
        <div className="contributions-tabs">
          <span className="tab active">Research</span>
          <span className="tab">Projects</span>
          <span className="tab">Approval</span>
          <span className="tab">Conference</span>
        </div>
        <div className="contributions-list">
          <div className="contribution-item">
            <h4>Effect of Sunlight on Human Cognitive Functioning</h4>
            <p>Publication Date: 30 Jul 2023</p>
            <p>Author: Dr. ranjan, En. vijaya kumar</p>
            <a href="https://doi.org/AA.BBB.CC">DOI: https://doi.org/AA.BBB.CC</a>
          </div>
          <div className="contribution-item">
            <h4>Effect of Sunlight on Human Cognitive Functioning</h4>
            <p>Publication Date: 30 Jul 2023</p>
            <p>Author: Dr. ranjan, En. vijaya kumar</p>
            <a href="https://doi.org/AA.BBB.CC">DOI: https://doi.org/AA.BBB.CC</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
