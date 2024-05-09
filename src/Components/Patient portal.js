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
 









 </div>
 )
}

export default PatientPortal