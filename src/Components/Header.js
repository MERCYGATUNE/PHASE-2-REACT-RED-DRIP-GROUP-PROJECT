import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 

function Header() {
  return (
    <header className='head'>
      <nav>
        <ul>
          <h1 className='logo'> <span className='redd'>RED</span><span className='drip'>DRIP</span> <span className='bblood'>&#x1FA78;</span> </h1>      
          <li><Link to="/">Home</Link></li>
          {/* <FontAwesomeIcon icon='faHome' /> */}
          <li><Link to="/patient">Patient</Link></li>
          {/* <FontAwesomeIcon icon='faBed' /> */}
          <li><Link to="/bloodbanks">bloodbank</Link></li>
      {/* <FontAwesomeIcon icon='faHospital' /> */}
          <li><Link to="/donor">Donor</Link></li>
               {/* <FontAwesomeIcon icon='faPerson' /> */}
          <li><Link to="/admin">Admin</Link></li>
          {/* <FontAwesomeIcon icon='faLock' /> */}
         
        </ul>
      </nav>
    </header>
  );
}

export default Header;