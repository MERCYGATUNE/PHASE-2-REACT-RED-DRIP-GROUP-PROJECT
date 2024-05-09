import{useState} from 'react'
import './PatientLogin.css'

function PatientLogin({onLoginSucess}) {

    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleLogin = () => {
      // Perform validation and authentication
      // For simplicity, let's assume successful login if email and password match
      if (username === 'mercy' && password === '123') {
        
        onLoginSuccess();
      } else {
        // Display error message if login fails
        setErrorMessage('Invalid email or password');
      }
    };


  return (
    <div className='patient'>
    <div className='login'>
    <h2 className="logintitle">PATIENT LOGIN</h2>
      <div className="input">
        <label  className='label'htmlFor="username">USERNAME:</label>
        <input
          type="username"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
      </div>
      <div className="inputGroup">
        <label className='label'htmlFor="password">PASSWORD:</label>
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






    </div>
  )
}

export default PatientLogin