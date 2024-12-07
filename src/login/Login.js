import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [items , setItems] = useState({
    email:"",
    pass:""
  })
  const handleLoginUser = ()=>{
    localStorage.setItem('items', JSON.stringify(items));
  }
  return (
    <div className="addUser">
      <h3>Log In</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Enter your email"
            value={items.email}
            onChange={(e)=>setItems({...items, email: e.target.value})}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Enter your password"
            value={items.pass}
            onChange={(e)=>setItems({...items, pass: e.target.value})}
          />
          
          <button type="button" className="btn btn-success" onClick={()=> handleLoginUser()}>Login</button>
        </div>
      </form>
      <div className="signup">
        <p>Don't have an account?</p>
        <Link to="/sign_up" className="btn btn-primary">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;  