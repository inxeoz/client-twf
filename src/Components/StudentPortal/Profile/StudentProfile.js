import React, { useState } from 'react';
import Sidebar from '../Dashboard/StudentDashboard';
import { useCourseContext } from '../../Context/CreateContext';

const StudenProfile = () => {

  const { enrolledCourses, removeCourse } = useCourseContext();
  // Placeholder student data
  const student = {
    name: 'Rajkumar Rao',
    email: 'rajkumar.rao@example.com',
    dob: '01/01/2000',
    mobile: '+1234567890',
    img: 'https://media.istockphoto.com/id/1448069480/photo/happy-young-indian-student-boy-working-on-laptop-and-studying-in-college-library-with.jpg?s=612x612&w=is&k=20&c=vmoZQk5IhLV9It9H3yXJeH_bq11BnC14NwPmjZMhfWA=', // Placeholder image URL
  };


  const achievements = [
    { title: 'Best Student Award', date: 'June 2024' },
    { title: 'Top Performer in Javascript', date: 'December 2023' },
    { title: 'Marathon Winner', date: 'March 2023' },
  ];

  const handleDelete = (course) => {
      removeCourse(course)
  }
  return (
    <div className='flex bg-gray-200'>
      <Sidebar />

      <div className='flex-1 p-8'>
        <div className='flex items-center space-x-6'>
          <img
            src={student.img}
            alt="StudenProfile"
            className='w-32 h-32 object-cover rounded-full border-4 border-blue-500'
          />
          <div>
            <h1 className='text-3xl font-bold mb-2'>{student.name}</h1>
            <p className='text-lg text-gray-700'>Email: <span className='font-semibold'>{student.email}</span></p>
            <p className='text-lg text-gray-700'>Date of Birth: <span className='font-semibold'>{student.dob}</span></p>
            <p className='text-lg text-gray-700'>Mobile: <span className='font-semibold'>{student.mobile}</span></p>
          </div>
        </div>

        <div className='space-y-4 m-5 flex flex-wrap gap-4'>
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((course, index) => (
              <div key={index} className='p-4 border border-gray-300 bg-white rounded-md w-full   justify-center items-center'>
                <div>
                <h3 className='text-xl font-semibold'>{course.title}</h3>
                <p className='text-gray-700'>Instructor: {course.tutor}</p>
                <p className='text-gray-700'>Duration: {course.hours}</p>
                <p className='text-gray-700'>{course.description}</p>
                </div>
                
               <div>
               <button
                onClick={()=>handleDelete(course)}
                className='border text-white bg-red-700 p-2 m-3 rounded font-bold'>Delete</button>
               </div>
              </div>
            ))
          ) : (
            <p className='flex justify-center font-bold border border-blue-600 rounded my-8 py-2 text-2xl bg-blue-300'>No courses enrolled yet.</p>
          )}
        </div>

        <div className='mt-8'>
          <h2 className='text-2xl font-bold mb-4'>Achievements</h2>
          <div className='space-y-4'>
            {achievements.map((achievement, index) => (
              <div key={index} className='p-4 border border-gray-300 bg-white rounded-md flex justify-between'>
                <h3 className='text-xl font-semibold'>{achievement.title}</h3>
                <p className='text-gray-700'>Date: {achievement.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudenProfile;
