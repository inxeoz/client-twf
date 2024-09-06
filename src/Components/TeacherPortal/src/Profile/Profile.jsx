import React, { useState } from "react";
import './Profile.css';
import { Link } from 'react-router-dom';
const Profile = () => {
  const [user, setUser] = useState({
    name: "Raj Kumar",
    email: "example@mail.com",
    phone: "1234567890",
    dob: "17 Jul",
  });
  

  // State to handle the visibility of the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to handle the change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Function to handle form submission and close the popup
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPopupOpen(false); // Close the popup after submission
  };

  // Function to handle the opening of the popup
  const handleEditClick = () => {
    setIsPopupOpen(true);
  };


  return (
      <main id="main-conntent">
        <header className="heaader">
        <div id="header-info" style={{ backgroundColor: "#4A90E2", color: "white", padding: "10px" }}>
        <h2>{user.name}</h2>
        <p>Email Address: {user.email}</p>
        <p>Phone Number: {user.phone}</p>
        <p>DOB: {user.dob}</p>
        <button id="edit-btn" onClick={handleEditClick}>Edit details</button>
      </div>

      {isPopupOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <div style={{ backgroundColor: "blue", padding: "20px", borderRadius: "5px" , }}>
            <h3>Edit Details</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Email Address:</label>
                <input
                  style={{margin:"10px" ,padding:"10px", height:"40px" , width:"200px" , borderRadius:"5px"}}
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Phone Number:</label>
                <input
                 style={{margin:"10px" ,padding:"10px", height:"40px" , width:"200px" , borderRadius:"5px"}}
                  type="tel"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>DOB:</label>
                <input
                 style={{margin:"10px" , padding:"10px" , height:"40px" , width:"200px" , borderRadius:"5px"}}
                  type="text"
                  name="dob"
                  value={user.dob}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit"  style={{margin:"5px" , height:"40px" , width:"100px" , borderRadius:"5px", marginLeft:"2px"}}>Save</button>
            </form>
            <button  style={{margin:"5px" , height:"40px" , width:"100px" , borderRadius:"5px"}} onClick={() => setIsPopupOpen(false)}>Cancel</button>
          </div>
        </div>
      )}

        </header>
        <section className="professional-info"  >
          <h3>Professional Information</h3>
          <p>Teacher ID: UT10302002</p>
          <p>Specialization: <span className="specialization">Game Theory</span> <span className="specialization">Machine Learning</span></p>
        </section>
        <section className="academic-contributions">
          <h3>Academic Contributions</h3>
          <div className="tabs">
            <button className="tab active">Research</button>
            <button className="tab">Projects</button>
            <button className="tab">Approval</button>
            <button className="tab">Participation</button>
          </div>
          
        </section>
        <div className="research">
            <div className="research-item">
              <h4>Effect of Sunlight on Human Cognitive Functioning</h4>
              <p>Publication Date: 30 Jul 2023</p>
              <p>Author: Dr.rajan, En. vijya kumar</p>
              <p>DOI: <a href="https://doi.org/AA.BBB.CC" target="_blank" rel="noopener noreferrer">https://doi.org/AA.BBB.CC</a></p>
            </div>
            <div className="research-item">
              <h4>Effect of Sunlight on Human Cognitive Functioning</h4>
              <p>Publication Date: 30 Jul 2023</p>
              <p>Author: Dr.rajan, En. vijya kumar</p>
              <p>DOI: <a href="https://doi.org/AA.BBB.CC" target="_blank" rel="noopener noreferrer">https://doi.org/AA.BBB.CC</a></p>
            </div>
          </div>
      </main>
  );
};

export default Profile;





