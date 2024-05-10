
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home'; 
import DonorsPortal from './Components/DonorsPortal';
import Admin from './Components/Admin'; 
import Bloodbanklist from './Components/Bloodbanklist';
import PatientPortal from './Components/PatientPortal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  return (
    
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/patient" element={<PatientPortal />} />
          <Route path="/donor" element={<DonorsPortal />} /> 
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Home />} />
           <Route path="/bloodbanks" element={<Bloodbanklist />} />
        </Routes>
      </div>
    </Router>
  
      
    
  );
}

export default App;