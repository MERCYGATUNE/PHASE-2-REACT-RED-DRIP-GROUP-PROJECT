import React, { useState } from 'react';
import './DonorLogin.css';

function DonorLogin({ onLoginSuccess }) {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Perform validation
    if (username === 'collo','EW' && password === 'collo123','Z') {
      
      onLoginSuccess();
    } else {
      setErrorMessage('Invalid email or password');
    }
  };
  return (
    
    <div className="loggin-container">
      <h2 className="donor-login-title">DONOR LOGIN</h2>
      <div className="input-group">
        <label htmlFor="username">USERNAME:</label>
        <input
          type="username"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
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
  {/*      
      {errorMessage && <p className="error-message">{errorMessage}</p>} */}
      <button className="login-button" onClick={handleLogin}>Login</button>
    </div>
  );
}
export default DonorLogin;
