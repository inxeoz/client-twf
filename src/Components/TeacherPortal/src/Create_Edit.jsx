import React, { useState } from 'react';
import './Create_Edit.css';

function CreateEdit() {
  const [courses, setCourses] = useState([
    {
      name: 'Full course on evolution of ancient animals',
      startDate: '23/3/23',
      endDate: 'Ongoing',
      level: '',
      videos: [],
      materials: [],
    },
    {
      name: 'Full course on evolution of ancient animals',
      startDate: '23/3/23',
      endDate: 'Ongoing',
      level: '',
      videos: [],
      materials: [],
    },
    {
      name: 'Full course on evolution of ancient animals',
      startDate: '23/3/23',
      endDate: 'Ongoing',
      level: '',
      videos: [],
      materials: [],
    },
    {
      name: 'Full course on evolution of ancient animals',
      startDate: '23/3/23',
      endDate: 'Ongoing',
      level: '',
      videos: [],
      materials: [],
    },
  ]);

  const handleCourseChange = (index, field, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][field] = value;
    setCourses(updatedCourses);
  };

  const handleDeleteCourse = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  const handleCreateCourse = () => {
    setCourses([
      ...courses,
      {
        name: '',
        startDate: '',
        endDate: '',
        level: '',
        videos: [],
        materials: [],
      },
    ]);
  };

  return (
    <div className="container">
      <div className="course-form">
        <div className="form-group">
          <label htmlFor="course-name">Course Name</label>
          <input
            type="text"
            id="course-name"
            placeholder="Full course on evolution of ancient animals"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="start-date">Starting Date</label>
          <input
            type="date"
            id="start-date"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="level">Level</label>
          <input
            type="text"
            id="level"
            placeholder="Level"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="videos">Add Videos / Material</label>
          <input
            type="text"
            id="videos"
            placeholder="Add Videos / Material"
            className="form-control"
          />
        </div>
        <button className="create-course-btn" onClick={handleCreateCourse}>
          Create Course
        </button>
      </div>
      <div className="course-list">
        {courses.map((course, index) => (
          <div className="course-item" key={index}>
            <div className="course-info">
              <div className="course-name">
                <input
                  type="text"
                  value={course.name}
                  onChange={(e) =>
                    handleCourseChange(index, 'name', e.target.value)
                  }
                  placeholder="Full course on evolution of ancient animals"
                  className="form-control"
                />
              </div>
              <div className="course-date">
                <input
                  type="text"
                  value={`${course.startDate} - ${course.endDate}`}
                  onChange={(e) => {
                    const [startDate, endDate] = e.target.value.split(' - ');
                    handleCourseChange(index, 'startDate', startDate);
                    handleCourseChange(index, 'endDate', endDate);
                  }}
                  placeholder="23/3/23 - Ongoing"
                  className="form-control"
                />
              </div>
            </div>
            <div className="course-actions">
              <button className="edit-btn" onClick={() => {}}>
                <i className="fas fa-edit"></i>
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDeleteCourse(index)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateEdit;