import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

=======

 
>>>>>>> b359e7299511ee45f4476d8517459dea754a6516

function Header() {
  return (
    <header className='head'>
      <nav>
        <ul>
          <h1 className='logo'> <span className='redd'>RED</span><span className='drip'>DRIP</span> <span className='bblood'>&#x1FA78;</span> </h1>      
          <li><Link to="/">Home</Link></li>
<<<<<<< HEAD
          <li><Link to="/patient">Patient</Link></li>
          <li><Link to="/bloodbanks">bloodbank</Link></li>
      <FontAwesomeIcon icon="fa-solid fa-bed" />
          <li><Link to="/donor">Donor</Link></li>
               <FontAwesomeIcon icon="fa-solid fa-bed" />
          <li><Link to="/admin">Admin</Link></li>
          <FontAwesomeIcon icon="fa-solid fa-lock" />
=======
          
          <li><Link to="/patient">Patient</Link></li>
          
          <li><Link to="/bloodbanks">bloodbank</Link></li>
      
          <li><Link to="/donor">Donor</Link></li>
               
          <li><Link to="/admin">Admin</Link></li>
          
>>>>>>> b359e7299511ee45f4476d8517459dea754a6516
         
        </ul>
      </nav>
    </header>
  );
}

export default Header;