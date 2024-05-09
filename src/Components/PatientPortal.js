import{useState} from 'react'
import './Patientlogin.css'

function PatientLogin({onLoginSucess}) {

    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleLogin = () => {
      if (username === 'mercy' ,'dv' && password === '123', 'fw') {
        
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

    </div>
  )
}

export default PatientLogin