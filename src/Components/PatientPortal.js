
import React, { useState } from 'react';
import PatientLogin from './PatientLogin';
import './PatientPortal.css';

function ParentComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    address: '',
    hospital: '',
    mobile: ''
  });
  const [admitted, setAdmitted] = useState(false);

  const handleLoginSuccess = (success) => {
    setIsLoggedIn(success);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a server-side validation and admission process
    if (formData.name && formData.bloodGroup && formData.address && formData.hospital && formData.mobile) {
      // Data is valid, set admission status to true
      setAdmitted(true);
      // Clear form fields after successful admission
      setFormData({
        name: '',
        bloodGroup: '',
        ALLERGIES: '',
        HIVSTATUS: '',
        address: '',
        hospital: '',
        mobile: ''
      });
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2 className='weeeelcome'>Welcome to the Patient Portal</h2>
          {admitted ? (
            <p className="success-message">Admitted successfully!</p>
          ) : (
            <div className="data-container">
              <h3>Enter Patient Information</h3>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="bloodGroup">Blood Group:</label>
                <input
                  type="text"
                  id="bloodGroup"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                />
                 <label htmlFor="ALLERGIES">ALLERGIES:</label>
                <input
                  type="text"
                  id="ALLERGIES"
                  name="ALLERGIES"
                  value={formData.ALLERGIES}
                  onChange={handleChange}
                />
               <label htmlFor="HIV STATUS">HIV STATUS:</label>
                <input
                  type="text"
                  id="HIV STATUS"
                  name="HIV STATUS"
                  value={formData.HIVSTATUS}
                  onChange={handleChange}
                />
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <label htmlFor="hospital">Hospital:</label>
                <input
                  type="text"
                  id="hospital"
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleChange}
                />
                <label htmlFor="mobile">Mobile:</label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      ) : (
        <PatientLogin onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default ParentComponent;

