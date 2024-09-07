import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faChevronUp, faEdit, faUserTie } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../../../Sidebar';
import TeacherProfile from '../teacherMgm/Teacher';





const StudentProfile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedStudent, setExpandedStudent] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  const [view, setView] = useState('student'); // State to toggle between student and teacher views
  const [searchQuery, setSearchQuery] = useState('');

  const students = [
    {
      id: 'S12345',
      name: 'Rajkumar Rao',
      dob: '01/01/2000',
      email: 'rajkumar.rao@example.com',
      mobile: '+1234567890',
      img: 'https://media.istockphoto.com/id/1448069480/photo/happy-young-indian-student-boy-working-on-laptop-and-studying-in-college-library-with.jpg?s=612x612&w=is&k=20&c=vmoZQk5IhLV9It9H3yXJeH_bq11BnC14NwPmjZMhfWA=',
      performance: '85%',
      attendance: '95%'
    },
    {
      id: 'S67890',
      name: 'Anjali Patel',
      dob: '02/14/2001',
      email: 'anjali.patel@example.com',
      mobile: '+0987654321',
      img: 'https://media.istockphoto.com/id/1253889734/photo/young-woman-student-with-laptop-in-university-library.jpg?s=612x612&w=is&k=20&c=5OooyJdZn38c2tJSXzVazcl0sj5N60MxFjv6rdCSk5Q=',
      performance: '92%',
      attendance: '98%'
    }
    // Add more students here
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleDetails = (id) => {
    setExpandedStudent(expandedStudent === id ? null : id);
  };

  const handleEdit = (student) => {
    setEditStudent(student);
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    // Save logic goes here
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditStudent(null);
  };

  if (view === 'teacher') {
    return <TeacherProfile />;
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white overflow-y-auto transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'} md:relative md:translate-x-0 md:w-64 md:block z-20`}>

        <button
          className="w-full p-2 bg-blue-500 text-white rounded mt-4 hover:bg-blue-600"
          onClick={() => setView('teacher')}
        >
          <FontAwesomeIcon icon={faUserTie} className="mr-2" /> Teacher Profile
        </button>
      </div>

      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-500 text-white rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
      </button>

      <div className={`flex-1 p-4 md:p-8 bg-gray-100 transition-transform duration-300 ease-in-out ${sidebarOpen ? 'md:ml-64' : ''} overflow-y-auto h-screen`}>
        <div className="relative mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Student Profiles</h1>
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
          {filteredStudents.map((student) => (
            <div key={student.id} className="bg-white p-4 rounded-lg shadow-lg border border-gray-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={student.img}
                    alt="Profile"
                    className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
                  />
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-800">{student.name}</p>
                    <p className="text-base text-gray-600">ID: {student.id}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    className="p-2 text-blue-500 hover:text-blue-700"
                    onClick={() => handleEdit(student)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="p-2 text-gray-500 hover:text-gray-700"
                    onClick={() => toggleDetails(student.id)}
                  >
                    <FontAwesomeIcon icon={expandedStudent === student.id ? faChevronUp : faChevronDown} />
                  </button>
                </div>
              </div>

              {expandedStudent === student.id && (
                <div className="mt-4">
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                    <div className="flex-1">
                      <p className="text-base text-gray-700">Date of Birth: <span className="font-semibold">{student.dob}</span></p>
                      <p className="text-base text-gray-700">Email: <span className="font-semibold">{student.email}</span></p>
                      <p className="text-base text-gray-700">Mobile: <span className="font-semibold">{student.mobile}</span></p>
                    </div>
                    <div className="flex-1 flex space-x-6">
                      <div className="bg-gray-200 p-4 rounded-md shadow-md flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">Performance</h3>
                        <p className="text-gray-700">{student.performance}</p>
                      </div>
                      <div className="bg-gray-200 p-4 rounded-md shadow-md flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">Attendance</h3>
                        <p className="text-gray-700">{student.attendance}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {editMode && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-30">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={editStudent.name}
                    onChange={(e) => setEditStudent({ ...editStudent, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Date of Birth</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={editStudent.dob}
                    onChange={(e) => setEditStudent({ ...editStudent, dob: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={editStudent.email}
                    onChange={(e) => setEditStudent({ ...editStudent, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Mobile</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={editStudent.mobile}
                    onChange={(e) => setEditStudent({ ...editStudent, mobile: e.target.value })}
                  />
                </div>
                <div className="flex justify-end space-x-4 mt-4">
                  <button
                    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentProfile;
