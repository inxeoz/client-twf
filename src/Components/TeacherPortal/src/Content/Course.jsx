import React from 'react'
import './Course.css'
import { Link } from 'react-router-dom';
const Course = () => {
  return (
    <div className="app-container">
    <header className="app-header">
      
        <div className='head>'>
        <button className='btn'>Current Courses</button>
        </div>

        <div className='head>'>
        <button className='btn'>Credit/Edit Course</button>
        </div>
        <Link to="/Course_Material"  style={{textDecoration:'none' ,color:'black'}}>
        <div className='head'>
        <button className='btn'>Course Material</button>
        </div>
        </Link>

    
    </header>
    <main className="app-main">
      <div className="course-card">
        <div className="course-video">
          <video   autoPlay  muted controls  src="https://videos.pexels.com/video-files/27047787/12056359_1440_2560_30fps.mp4" alt="Course Image" />
        </div>
        <div className="course-info">
          <h2>Full course on evolution of ancient animals</h2>
          <p>Next Class Schedule: 10:30 AM, Jul 25</p>
          <p>__________________________________</p>
          <p>Total assignments: 10</p>
          <p>Enrolled: 37 Student</p>
        </div>
      </div>
      <div className="course-card">
        <div className="course-video">
          <video autoPlay  muted controls src="https://videos.pexels.com/video-files/27047787/12056359_1440_2560_30fps.mp4" alt="Course Image" />
        </div>
        <div className="course-info">
        <h2>Full course on evolution of ancient animals</h2>
          <p>Next Class Schedule: 10:30 AM, Jul 25</p>
          <p>__________________________________</p>
          <p>Total assignments: 10</p>
          <p>Enrolled: 37 Student</p>
        </div>
      </div>
      <div className="course-card">
        <div className="course-video">
          <video autoPlay  muted controls src="https://via.placeholder.com/150" alt="Course Image" />
        </div>
        <div className="course-info">
        <h2>Full course on evolution of ancient animals</h2>
          <p>Next Class Schedule: 10:30 AM, Jul 25</p>
          <p>__________________________________</p>
          <p>Total assignments: 10</p>
          <p>Enrolled: 37 Student</p>
        </div>
      </div>
    </main>
    </div>
  )
}

export default Course