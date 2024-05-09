import React, { useState } from 'react';
import './Patientlogin.css';

function PatientLogin({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'collo','dsv' && password === 'collo123','sd') {
      onLoginSuccess(true);
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="patient-login-container">
      <h2 className="pattient-login-title">PATIENT LOGIN</h2>
      <div className="input-group">
        <label htmlFor="username">USERNAME:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">PASSWORD:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button className="login-button" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default PatientLogin;