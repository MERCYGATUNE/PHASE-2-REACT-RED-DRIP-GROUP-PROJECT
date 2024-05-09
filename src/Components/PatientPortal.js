
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
      {isLoggedIn ? (
        <div>
          <h2 className='weeeelcome'>Welcome to the Patient Portal</h2>
        </div>
      ) : (
        <PatientLogin onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default ParentComponent;