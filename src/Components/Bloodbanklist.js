import React, { useState, useEffect } from 'react';

function BloodBankList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Map over the data array and create a card for each blood bank
  const bloodBanks = data.map((bloodBank, index) => (
    <div className="card" key={index}>
      <h3 className="card-title">{bloodBank.Hospital}</h3>
      <p className="card-content">Location: {bloodBank.location}</p>
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
    <div className="card-container">
      {bloodBanks}
    </div>
  );
}

export default BloodBankList;
