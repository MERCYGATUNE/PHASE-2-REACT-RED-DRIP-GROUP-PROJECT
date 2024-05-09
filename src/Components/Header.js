import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

 

function Header() {
  return (
    <header className='head'>
      <nav>
        <ul>
          <h1 className='logo'> <span className='redd'>RED</span><span className='drip'>DRIP</span> <span className='bblood'>&#x1FA78;</span> </h1>      
          <li><Link to="/">Home</Link></li>
          
          <li><Link to="/patient">Patient</Link></li>
          
          <li><Link to="/bloodbanks">bloodbank</Link></li>
      
          <li><Link to="/donor">Donor</Link></li>
               
          <li><Link to="/admin">Admin</Link></li>
          
         
        </ul>
      </nav>
    </header>
  );
}

export default Header;