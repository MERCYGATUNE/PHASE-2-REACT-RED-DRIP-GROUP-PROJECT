import React, { useState, useEffect } from 'react';
import './Bloodbanklist.css'

function BloodBankList() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setFilteredData(data); // Initially set filtered data to all data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Function to handle search input change
  const handleSearchChange = event => {
    const query = event.target.value;
    setSearchQuery(query);
    filterData(query);
  };

  // Function to filter data based on search query
  const filterData = query => {
    const filtered = data.filter(bloodBank => {
      const locationMatch = bloodBank.location.toLowerCase().includes(query.toLowerCase());
      const hospitalMatch = bloodBank.Hospital.toLowerCase().includes(query.toLowerCase());
      return locationMatch || hospitalMatch;
    });
    setFilteredData(filtered);
  };

  // Map over the filtered data array and create a card for each blood bank
  const bloodBanks = filteredData.map((bloodBank, index) => (
    <div className="card" key={index}>
      <h3 className="cccard-title">{bloodBank.Hospital}</h3>
      <p id='loccation' className="card-content">Location: {bloodBank.location}</p>
      <p className="card-content">Blood Units in Stock: {bloodBank["Blood Units in Stock in Hospital"]}</p>
      <p className="card-content">Pending Requests: {bloodBank["Pending Requests"]}</p>
      <p className="card-content">Rejected Requests: {bloodBank["Rejected Requests"]}</p>
      <p className="card-content">Approved Requests: {bloodBank["Approved Requests"]}</p>
      <p className="card-content">Donor: {bloodBank.Donor}</p>
      <p className="card-content">Donor Age: {bloodBank["Donor Age"]}</p>
      <p className="card-content">Request Date: {bloodBank["Request Date"]}</p>
      <p className="card-content">Blood Recipient: {bloodBank["Blood Recipient"]}</p>
      <p className="card-content">Recipient Age: {bloodBank["Recipient Age"]}</p>
      <p className="card-content">Donaters: {bloodBank.Donaters}</p>
      <p className="card-content">Emergency Contact: {bloodBank["Emergency Contact"]}</p>
      <p className="card-content">Blood Group: {bloodBank["Blood Group"]}</p>
      <img src={bloodBank.image} alt="Blood Bank" className="card-image" />
    </div>
  ));

  return (
    <div className="blood-bank-list">
      {/* Search input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by location or hospital..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {/* Display blood banks */}
      <div className="card-container">
        {bloodBanks}
      </div>
    </div>
  );
}

export default BloodBankList;
