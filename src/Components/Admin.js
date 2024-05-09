import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLogin from './AdminLogin';
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cardsData, setCardsData] = useState([]);
  const [donorDetails, setDonorDetails] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State to track sidebar visibility

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      axios.get('http://localhost:5000/bloodgroup')
        .then(response => {
          setCardsData(response.data); 
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

      fetch('http://localhost:2000/donar') // Assuming donorDetails.json is in public folder
        .then(response => response.json())
        .then(data => {
          setDonorDetails(data); 
        })
        .catch(error => {
          console.error('Error fetching donor details:', error);
        });
    }
  }, [isLoggedIn]);

  // Add an empty card object
  useEffect(() => {
    setCardsData(prevData => [...prevData, {}]);
  }, []);

  // Calculate total number
  const totalNumber = cardsData.reduce((acc, card) => acc + (card.number || 0), 0);

  // Function to handle edit action
  const handleEdit = (id) => {
    // Logic to handle edit action
    console.log(`Editing donor with ID: ${id}`);
  };

  // Function to handle delete action
  const handleDelete = (id) => {
    // Logic to delete a donor by ID
    const updatedDonorDetails = donorDetails.filter(detail => detail.id !== id);
    setDonorDetails(updatedDonorDetails);
  };

  // Render donor details table
  const renderDonorDetails = () => {
    return (
      <div>
        <h1 className='ddonar' id='donar'>Donars history</h1>
        <table className="donor-details">
          <thead>
            <tr>
              <th>Name</th>
              <th>Blood Group</th>
              <th>Address</th>
              <th>hospital</th>
              <th>mobile</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            {donorDetails.map((detail, index) => (
              <tr key={index}>
                <td>{detail.name}</td>
                <td>{detail.bloodGroup}</td>
                <td>{detail.address}</td>
                <td>{detail.hospital}</td>
                <td>{detail.mobile}</td>
                <td>
                  <button onClick={() => handleEdit(detail.id)}>Edit</button>
                  <button onClick={() => handleDelete(detail.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Function to scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="admin-page">
      <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
        <ul>
    
          <li><a href='#' onClick={() => scrollToSection('home')}>BLOOD STOCK</a></li>
          <FontAwesomeIcon icon="fa-solid fa-user" />
          <li><a href='#donor' onClick={() => scrollToSection('donor')}>DONORS HISTORY</a></li>
          <li><a href='#blood-request' onClick={() => scrollToSection('blood-request')}>Blood Requests</a></li>
        </ul>
      </div>
      <div className="main-content">
        {isLoggedIn ? (
          <div className='homee' id='home'>
            <h2 className='welcomm'>Welcome to the Admin Dashboard</h2>
            <div className="card-container">
              {cardsData.map((card, index) => (
                <div className="card" key={index}>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-content">blood in stock: {card.number}</p>
                </div>
              ))}
              <div className="card">
                <h3 className="card-title">Total ml remaining: &#x1FA78;</h3>
                <p className="card-content">{totalNumber}</p>
              </div>
            </div>
            {renderDonorDetails()}
          </div>
        ) : (
          <AdminLogin onLoginSuccess={handleLoginSuccess} />
        )}
      </div>
    </div>
  );
}

export default Admin;
