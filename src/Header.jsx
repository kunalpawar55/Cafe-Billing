import React, { useState } from 'react';
import './CSSfile/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './images/Logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Header({name}) {
  const [showmenu, setmenu] = useState(true);
  const [shoesearch, setsearch] = useState('');
  const navigate = useNavigate(); 
  const toggleMenu = () => {
    setmenu(!showmenu);
  };
     const name1=name;
  const search = () => {
    if (shoesearch.trim() === 'Pizza'|| 'pizza' ||'Burgur' ||'burgur'||'Fast Food') {
      navigate('/'); 
    } else {
      console.log('No results found');
    }
  };

  return (
    <div>
      <div className="header-container">
        <div className={showmenu ? 'sidemenu' : 'sidemenu1'}>
          <div>
            <ul className='sidelink'>
              <h1>{name1}</h1>
              <li><Link to={'/Contactus'}>Contact-us</Link></li>
              <li><Link to={'/about'}>About-us</Link></li>
              <li><Link to={'/Login'}>Login</Link></li>
              <li><Link to={'/Signup'}>Sign up</Link></li>
            </ul>
          </div>
        </div>
        <div className='menu'>
          <FontAwesomeIcon className={showmenu ? 'menu2' : 'menu1'} icon={faBars} onClick={toggleMenu} />
        </div>
        <div className="cart">
          <Link to={'/cart'}>
            <FontAwesomeIcon icon={faCartArrowDown} />
          </Link>
        </div>
        <div className="header-content">
          <img src={logo} className="header-logo" alt="Logo" />
          <h2 className="text-center">City Cafe</h2>
        </div>
        <div className="link">
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/Allrestro'}>All Restro</Link></li>
            <li><Link to={'/Order'}>Order</Link></li>
          </ul>
        </div>
        <div className="search">
          <input
            type="search"
            className='Search-1'
            placeholder='Search Food'
            value={shoesearch}
            onChange={(e) => setsearch(e.target.value)}
          />
          <button className='Btn-1' onClick={search}>Submit</button>
        </div>
      </div>
    </div>
  );
}
