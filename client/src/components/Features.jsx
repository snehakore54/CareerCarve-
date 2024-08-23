import React from 'react';
import './Features.css'

function Features() {
    return (
      <div className="features-section">
        <h2>Key Features of CareerCarve</h2>
        <div className="feature">
          <h3>Personalized Scheduling</h3>
          <p>
            Create and manage your appointments with a few clicks, tailored to 
            fit your unique needs and preferences.
          </p>
        </div>
        <div className="feature">
          <h3>Secure Data Management</h3>
          <p>
            We prioritize your privacy. All your data is stored securely and 
            accessible only by you.
          </p>
        </div>
        <div className="feature">
          <h3>Easy Collaboration</h3>
          <p>
            Our platform makes it easy to connect with career coaches and mentors 
            through intuitive scheduling and communication tools.
          </p>
        </div>
      </div>
    );
  }

export default Features