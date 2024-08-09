import React, { useState } from 'react';
import Dashboard from '../Dashboard/StudentDashboard';

const StudentAssignments = () => {
  const [Studentassignments, setStudentAssignments] = useState([
    { id: 1, title: 'HTML & CSS Assignment', dueDate: '2024-08-15', tutor: 'John' },
    { id: 2, title: 'JavaScript Project', dueDate: '2024-08-20', tutor: 'Vanessa' },
    { id: 3, title: 'Create an API', dueDate: '2024-08-25', tutor: 'Jane' },
    { id: 4, title: 'React Basics', dueDate: '2024-09-01', tutor: 'Sam' },
    { id: 5, title: 'Node.js Fundamentals', dueDate: '2024-09-05', tutor: 'Emma' },
    { id: 6, title: 'Database Design', dueDate: '2024-09-10', tutor: 'Lucas' },
    { id: 7, title: 'Testing with Jest', dueDate: '2024-09-15', tutor: 'Olivia' },
    { id: 8, title: 'Deploying Applications', dueDate: '2024-09-20', tutor: 'Mia' },
  ]);

  return (
    <div className="flex">
      <Dashboard className="w-1/4" />
      <div className="w-3/4 p-4">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">StudentAssignments</h1>
        <p className="mb-6 text-lg text-gray-600">Here is a list of your upcoming Studentassignments:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Studentassignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-700">{assignment.title}</h2>
              <p className="text-gray-600 mt-1">Posted by: <span className="font-medium">{assignment.tutor}</span></p>
              <p className="text-gray-500 mt-1">Due date: <span className="font-medium">{assignment.dueDate}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentAssignments;
