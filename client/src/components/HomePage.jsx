import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Assuming you'll add styles in this file

function HomePage() {
  const isLoggedIn = false; // Replace with actual authentication logic

  return (
    <div className="homepage">
      <header className="hero-section">
        <div className="overlay">
          <h1>Welcome to CareerCarve 1x1 Scheduler</h1>
          <p>Your personalized scheduling tool for career growth.</p>
          <Link to="/student-dashboard" className="cta-button">
            {isLoggedIn ? 'Go to Dashboard' : 'Get Started'}
          </Link>
        </div>
      </header>

      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {isLoggedIn ? (
            <li><Link to="/logout">Logout</Link></li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>

      <section className="features-section">
        <h2>Why Choose CareerCarve?</h2>
        <div className="features">
          <div className="feature">
            <h3>Personalized Scheduling</h3>
            <p>Manage your appointments with ease and confidence.</p>
          </div>
          <div className="feature">
            <h3>Career Growth</h3>
            <p>Plan your career path with our advanced tools.</p>
          </div>
          <div className="feature">
            <h3>Secure & Private</h3>
            <p>Your data is safe with us, always.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 CareerCarve. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://linkedin.com">LinkedIn</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default HomePage;
