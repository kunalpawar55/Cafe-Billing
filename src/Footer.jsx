import React from 'react'
import Logo from'./images/Logo.webp';
import { Link } from 'react-router-dom';
import './CSSfile/Footer.css';
export default function Footer() {
  return (
    <div>
      <div className='footer'>
        <img src={Logo} alt="" srcset="" />
         <h1>City cafe</h1>
      
      <div className="linksfooter">
        <br />
      <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/Contactus'}>Contact-us</Link></li>
            <li><Link to={'/Order'}>Order</Link></li>
          </ul>
      </div>
    </div>
    </div>
  )
}
