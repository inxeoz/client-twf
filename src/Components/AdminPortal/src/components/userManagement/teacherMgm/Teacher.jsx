import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';



const TeacherProfile = () => {
  const [expandedTeacher, setExpandedTeacher] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const teachers = [
    {
      id: 'T12345',
      name: 'Dr. John Smith',
      dob: '05/15/1975',
      email: 'john.smith@example.com',
      mobile: '+0987654321',
      img: 'https://media.istockphoto.com/id/120260032/photo/senior-businessman-in-suit-standing.jpg?s=612x612&w=is&k=20&c=9y3T1sz9j1mVzP-0Lh9ziYLt8IrTQKQOogfVyrY7w7c=',
      department: 'Computer Science',
      research: 'Artificial Intelligence'
    },
    {
      id: 'T67890',
      name: 'Prof. Emily Johnson',
      dob: '09/22/1980',
      email: 'emily.johnson@example.com',
      mobile: '+1234567890',
      img: 'https://media.istockphoto.com/id/1155630977/photo/young-woman-in-business-attire-portrait.jpg?s=612x612&w=is&k=20&c=VzgbHcm5eXjOQvUE4j2jCvlq9OtlG8m9cU9Q9gLZcAA=',
      department: 'Mathematics',
      research: 'Applied Mathematics'
    }
    // Add more teachers here
  ];

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    teacher.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleDetails = (id) => {
    setExpandedTeacher(expandedTeacher === id ? null : id);
  };

  return (
    <div>
      <div className="relative mb-8 md:mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Teacher Profiles</h1>
      </div>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or ID"
          className="w-full p-2 border border-gray-300 rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {filteredTeachers.map((teacher) => (
          <div key={teacher.id} className="bg-white p-4 rounded-lg shadow-lg border border-gray-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={teacher.img}
                  alt="Profile"
                  className="w-24 h-24 object-cover rounded-full border-4 border-green-500"
                />
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-800">{teacher.name}</p>
                  <p className="text-base text-gray-600">ID: {teacher.id}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  className="p-2 text-blue-500 hover:text-blue-700"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  className="p-2 text-gray-500 hover:text-gray-700"
                  onClick={() => toggleDetails(teacher.id)}
                >
                  <FontAwesomeIcon icon={expandedTeacher === teacher.id ? faChevronUp : faChevronDown} />
                </button>
              </div>
            </div>

            {expandedTeacher === teacher.id && (
              <div className="mt-4">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex-1">
                    <p className="text-base text-gray-700">Date of Birth: <span className="font-semibold">{teacher.dob}</span></p>
                    <p className="text-base text-gray-700">Email: <span className="font-semibold">{teacher.email}</span></p>
                    <p className="text-base text-gray-700">Mobile: <span className="font-semibold">{teacher.mobile}</span></p>
                    <p className="text-base text-gray-700">Department: <span className="font-semibold">{teacher.department}</span></p>
                    <p className="text-base text-gray-700">Research: <span className="font-semibold">{teacher.research}</span></p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherProfile;
