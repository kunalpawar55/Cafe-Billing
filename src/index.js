import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Route, Router, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Allrestro from './Allrestro';
import Order from './Order';
import Login from './Login';
import Signup from './Signup';
import Cart from './Cart';
import Contactus from './Contactus';
import About from './About';
import Add_Hotel from '../src/Admin/Add_Hotel'
import PrivateRoute from './PrivateRoute';
import Privaterouteradmin from './Privaterousteradmin';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rout=createBrowserRouter([

  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/Allrestro',
    element:<Allrestro/>
  },
  {
    path:'/Order',
    element:<Order/>
  },
  {
    path:'/Login',
    element:<Login/>
  },
  {path: '/signup',
    element : <Signup/>
  },
  {
    path: '/cart',
    element: <Cart/>
  },
  {
    path:'/Contactus',
    element:<Contactus/>
  },
  {
    path:'/about',
    element:<About/>
  }
,
{
  path:'/Admin',
  element:<Add_Hotel/>
}])


root.render(
  <React.StrictMode>
    <RouterProvider router={rout}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
