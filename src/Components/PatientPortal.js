import React, { useState } from 'react';
import PatientLogin from './PatientLogin';
import './PatientPortal.css';

function ParentComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (success) => {
    setIsLoggedIn(success);
  };

  return (
    <div>
      {isLoggedIn ? 
        <div>
          <h2 className='weeeelcome'>Welcome to the Patient Portal</h2>
          <h1 className='patient' id='patient'> history</h1>
        <table className="patient-details"></table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Blood Group</th>
              <th>Address</th>
              <th>health history</th>
              <th>mobile</th>
              <th>Action</th>
              
            </tr>
          </thead>
          
        </div>
       : (
        <PatientLogin onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default ParentComponent;
