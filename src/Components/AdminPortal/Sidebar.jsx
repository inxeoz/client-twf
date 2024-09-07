import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoutBtn = () => {
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to toggle sidebar on mobile screens with icons */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden text-white bg-blue-900 p-2 rounded flex items-center justify-center"
      >
        {isOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </button>

      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-blue-900 text-white p-4 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:w-64 md:translate-x-0 md:block md:h-screen md:overflow-y-auto z-40 flex flex-col`}
      >
        {/* Heading */}
        <div className="mb-4">
          <h2 className="text-xl font-bold">Admin Dashboard</h2>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col flex-grow">
          <ul className="flex flex-col flex-grow space-y-4">
            {[
              // { to: "/", label: "Dashboard" },
              { to: "user-management", label: "User Management" },
              { to: "course-management", label: "Course Management" },
              { to: "donation-management", label: "Donation Management" },
              { to: "organization-management", label: "Organization Management" }
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`block w-full p-2 border rounded-md font-semibold ${
                    location.pathname === item.to
                      ? 'bg-blue-800 text-white'
                      : 'bg-blue-500 text-white hover:bg-blue-800'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout Button */}
        <div className="mt-auto mb-5">
          <button
            onClick={handleLogoutBtn}
            className="w-full border p-2 rounded bg-orange-400 text-white font-bold hover:bg-orange-700"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
