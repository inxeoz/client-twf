import React from 'react';
import Dashboard from "../Dashboard/StudentDashboard"
import { CalendarIcon } from '@heroicons/react/outline';

const StudentClasses = () => {
  const classes = [
    {
      day: 'Monday',
      time: '9:00 AM',
      title: 'Introduction to HTML',
      date: '2024-08-12',
    },
    {
      day: 'Tuesday',
      time: '10:00 AM',
      title: 'HTML5 Multimedia Elements',
      date: '2024-08-13',
    },
    {
      day: 'Wednesday',
      time: '11:00 AM',
      title: 'Advanced HTML Techniques',
      date: '2024-08-14',
    },
    {
      day: 'Thursday',
      time: '1:00 PM',
      title: 'HTML Semantics tags',
      date: '2024-08-15',
    },
    {
      day: 'Saturday',
      time: '3:00 PM',
      title: 'HTML Forms and Inputs',
      date: '2024-08-17',
    }
  ];

  return (
    <div className="flex mx-auto">
      <div className="">
        <Dashboard />
      </div>
      <div className="w-3/4 ml-4 p-2">
        <h1 className="text-2xl font-bold mb-4">Classes Schedule</h1>
        {classes.map((classItem, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg mb-4 p-4 flex justify-between">
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <CalendarIcon className="h-4 w-4 text-white" />
              </div>
              <div className="ml-3 gap-3 items-center justify-end">
                <p className="text-xl font-bold">{classItem.title}</p>
                <div className=''>
                  <p className="text-sm font-medium text-gray-800">{classItem.date}</p>
                  <p className="text-sm">{classItem.time}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentClasses;
