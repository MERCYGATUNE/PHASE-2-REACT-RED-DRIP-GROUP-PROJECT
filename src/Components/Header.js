import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'; 

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <p className='logo'> <span className='redd'>RED</span><span className='drip'>DRIP</span> <span className='blood'>&#x1FA78;</span> </p>
           
          <li><Link to="/">Home</Link></li>
          <li><FontAwesomeIcon icon={faHouse} /></li> 
          <li><Link to="/patient">Patient</Link></li>
      <FontAwesomeIcon icon="fa-solid fa-bed" />
          <li><Link to="/donor">Donor</Link></li>
               <FontAwesomeIcon icon="fa-solid fa-bed" />
          <li><Link to="/admin">Admin</Link></li>
          <FontAwesomeIcon icon="fa-solid fa-lock" />
         
        </ul>
      </nav>
    </header>
  );
}

export default Header;