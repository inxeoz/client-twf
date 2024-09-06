import React, { useState } from 'react';
import './Student.css'; 

function Student() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="container">
      <div id="header">
        <div className="title">Recently Enrolled</div>
        <div className="title">Add/Remove</div>
        <div className="title">Attention</div>
        <div className="icon">
          <i className="fas fa-filter"></i>
        </div>
      </div>
      <div id="content">
        <div className="card" id="card1">
          <div className="user-info">
            <img src="https://static.vecteezy.com/system/resources/previews/007/469/004/non_2x/graduated-student-in-simple-flat-personal-profile-icon-or-symbol-people-concept-illustration-vector.jpg" alt="User" />
            <div>
              <h2>rahul kumar</h2>
              <h2>SID012G672</h2>
            </div>
          </div>
          <div className="stats">
            <div>
              <p>Performance</p>
              <p>4.5</p>
            </div>
            <div>
              <p>Attendance</p>
              <p>45%</p>
            </div>
          </div>
          <div className="actions">
            <i className="fas fa-phone-alt"></i>
            <i className="fas fa-envelope"></i>
          </div>
          <div className="expand" onClick={handleExpand}>
            {isExpanded ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </div>
        </div>
        {isExpanded && (
          <div className="expanded-content" id="expanded-content-1">
            <div className="user-info">
              <p>1234567890</p>
              <p>rahulkumar@hotmail.com</p>
            </div>
          </div>
        )}
        <div className="card" id="card2">
          <div className="user-info">
            <img src="https://static.vecteezy.com/system/resources/previews/007/469/004/non_2x/graduated-student-in-simple-flat-personal-profile-icon-or-symbol-people-concept-illustration-vector.jpg" alt="User" />
            <div>
              <h2>rahul kumar</h2>
              <h2>SID012G672</h2>
            </div>
          </div>
          <div className="stats">
            <div>
              <p>Performance</p>
              <p>4.5</p>
            </div>
            <div>
              <p>Attendance</p>
              <p>45%</p>
            </div>
          </div>
          <div className="actions">
            <i className="fas fa-phone-alt"></i>
            <i className="fas fa-envelope"></i>
          </div>
          <div className="expand" onClick={handleExpand}>
            {isExpanded ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </div>
        </div>
        {isExpanded && (
          <div className="expanded-content" id="expanded-content-2">
            <div className="user-info">
              <p>1234567890</p>
              <p>rahulkumar@hotmail.com</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Student;