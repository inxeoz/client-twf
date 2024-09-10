import React, { useState } from 'react';
import './CourseManagement.css';

const CourseManagement = () => {
  const [activeTab, setActiveTab] = useState('currentCourses');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="course-management-container">
      {/* Tabs Section */}
      <div className="tabs-container">
        <button
          className={`tab-button ${activeTab === 'currentCourses' ? 'active' : ''}`}
          onClick={() => handleTabChange('currentCourses')}
        >
          Current Courses
        </button>
        <button
          className={`tab-button ${activeTab === 'createCourses' ? 'active' : ''}`}
          onClick={() => handleTabChange('createCourses')}
        >
          Create/Edit Courses
        </button>
        <button
          className={`tab-button ${activeTab === 'courseMaterials' ? 'active' : ''}`}
          onClick={() => handleTabChange('courseMaterials')}
        >
          Course Materials
        </button>
      </div>

      {/* Course Cards Section */}
      <div className="course-cards-container">
        <div className="course-card">
          <div className="course-image">
            <img src="path-to-image" alt="Course" />
            <div className="assignment-count">17</div>
          </div>
          <div className="course-info">
            <h3>Full course on evolution of ancient animals</h3>
            <p>Next Class Schedule: 10:30 AM, Jul 25</p>
            <p>Total assignments: 10</p>
            <p>Enrolled: 37 Students</p>
          </div>
          <div className="course-actions">
            <button className="edit-button">✏️</button>
            <button className="share-button">🔗</button>
          </div>
        </div>
        
        {/* Additional courses can be rendered similarly */}
      </div>
    </div>
  );
};

export default CourseManagement;
