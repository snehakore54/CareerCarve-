import React from "react";
import { Link } from "react-router-dom";
import './Logout.css';

function Logout() {
  return (
    <div className="logout-section">
      <h2>You have been logged out</h2>
      <p>Thank you for using CareerCarve. We hope to see you again soon!</p>
      <Link to="/login" className="login-link">Login Again</Link>
    </div>
  );
}

export default Logout;
