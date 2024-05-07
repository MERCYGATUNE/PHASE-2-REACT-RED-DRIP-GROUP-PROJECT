import React, { useState } from 'react';
import DonorLogin from './DonorLogin'; 
import './DonorsPortal.css';

function DonorPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLoginSuccess = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  return (
    <div className="donor-portall">
      {/* Navbar */}
      <nav className="sideee-navbar">
        <nl>
          <li><a href="#home">Home</a></li>
          <li><a href="#donateblood">Donate Blood</a></li>
          <li><a href="#donationhistory">Donation History</a></li>
          <li><a href="#bloodrequest">Blood Request</a></li>
        </nl>
      </nav>

      {/* Content */}
      <div className="portall-content">
        {isLoggedIn ? (
          <div className="portall-header">
          collo
          </div>
        ) : (
          <DonorLogin onLoginSuccess={handleLoginSuccess} />
        )}
      </div>
    </div>
  );
}

export default DonorPortal;