<<<<<<< HEAD
// In PatientLogin.js
import React, { useState } from 'react';
import './Patientlogin.css';
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
      // Call onLoginSuccess with a parameter indicating success
      onLoginSuccess(true);
=======
import React, { useState } from "react";
import "./Patientlogin.css";

function PatientLogin({ onLoginSucess }) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    // Perform validation and authentication
    // For simplicity, let's assume successful login if email and password match
    if (username === "mercy" && password === "123") {
      onLoginSucess();
>>>>>>> d8be534 (complete)
    } else {
      // Display error message if login fails
      setErrorMessage("Invalid email or password");
    }
  };

  return (
<<<<<<< HEAD
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
=======
    <div className="patient">
      <div className="login-container">
        <h2 className="logintitle">PATIENT LOGIN</h2>
        <div className="input">
          <label className="label" htmlFor="username">
            USERNAME:
          </label>
          <input
            type="username"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div className="inputGroup">
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
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
>>>>>>> d8be534 (complete)
      </div>
    </div>
  );
}

export default PatientLogin;
