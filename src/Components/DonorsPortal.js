import React, { useState, useEffect } from 'react';
import DonorLogin from './DonorLogin'; 
import './DonorsPortal.css';
import nurseImaggeee from '../assets/fnurse1.png';

function DonorPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [unit, setUnit] = useState('');
  const [disease, setDisease] = useState('');
  const [age, setAge] = useState('');
  const [donorHistory, setDonorHistory] = useState([]);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('isLoggedIn');
    if (loggedInUser === 'true') {
      setIsLoggedIn(true);
      setUsername(sessionStorage.getItem('username'));
    }

    const storedDonorHistory = JSON.parse(localStorage.getItem('donorHistory'));
    if (storedDonorHistory) {
      setDonorHistory(storedDonorHistory);
    }

    const clearDonorHistoryTimeout = setTimeout(() => {
      setDonorHistory([]);
      localStorage.removeItem('donorHistory');
    }, 2 * 20 * 1000);

    return () => clearTimeout(clearDonorHistoryTimeout);
  }, []);

  const handleLoginSuccess = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('username', username);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
    setUsername('');
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
    const statusOptions = ['accepted', 'denied'];
    const randomStatusIndex = Math.floor(Math.random() * statusOptions.length);
    const randomStatus = statusOptions[randomStatusIndex];

    const newDonation = {
      bloodGroup,
      unit,
      disease,
      age,
      status: randomStatus
    };

    const updatedDonorHistory = [...donorHistory, newDonation];
    setDonorHistory(updatedDonorHistory);
    localStorage.setItem('donorHistory', JSON.stringify(updatedDonorHistory));

    setBloodGroup('');
    setUnit('');
    setDisease('');
    setAge('');

    if (randomStatus === 'accepted') {
      window.alert('Your donation request has been accepted visit see the nearest bloodbanks of your area');
    } else {
      window.alert('Your donation request has been denied.');
    }
  };

  return (
    <div className="donor-portal">
      <div className="portal-content-wrapper">
        <div className="portal-content">
          {isLoggedIn ? (
            <>
              <div className="portal-header">
                <form className='mmm' onSubmit={handleSubmit}>
                  <a className='blloood' id="donateblood">Donate Blood</a>
                  <div className="formm-group">
                    <p><a className='bld'>Donate Blood</a></p>
                    <label className='bbb' htmlFor="bloodGroup">Blood Group:</label>
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
                    <label htmlFor="disease">Name:</label>
                    <input type="text" id="disease" value={disease} onChange={handleDiseaseChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" value={age} onChange={handleAgeChange} />
                  </div>
                  <button className='ddd' type="submit">Donate Blood</button>
                </form>
                {isLoggedIn && (
                  <button className="logout-btn" onClick={handleLogout}>LOGOUT</button>
                )}
              </div>
              <div>
                <a id="donationnnhistory">Donation History</a>
                <table id='yy' style={{ borderCollapse: 'collapse', width: '300%' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                      <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Age</th>
                      <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Blood Group</th>
                      <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Unit (ml)</th>
                      <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Name</th>
                      <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donorHistory.map((donation, index) => (
                      <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f2f2f2' }}>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'right', padding: '8px' }}>{donation.age}</td>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'right', padding: '8px' }}>{donation.bloodGroup}</td>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'right', padding: '8px' }}>{donation.unit}</td>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'right', padding: '8px' }}>{donation.disease}</td>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'right', padding: '8px' }}>{donation.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <DonorLogin onLoginSuccess={handleLoginSuccess} />
          )}
        </div>
      </div>
    </div>
  );
}

export default DonorPortal;
