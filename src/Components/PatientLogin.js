import React, { useState } from 'react';
import './PatientLogin.css';

function PatientLogin({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Perform validation and authentication
    // For simplicity, let's assume successful login if username and password match
    const validUsers = ['mercy', 'collo', 'EW'];
    const validPasswords = ['123', 'collo123', 'Z'];

    // Check if username and password match any valid combination
    const isValidCombination = validUsers.includes(username) && validPasswords.includes(password);

    if (isValidCombination) {
      onLoginSuccess();
    } else {
      // Display error message if login fails
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="patient-login-container">
      <h2 className="patient-login-title">PATIENT LOGIN</h2>
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
