
import React, { useState } from 'react';
import './AdminLogin.css';

function AdminLogin({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'collo', 'hawi' && password === 'collo123','hawi123') {
      // Redirect to admin dashboard upon successful login
      onLoginSuccess();
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2 className='admin-login'>Admin Login</h2>
      <div className="input-group">
        <label className='usernamme' htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder='username...'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder='password..'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button className='loggg' onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AdminLogin;