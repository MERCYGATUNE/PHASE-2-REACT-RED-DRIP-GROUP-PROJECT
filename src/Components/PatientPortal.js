<<<<<<< HEAD
import {useState} from 'react'
import PatientLogin from './PatientLogin'
import './PatientPortal.css'


function PatientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ setUsername] = useState('');

  const handleLoginSuccess = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };
  return (
    <div className="portal">
      {/* Navbar */}
      <nav className="navbar">
        <nl>
          <li><a href="#home">DONOR DETAILS</a></li>
          <li><a href="#donateblood">DONOR HISTORY</a></li>
          <li><a href="#details">HEALTH HISTORY</a></li>
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
          <PatientLogin onLoginSuccess={handleLoginSuccess} />
        )}
      </div>
      








=======
import{useState} from 'react'
import './Patientlogin.css'

function PatientLogin({onLoginSucess}) {

    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleLogin = () => {
      if (username === 'mercy' ,'dv' && password === '123', '') {
        
        // onLoginSuccess();
      } else {
        // Display error message if login fails
        setErrorMessage('Invalid email or password');
      }
    };


  return (
    <div className='patientt'>
    <div className='login'>
    <h2 className="logiintitle">PATIENT LOGIN</h2>
      <p className="input">
        <label  className='label'htmlFor="username">USERNAME:</label>
        <input
          type="username"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
      </p>
      <p className="inputGroup">
        <label className='label'htmlFor="password">PASSWORD:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button className="login-button" onClick={handleLogin}>Login</button>
       </div>
>>>>>>> eca508c (updated)

    </div>
  )
}

<<<<<<< HEAD
export default PatientPortal
=======
export default PatientLogin
>>>>>>> eca508c (updated)
