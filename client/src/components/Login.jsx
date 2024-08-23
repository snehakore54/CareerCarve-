import React from "react";
import './Login.css'

function Login() {
    return (
      <div className="login-section">
        <h2>Login to CareerCarve</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    );
  }
export default Login  