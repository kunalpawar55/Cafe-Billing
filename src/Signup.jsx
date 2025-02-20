import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import './CSSfile/Signup.css'
export default function Registration() {
    let[showpass,setpass]=useState();
let[conpass,setconpass]=useState(); 
  const navigate =useNavigate();

let handel=()=>
{
    if(showpass===conpass && showpass.length>=8)
    {
        alert('Thanku For Registration')
           navigate('/')
    }
    else{
     alert('Soory Please Enter valid pass')
    }
}

  return (
    <div className='SignLogup'>
      <Header />
      <div className="signtitel">
      <h1>Login / Sign up</h1>
      </div>
      <div className="signup1">
        <div className="sign2">
          <Link to={'/Login'}>  <h2 id="login">Login</h2></Link>
          <h2 id="signup">Sign up</h2>
        </div>
        <div className="sign3">
          <input type="text" placeholder="Enter Full Name" required />
    <select name="" id="select">
        <option value="Male">Male</option>
        <option value="Female">female</option>
    </select >
          <input type="email" placeholder="Enter Email" required />
          <input type="password" placeholder="Enter Password" required onChange={(e)=>setpass(e.target.value)} />
          <input type="password" placeholder="Confirm  Password" required onChange={(e)=>setconpass(e.target.value)}  />
          <button type='submit' onClick={handel}>Submit</button>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}
