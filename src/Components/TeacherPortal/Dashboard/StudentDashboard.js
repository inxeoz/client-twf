import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleLogoutBtn = () => {
    navigate('/LoginForm');
  };

  return (
    <div className="w-64 h-screen bg-blue-900 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Student Portal</h2>
      <ul>
        <li className="mb-3">
          <NavLink
            to="/StudentPortal/StudentProfile"
            className={({ isActive }) =>
              `block w-full p-2 border rounded-md ${isActive ? 'bg-blue-800' : 'bg-blue-500'} text-white font-semibold `
            }
          >
            Profile
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink
            to="/StudentPortal/StudentCourses"
            className={({ isActive }) =>
              `block w-full p-2 border rounded-md ${isActive ? 'bg-blue-800' : 'bg-blue-500'} text-white font-semibold `
            }
          >
            Courses
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink
            to="/StudentPortal/StudentAssignments"
            className={({ isActive }) =>
              `block w-full p-2 border rounded-md ${isActive ? 'bg-blue-800' : 'bg-blue-500'} text-white font-semibold `
            }
          >
            Assignments
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink
            to="/StudentPortal/StudentClasses"
            className={({ isActive }) =>
              `block w-full p-2 border rounded-md ${isActive ? 'bg-blue-800' : 'bg-blue-500'} text-white font-semibold `
            }
          >
            Classes & Videos
          </NavLink>
        </li>
        {/* <li className="mb-3">
          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              `block w-full p-2 border rounded-md ${isActive ? 'bg-blue-800' : 'bg-blue-500'} text-white font-semibold `
            }
          >
            Classes Schedule
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink
            to="/support"
            className={({ isActive }) =>
              `block w-full p-2 border rounded-md ${isActive ? 'bg-blue-800' : 'bg-blue-500'} text-white font-semibold`
            }
          >
            Resources and Support
          </NavLink>
        </li> */}
      </ul>

      <div className="flex py-5">
        <button
          onClick={handleLogoutBtn}
          className="w-full border p-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default StudentDashboard;
