/*import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmationPage.css';
import { FaCheckCircle } from 'react-icons/fa';

function ConfirmationPage() {
  const sessionDetails = {
    date: 'August 25, 2024',
    time: '10:00 AM - 11:00 AM',
    instructor: 'John Doe',
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <FaCheckCircle className="success-icon" />
        <h2>Session Successfully Booked!</h2>
        <p>Your session has been confirmed with the following details:</p>
        <div className="session-details">
          <p><strong>Date:</strong> {sessionDetails.date}</p>
          <p><strong>Time:</strong> {sessionDetails.time}</p>
          <p><strong>Instructor:</strong> {sessionDetails.instructor}</p>
        </div>
        <div className="confirmation-actions">
          <Link to="/student-dashboard" className="action-button">View Dashboard</Link>
          <Link to="/schedule" className="action-button">Book Another Session</Link>
          <button className="share-button">Share via Email</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
*/
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ConfirmationPage.css';
import { FaCheckCircle } from 'react-icons/fa'; // Success icon

function ConfirmationPage() {
  const location = useLocation();
  const { selectedArea, duration } = location.state || {};

  const sessionDetails = {
    date: 'August 25, 2024',
    time: '10:00 AM - 11:00 AM',
    instructor: 'John Doe',
    area: selectedArea || 'Not specified',
    duration: duration || 30,
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <FaCheckCircle className="success-icon" />
        <h2>Session Successfully Booked!</h2>
        <p>Your session has been confirmed with the following details:</p>
        <div className="session-details">
          <p><strong>Date:</strong> {sessionDetails.date}</p>
          <p><strong>Time:</strong> {sessionDetails.time}</p>
          <p><strong>Instructor:</strong> {sessionDetails.instructor}</p>
          <p><strong>Area:</strong> {sessionDetails.area}</p>
          <p><strong>Duration:</strong> {sessionDetails.duration} mins</p>
        </div>
        <div className="confirmation-actions">
          <Link to="/student-dashboard" className="action-button">View Dashboard</Link>
          <Link to="/schedule" className="action-button">Book Another Session</Link>
          <button className="share-button">Share via Email</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
