
import React, { useState } from 'react';
import '../DonationManagement/DonarRecords.css';
import Sidebar from '../../../Sidebar'; 
import jsPDF from 'jspdf'; //import for pdf 
import html2canvas from 'html2canvas';



const initialDonorData = [
    {
      name: 'John',
      amount: 100,
      paymentMethod: 'Credit Card',
      date: '2024-08-01',
      email: 'user@gmail.com'
    },
    {
      name: 'Jane',
      amount: 250,
      paymentMethod: 'PayPal',
      date: '2024-08-02',
      email: 'user@gmail.com'
    },
    {
      name: 'Emily',
      amount: 75,
      paymentMethod: 'Bank Transfer',
      date: '2024-08-03',
      email: 'user@gmail.com'
    },
    {
      name: 'Michael',
      amount: 200,
      paymentMethod: 'Credit Card',
      date: '2024-08-04',
      email: 'user@gmail.com'
    },
    {
      name: 'Davis',
      amount: 150,
      paymentMethod: 'PayPal',
      date: '2024-08-05',
      email: 'user@gmail.com'
    },
];

const DonarRecords = () => {
    const [donors, setDonors] = useState(initialDonorData);
    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({
      name: '',
      amount: '',
      paymentMethod: '',
      date: '',
      email: ''
    });
    const [showForm, setShowForm] = useState(false);

    const filteredDonors = donors.filter(donor =>
      donor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (formData.name && formData.amount && formData.paymentMethod && formData.date && formData.email) {
        setDonors([...donors, formData]);
        setFormData({
          name: '',
          amount: '',
          paymentMethod: '',
          date: '',
          email: ''
        });
        setShowForm(false);
      } else {
        alert('Please fill in all fields');
      }
    };

    const exportToPDF = () => {
      const input = document.getElementById('donor-table');
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; 
        const pageHeight = 295; 
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;
        
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        
        pdf.save('donor_records.pdf');
      });
    };

    return (
      <div className="donor-list">
          <div className='donar-record'>
            <h1 className='heading'>Donar Records</h1>
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-bar"
            />
            <button onClick={() => setShowForm(!showForm)} className="add-button">
              {showForm ? 'Cancel' : 'Add Donor'}
            </button>
            <button onClick={exportToPDF} className="export-button">
              Export to PDF
            </button>
            
            {showForm && (
              <form onSubmit={handleFormSubmit} className="donor-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="paymentMethod"
                  placeholder="Payment Method"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <div id='center'>
                <button type="submit">Add Donor</button>
                </div>
              </form>)
            }
  
            <table id="donor-table" className="donor-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Date</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {filteredDonors.map((data, index) => (
                  <tr key={index}>
                    <td>{data.name}</td>
                    <td>{data.amount}</td>
                    <td>{data.paymentMethod}</td>
                    <td>{data.date}</td>
                    <td>{data.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    );
};

export default DonarRecords;
