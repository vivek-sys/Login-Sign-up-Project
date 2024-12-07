import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Singup = () => {
  return (
    <div className="addUser">
      <h3>SIGN UP</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Enter your name"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Enter your email"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Enter your password"
          />
          
          <button type="button" className="btn btn-success">Sign Up</button>
        </div>
      </form>
      <div className="login">
        <p>Already have an Account?</p>
        <Link to="/" type="submit" className="btn btn-primary">Login</Link>
      </div>
    </div>
  );
};

export default Singup;