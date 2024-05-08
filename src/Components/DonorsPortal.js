import React, { useState } from 'react';
import DonorLogin from './DonorLogin'; 
import './DonorsPortal.css';

function DonorPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [unit, setUnit] = useState('');
  const [disease, setDisease] = useState('');
  const [age, setAge] = useState('');
  const [donorHistory, setDonorHistory] = useState([]);

  const handleLoginSuccess = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleBloodGroupChange = (e) => {
    setBloodGroup(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleDiseaseChange = (e) => {
    setDisease(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Blood Group:", bloodGroup);
    console.log("Unit:", unit);
    console.log("Disease:", disease);
    console.log("Age:", age);

    // Update donor history with new donation
    const newDonation = {
      bloodGroup,
      unit,
      disease,
      age,
      status: 'Pending' // Initial status
    };

    setDonorHistory([...donorHistory, newDonation]);

    // Clear form fields after submission
    setBloodGroup('');
    setUnit('');
    setDisease('');
    setAge('');
  };

  return (
    <div className="donor-portal">
      <nav className="side-navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#donateblood">Donate Blood</a></li>
          <li><a href="#donationhistory">Donation History</a></li>
      </nav>
      <div className="portal-content-wrapper">
        <div className="portal-content">
          {isLoggedIn ? (
            <div className="portal-header">
              <a className="hoomee">Home</a>
              <div className="cardi-container">
                <div className="cardi">Pending Request</div>
                <div className="cardi">Approved Request</div>
                <div className="cardi">Rejected Requests</div>
              </div>
              <form className='mmm' onSubmit={handleSubmit}>
                <a className='blloood'  id="donateblood">Donate Blood</a>
                <div className="formm-group">
                   <p><a className='bld'>Donate Blood</a></p>
                  <label htmlFor="bloodGroup">Blood Group:</label>
                  <select id="bloodGroup" value={bloodGroup} onChange={handleBloodGroupChange}>
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="unit">Unit (ml):</label>
                  <input type="number" id="unit" value={unit} onChange={handleUnitChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="disease">Disease:</label>
                  <input type="text" id="disease" value={disease} onChange={handleDiseaseChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age:</label>
                  <input type="number" id="age" value={age} onChange={handleAgeChange} />
                </div>
                <button type="submit">Donate Blood</button>
              </form>
            </div>
          ) : (
            <DonorLogin onLoginSuccess={handleLoginSuccess} />
          )}
          {isLoggedIn && (
            <div>
              <a id="donationhistory">Donate history</a>
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f2f2f2' }}>
                    <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Age</th>
                    <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Blood Group</th>
                    <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Unit (ml)</th>
                    <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Disease</th>
                    <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {donorHistory.map((donation, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f2f2f2' }}>
                      <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{donation.age}</td>
                      <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{donation.bloodGroup}</td>
                      <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{donation.unit}</td>
                      <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{donation.disease}</td>
                      <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{donation.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DonorPortal;
