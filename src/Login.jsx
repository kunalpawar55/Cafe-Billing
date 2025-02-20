import React, { useState } from 'react';
import './CSSfile/Login.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export default function Login() {
let [showemail,setemail]=useState();
console.log(showemail)
const handellogin=()=>
{
   if(showemail!='')
   {
     alert(showemail)
   }
}
  return (
    <div className='SignLogup'>
      <Header  />
      <div className="loginsigh">
        <h1>Login / Sign up</h1>
      </div>
      <div className="log">
        <div className="sign">
        <Link to={'/Login'}>  <h2 id="login" >Login</h2></Link>
          <Link to={'/signup'}> <h2 id="signup">Sign up</h2></Link>
        </div>
        <form action="">
        <div className="input-fields">
          <input type="text" placeholder="Name" required onChange={e=>setemail(e.target.value)} />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required  />
          <button type='submit' onClick={handellogin}>Submit</button>
          
        </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
