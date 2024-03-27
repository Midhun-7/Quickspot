import React, { useState } from 'react';
import './AdminLayout.css'; // Import the CSS file for styling

const AdminPage = () => {
  const [isVerified1, setIsVerified1] = useState(false);
  const [isVerified2, setIsVerified2] = useState(false);
  const [isVerified3, setIsVerified3] = useState(false);
  const [isVerified4, setIsVerified4] = useState(false);

  const handleVerifyClick1 = () => {
    setIsVerified1(true);
  };
  const handleVerifyClick2 = () => {
    setIsVerified2(true);
  };
  const handleVerifyClick3 = () => {
    setIsVerified3(true);
  };
  const handleVerifyClick4 = () => {
    setIsVerified4(true);
  };

  return (
    <div className="card-container">
      <div className="card">
        <img src="Parking 1.jpg" alt="Image 1"/>
        <div className="info">
          <h2>Tom's Home parking</h2>
          <p>Location: Akkulam</p>
          <p>Pin code: 695011</p>
          <button onClick={handleVerifyClick1}>
            {isVerified1 ? 'Verified' : 'Verify'}
          </button>
        </div>
      </div>

      <div className="card">
        <img src="Parking 2.jpg" alt="Image 2" />
        <div className="info">
        <h2>Akshay's Home parking</h2>
          <p>Location: Sreekaryam</p>
          <p>Pin code: 695011</p>
          <button onClick={handleVerifyClick2}>
            {isVerified2 ? 'Verified' : 'Verify'}
          </button>
        </div>
      </div>

      <div className="card">
        <img src="Parking 3.jpg" alt="Image 3" />
        <div className="info">
        <h2>Ashique's Home parking</h2>
          <p>Location: Palayam</p>
          <p>Pin code: 695011</p>
          <button onClick={handleVerifyClick3}>
            {isVerified3 ? 'Verified' : 'Verify'}
          </button>
        </div>
      </div>

      <div className="card">
        <img src="Parking4.jpg" alt="Image 4" />
        <div className="info">
        <h2>Ajith's Home parking</h2>
          <p>Location: Thampanoor</p>
          <p>Pin code: 695011</p>
          <button onClick={handleVerifyClick4}>
            {isVerified4 ? 'Verified' : 'Verify'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
