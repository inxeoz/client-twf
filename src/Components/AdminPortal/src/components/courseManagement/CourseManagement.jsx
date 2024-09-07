// src/components/Courses.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../../Sidebar';






const Courses = () => {
  const [enrolled, setEnrolled] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const courses = [
    {
      title: 'HTML & CSS Crash Course',
      image: 'https://media.istockphoto.com/id/1448124439/vector/web-development-programming-and-code-testing-ui-concept-with-laptop-displaying-futuristic.jpg?s=612x612&w=is&k=20&c=TvQpvIa3x169HB2Zh_vQCDGmkimNrNhhGJHz2yre6zM=',
      tutor: 'Jane Doe',
      hours: '20 hours',
      description: 'Learn the basics of web development with HTML and CSS.'
    },
    {
      title: 'JavaScript',
      image: 'https://media.istockphoto.com/id/1156837650/photo/javascript-code-computer-language-programming-internet-text-editor-components-display-screen.jpg?s=612x612&w=is&k=20&c=kqofA5ZXiq9Ud2HVcWkbGP-gHV6axxmjQTsSZI0wx0M=',
      tutor: 'John Smith',
      hours: '25 hours',
      description: 'Deep dive into JavaScript, the language of the web.'
    },
    {
      title: 'Python Course For Beginners',
      image: 'https://media.istockphoto.com/id/1284202542/vector/programming-language-python-conceptual-banner-education-coding-computer-language-python.jpg?s=612x612&w=is&k=20&c=6BCttchpEGHyA8LR7GXR_FJ-vfpfhUtNK9cuysOXv-U=',
      tutor: 'Emily Davis',
      hours: '30 hours',
      description: 'Master Python programming for web development, data analysis, and more.'
    },
    {
      title: 'TypeScript',
      image: 'https://media.istockphoto.com/id/1448124439/vector/web-development-programming-and-code-testing-ui-concept-with-laptop-displaying-futuristic.jpg?s=612x612&w=is&k=20&c=TvQpvIa3x169HB2Zh_vQCDGmkimNrNhhGJHz2yre6zM=',
      tutor: 'Michael Brown',
      hours: '15 hours',
      description: 'Enhance your JavaScript skills with TypeScript for better type safety and tooling.'
    },
    {
      title: 'Ruby',
      image: 'https://media.istockphoto.com/id/1412305408/vector/the-programmer-is-developing-a-website-ui-ux-interface-on-monitor-screen-tablet-phone.jpg?s=1024x1024&w=is&k=20&c=UVa2wwyMxA3d0bQVJoGrVIXRytv68l6rjPg3QCHrEbU=',
      tutor: 'Michael Brown',
      hours: '15 hours',
      description: 'Learn Ruby programming for web development and scripting.'
    },
    {
      title: 'Java',
      image: 'https://media.istockphoto.com/id/1335247101/photo/computer-with-elements-of-program-code-on-the-screen-and-the-inscription-java-and-a-keyboard.jpg?s=612x612&w=is&k=20&c=NQKkdtxNxiX0eqlrnHNMtw1nFOt_HgztZW0z7FVTIo8=',
      tutor: 'Michael Brown',
      hours: '15 hours',
      description: 'Learn Java programming for enterprise applications and more.'
    },
  ];

  const handleEnroll = (course) => {
    setEnrolled((prev) => ({ ...prev, [course.title]: true }));
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className={`flex-1 bg-gray-200 transition-transform duration-300 ease-in-out ${sidebarOpen ? 'md:ml-64' : ''} overflow-y-auto h-screen`}>
        <div className="p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Available Courses</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white border rounded-lg shadow-md overflow-hidden flex flex-col">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                  style={{ objectFit: 'cover', height: '200px' }} 
                />
                <div className="flex-1 p-4">
                  <h2 className="text-lg md:text-xl font-semibold mb-2">{course.title}</h2>
                  <p className="text-gray-700 mb-2">Instructor: {course.tutor}</p>
                  <p className="text-gray-700 mb-2">Duration: {course.hours}</p>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleEnroll(course)}
                      className={`py-2 px-4 rounded ${
                        enrolled[course.title] ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}
                    >
                      {enrolled[course.title] ? 'Enrolled' : 'Enroll'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
