import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import './CSSfile/Signup.css';
import axios from 'axios';

export default function Registration() {
  const [fullname, setFullname] = useState('');
  const [gender, setGender] = useState('Male');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [conpass, setConpass] = useState('');
  const user="User";
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (password !== conpass) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      userName: fullname,
      gender: gender,
      email: email,
      password: password,
      userType:user
    };

    axios.post("http://localhost:8080/api/postdata", userData)
      .then((res) => {
        alert("Registered Successfully");
        navigate('/Login');
      })
      .catch((err) => {
        console.error("Error while registration:", err);
        alert("Something went wrong during registration.");
      });
  };

  return (
    <div className='SignLogup'>
      <Header />
      <div className="signtitel">
        <h1>Login / Sign up</h1>
      </div>
      <div className="signup1">
        <div className="sign2">
          <Link to={'/Login'}><h2 id="login">Login</h2></Link>
          <h2 id="signup">Sign up</h2>
        </div>
        <div className="sign3">
          <input type="text" placeholder="Enter Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
          <select id="select" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPass(e.target.value)} required />
          <input type="password" placeholder="Confirm Password" value={conpass} onChange={(e) => setConpass(e.target.value)} required />
          <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
