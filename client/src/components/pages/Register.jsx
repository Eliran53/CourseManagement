import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Form.css";

class Register extends Component {
  render() {
    return (
      <div className="form-content-right">
        <form className="form">
          <h1>Register Users</h1>
          <div className="form-inputs">
            <label className="form-label">Username</label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">Confirm Password</label>
            <input
              className="form-input"
              type="password"
              name="password2"
              placeholder="Confirm your password"
            />
          </div>
          <button className="form-input-btn" type="submit">
            Sign up
          </button>
          <Link to="/Sign-in" className="Singin">
            Sign-in
          </Link>
        </form>
      </div>
    );
  }
}

export default Register;
