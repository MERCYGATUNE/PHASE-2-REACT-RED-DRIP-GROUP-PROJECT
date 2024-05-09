import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<<<<<<< HEAD
import { faBed, faHospital, faHouse, faLock, faPerson } from '@fortawesome/free-solid-svg-icons'; 
=======

>>>>>>> d95af75307a16ca7770199407e1e1a44789b9d0d

function Header() {
  return (
    <header className='head'>
      <nav>
        <ul>
          <h1 className='logo'> <span className='redd'>RED</span><span className='drip'>DRIP</span> <span className='bblood'>&#x1FA78;</span> </h1>      
          <li><Link to="/">Home</Link></li>
          <li><Link to="/patient">Patient</Link></li>
<<<<<<< HEAD
      <FontAwesomeIcon icon={faBed} />
=======
          <li><Link to="/bloodbanks">bloodbank</Link></li>
      <FontAwesomeIcon icon="fa-solid fa-bed" />
>>>>>>> d95af75307a16ca7770199407e1e1a44789b9d0d
          <li><Link to="/donor">Donor</Link></li>
               <FontAwesomeIcon icon={faPerson} />
               <li> <Link to="/bloodbanks">Blood Banks </Link> </li>
               <FontAwesomeIcon icon={faHospital} />
          <li><Link to="/admin">Admin</Link></li>
          <FontAwesomeIcon icon={faLock} />
                                      
         
        </ul>
      </nav>
    </header>
  );
}

export default Header;