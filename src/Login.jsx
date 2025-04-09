import React, { useState } from 'react';
import './CSSfile/Login.css';
import Header from './Header';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [showemail, setemail] = useState('');
  const [password, setpass] = useState('');
  const navigate = useNavigate();

  const handellogin = (e) => {
    e.preventDefault();

    axios.get("http://localhost:8080/api/getdata")
      .then((res) => {
        const data = res.data;

        if (Array.isArray(data)) {
          const foundUser = data.find(
            (user) => user.email === showemail && user.password === password
          );

          if (foundUser) {
            alert("Login successful!");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("fullName", foundUser.userName); 
            localStorage.setItem("username", foundUser.email);  
            localStorage.setItem("userType",foundUser.userType)
            console.log(foundUser.userType)
            navigate('/');
          } else {
            alert("Invalid credentials");
          }
        } else {
          alert("Login failed: Unexpected response from server");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Login failed: Server error");
      });
  };

  return (
    <div className='SignLogup'>
      <Header />
      <div className="loginsigh">
        <h1>Login / Sign up</h1>
      </div>
      <div className="log">
        <div className="sign">
          <Link to={'/Login'}><h2 id="login">Login</h2></Link>
          <Link to={'/signup'}><h2 id="signup">Sign up</h2></Link>
        </div>
        <form>
          <div className="input-fields">
            <input 
              type="email" 
              placeholder="Email" 
              required 
              onChange={(e) => setemail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              required 
              onChange={(e) => setpass(e.target.value)} 
            />
            <button type='submit' onClick={handellogin}>Submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
