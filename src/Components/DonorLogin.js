import React, { useState } from 'react';
import './DonorLogin.css';

function DonorLogin({ onLoginSuccess }) {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Perform validation and authentication
    // For simplicity, let's assume successful login if email and password match
    if (username === 'collo' && password === 'collo123') {
      
      onLoginSuccess();
    } else {
      // Display error message if login fails
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="loggin-container">
      <h2 className="donor-login-title">Donor Login</h2>
      <div className="input-group">
        <label htmlFor="username">username:</label>
        <input
          type="username"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
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

export default DonorLogin;