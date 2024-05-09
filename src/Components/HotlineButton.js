import React from 'react';
import './Hotlinebutton.css'
const HotlineButton = ({ phoneNumber }) => {
  const handleButtonClick = () => {
    const telURI = `tel:${phoneNumber}`;
    window.open(telURI);
  };

  return (
  
    <button onClick={handleButtonClick}>
      Hotline: {phoneNumber}
    </button>
    
  );
};

export default HotlineButton;
