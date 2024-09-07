import React, { useState } from 'react';
import Sidebar from '../../../Sidebar'; 
import './Organization.css'; 
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Downward arrow icon





const initialOrganizations = [
  { id: 1, name: 'Org A', type: 'Non-Profit', status: 'Active' },
  { id: 2, name: 'Org B', type: 'Educational', status: 'Inactive' },
  { id: 3, name: 'Org C', type: 'Healthcare', status: 'Active' },
 
];

const Organization = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [organizations, setOrganizations] = useState(initialOrganizations);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newOrg, setNewOrg] = useState({ name: '', type: '', status: '' });
  const [editOrg, setEditOrg] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddOrganization = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewOrg((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newId = organizations.length ? organizations[organizations.length - 1].id + 1 : 1;
    setOrganizations([...organizations, { id: newId, ...newOrg }]);
    setNewOrg({ name: '', type: '', status: '' });
    setIsFormVisible(false);
  };

  const handleExportData = () => {
    const doc = new jsPDF();
    html2canvas(document.querySelector('.organization-table')).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 190;
      const pageHeight = 295; // A4 page height in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      doc.save('organizations.pdf');
    });
  };

  const handleEditClick = (org) => {
    setEditOrg(org);
    setIsFormVisible(true);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this organization?')) {
      setOrganizations(organizations.filter(org => org.id !== id));
    }
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  const filteredOrganizations = organizations.filter(org =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="organization-page">
      <main className="organization-main-content">
        <div className="header-actions">
          <h3 className="page-heading">Organizations</h3>
          <div className="actions">
            <button onClick={handleAddOrganization} className="add-organization-button">
              {isFormVisible ? 'Cancel' : 'Add Organization'}
            </button>
            <button onClick={handleExportData} className="export-data-button">
              Export Data as PDF
            </button>
          </div>
        </div>
        {isFormVisible && (
          <form onSubmit={handleFormSubmit} className="add-organization-form">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={newOrg.name}
                onChange={handleFormChange}
                required
              />
            </label>
            <label>
              Type:
              <input
                type="text"
                name="type"
                value={newOrg.type}
                onChange={handleFormChange}
                required
              />
            </label>
            <label>
              Status:
              <select
                name="status"
                value={newOrg.status}
                onChange={handleFormChange}
                required
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </label>
            <button type="submit" className="submit-button">Add</button>
          </form>
        )}
        <input
          type="text"
          placeholder="Search organizations..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
        <table className="organization-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrganizations.map(org => (
              <tr key={org.id}>
                <td>{org.name}</td>
                <td>{org.type}</td>
                <td>{org.status}</td>
                <td>
                  <div className="dropdown-container">
                    <button className="dropdown-button">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                    <div className="dropdown-menu" onClick={handleDropdownClick}>
                      <button onClick={() => handleEditClick(org)} className="dropdown-item">Edit</button>
                      <button onClick={() => handleDeleteClick(org.id)} className="dropdown-item">Delete</button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Organization;
